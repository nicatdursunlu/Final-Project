import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "@ui-kitten/components";
import { connect } from "react-redux";

import { AvatarUploader } from "./AvatarUploader";
import { BLOOD_TYPES } from "../../utils/selectOptions";
import { getWidthByPercents } from "../../utils/getWidthByPercents";
import { CustomText, SelectGroup, CustomBtn } from "../../components";
import { Container } from "./../../commons/Container";
import {
  selectName,
  selectUsername,
  selectBlood,
  selectPhoto,
  editUsername,
  editFullname,
  addBloodType,
  uploadPhoto,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  fullName: selectName(state),
  username: selectUsername(state),
  bloodType: selectBlood(state),
  photo: selectPhoto(state),
});

export const EditProfileScreen = connect(mapStateToProps, {
  editUsername,
  editFullname,
  addBloodType,
  uploadPhoto,
})(
  ({
    username,
    fullName,
    bloodType,
    editUsername,
    editFullname,
    addBloodType,
    navigation,
  }) => {
    const fieldsInitialState = {
      fullName: fullName,
      username: username,
      bloodType: bloodType || "",
    };

    const [fields, setFields] = useState(fieldsInitialState);

    const fieldsChangeHandler = (name, value) =>
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));

    const goBack = () => {
      navigation.goBack();
    };

    const onSubmit = () => {
      if (fields.fullName.trim() === "") editFullname(fullName);
      else editFullname(fields.fullName);
      if (fields.username.trim() === "") editUsername(username);
      else editUsername(fields.username);
      if (fields.bloodType.trim() === "") addBloodType(bloodType);
      else addBloodType(fields.bloodType);
      navigation.goBack();
    };

    return (
      <Container>
        <AvatarUploader navigation={navigation} fullName={fullName} />
        <View style={styles.row}>
          <CustomText>Fullname</CustomText>
          <Input
            value={fields.fullName}
            placeholder={fields.fullName}
            style={styles.field}
            onChangeText={(val) => fieldsChangeHandler("fullName", val)}
          />
        </View>
        <View style={styles.row}>
          <CustomText>Username</CustomText>
          <Input
            value={fields.username}
            placeholder={fields.username}
            style={styles.field}
            onChangeText={(val) => fieldsChangeHandler("username", val)}
          />
        </View>
        <View style={styles.row}>
          <CustomText>Blood type</CustomText>
          <SelectGroup
            onChangeOption={(val) => fieldsChangeHandler("bloodType", val)}
            options={BLOOD_TYPES}
            initial={bloodType}
            style={styles.bloodType}
          />
        </View>
        <View style={styles.actions}>
          <CustomBtn
            title="Cancel"
            width={getWidthByPercents(45, 2)}
            onPress={goBack}
            style={{ backgroundColor: "lightgrey" }}
          />
          <CustomBtn
            title="Save"
            width={getWidthByPercents(45, 2)}
            onPress={onSubmit}
          />
        </View>
      </Container>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "baseline",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 7,
  },
  field: {
    width: getWidthByPercents(70, 2),
  },
  bloodType: {
    width: getWidthByPercents(70, 2),
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: -2,
    marginTop: 20,
    width: "100%",
  },
});
