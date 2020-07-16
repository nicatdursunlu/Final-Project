import React, { useState } from "react";
import { StyleSheet, View, Image, Alert, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import { selectPhoto, uploadPhoto, removeAvatar } from "../../store/auth";
import { CustomText } from "../../components";
import { ModalWindow } from "./ModalWindow";
import { avatarMaker } from "../../components/avatarMaker";

const mapStateToProps = (state) => ({
  photo: selectPhoto(state),
});

const imagePickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [1, 1],
};

export const AvatarUploader = connect(mapStateToProps, {
  uploadPhoto,
  removeAvatar,
})(({ photo, uploadPhoto, removeAvatar, fullName }) => {
  const [isEdit, setIsEdit] = useState(false);
  const selectImage = async (isCamera) => {
    try {
      const permission = await requestCameraPermissions();
      if (permission) {
        let image;
        if (isCamera) {
          image = await ImagePicker.launchCameraAsync(imagePickerOptions);
        } else {
          image = await ImagePicker.launchImageLibraryAsync(imagePickerOptions);
        }
        const { cancelled, uri } = image;

        if (!cancelled) {
          uploadPhoto(uri);
        }
      }
    } catch (error) {
      console.log("selectImageError: ", error);
    }
  };

  const takePhoto = () => {
    selectImage(true);
    setIsEdit(false);
  };

  const chooseFromGallery = () => {
    selectImage(false);
    setIsEdit(false);
  };

  const deleteHandler = () => {
    removeAvatar();
    setIsEdit(false);
  };

  return (
    <View style={styles.container}>
      {photo ? (
        <Image source={{ uri: photo }} style={styles.photo} />
      ) : (
        <View style={styles.photo}>{avatarMaker(fullName, 45)}</View>
      )}

      <TouchableOpacity onPress={() => setIsEdit(!isEdit)}>
        <CustomText style={styles.text}>Change Profile Photo</CustomText>
      </TouchableOpacity>
      <ModalWindow
        visible={isEdit}
        onBackdropPress={() => setIsEdit(false)}
        takePhoto={takePhoto}
        chooseFromGallery={chooseFromGallery}
        deleteHandler={deleteHandler}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 15,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
  text: {
    fontSize: 16,
    color: "#6979f8",
    marginVertical: 10,
  },
});

async function requestCameraPermissions() {
  try {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.log("status: ", status);
    if (status === "granted") return true;
    else {
      Alert.alert(
        "Access denied",
        "Go to device settings and enable access",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      return false;
    }
  } catch (error) {
    Alert.alert(error.message);
  }
}
