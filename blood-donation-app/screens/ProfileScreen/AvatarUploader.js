import React from "react";
import { StyleSheet, View, Image, Alert, Button } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";

import { selectAuthPhoto, uploadAuthPhoto } from "../../store/auth";

const mapStateToProps = (state) => ({
  photo: selectAuthPhoto(state),
});

const imagePickerOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [1, 1],
};

export const AvatarUploader = connect(mapStateToProps, { uploadAuthPhoto })(
  ({ photo, uploadAuthPhoto }) => {
    const selectImage = async (isCamera) => {
      try {
        const permission = await requestCameraPermissions();
        if (permission) {
          let image;
          if (isCamera) {
            image = await ImagePicker.launchCameraAsync(imagePickerOptions);
          } else {
            image = await ImagePicker.launchImageLibraryAsync(
              imagePickerOptions
            );
          }
          const { cancelled, uri } = image;

          if (!cancelled) {
            uploadAuthPhoto(uri);
          }
        }
      } catch (error) {
        console.log("selectImageError: ", error);
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: photo }} style={styles.photo} />
        </View>
        <View style={styles.row}>
          <View style={styles.btn}>
            <Button title="Choose from gallery" onPress={() => selectImage()} />
          </View>
          <View style={styles.btn}>
            <Button title="Take Photo" onPress={() => selectImage(true)} />
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#eee",
    elevation: 3,
    alignSelf: "center",
  },
  photo: {
    height: "100%",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    width: "48%",
  },
});

async function requestCameraPermissions() {
  try {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    console.log("status: ", status);
    if (status === "granted") {
      return true;
    } else {
      Alert.alert("Fail", "Need provide camera permission for this feature");
      return false;
    }
  } catch (error) {
    Alert.alert(error.message);
  }
}
