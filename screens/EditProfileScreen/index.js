import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import { Container } from "./../../commons";
import { BLOOD_TYPES } from "../../utils/dummy";
import { AvatarUploader } from "./AvatarUploader";
import { getWidthByPercents } from "../../utils/getWidthByPercents";
import { CustomText, SelectGroup, CustomBtn, Field } from "../../components";
import {
  selectName,
  selectUsername,
  selectBlood,
  selectPhoto,
  uploadPhoto,
  updateUserInfo,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  fullName: selectName(state),
  username: selectUsername(state),
  bloodType: selectBlood(state),
  photo: selectPhoto(state),
});

export const EditProfileScreen = connect(mapStateToProps, {
  uploadPhoto,
  updateUserInfo,
})(({ username, fullName, bloodType, navigation, updateUserInfo }) => {
  const [fields, setFields] = useState({
    fullName,
    username,
    bloodType: bloodType || "",
  });
  const fieldsChangeHandler = (name, value) =>
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));

  const goBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    updateUserInfo(fields);
    navigation.goBack();
  };

  const width = getWidthByPercents(75, 2);
  const btnWidth = getWidthByPercents(45, 2);
  const { colors } = useTheme();
  return (
    <Container>
      <AvatarUploader navigation={navigation} fullName={fullName} />
      <View style={styles.row}>
        <CustomText>Fullname</CustomText>
        <Field
          style={{ width }}
          value={fields.fullName}
          placeholder={fields.fullName}
          onChangeText={(val) => fieldsChangeHandler("fullName", val)}
        />
      </View>
      <View style={styles.row}>
        <CustomText>Username</CustomText>
        <Field
          style={{ width }}
          value={fields.username}
          placeholder={fields.username}
          onChangeText={(val) => fieldsChangeHandler("username", val)}
        />
      </View>
      <View style={styles.row}>
        <CustomText>Blood type</CustomText>
        <SelectGroup
          style={{ width }}
          initial={bloodType}
          options={BLOOD_TYPES}
          onChangeOption={(val) => fieldsChangeHandler("bloodType", val)}
        />
      </View>
      <View style={styles.actions}>
        <CustomBtn
          title="Cancel"
          onPress={goBack}
          width={btnWidth}
          titleStyle={{ color: colors.secondaryText }}
          style={{ backgroundColor: colors.card }}
        />
        <CustomBtn title="Save" width={btnWidth} onPress={onSubmit} />
      </View>
    </Container>
  );
});

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
    width: "100%",
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  actions: {
    zIndex: -2,
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
