import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { UserInfo } from "./UserInfo";
import {
  selectAuthFullname,
  selectAuthBloodType,
  selectAuthPhoto,
  selectAuthEmail,
  deleteAuthPhoto,
  editUsername,
} from "../../store/auth";
import { COLORS } from "../../styles";

const mapStateToProps = (state) => ({
  fullName: selectAuthFullname(state),
  bloodType: selectAuthBloodType(state),
  photo: selectAuthPhoto(state),
  email: selectAuthEmail(state),
});

export const ProfileScreen = connect(mapStateToProps, {
  deleteAuthPhoto,
  editUsername,
})(({ fullName, bloodType, photo, email }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.MAIN }}>
      <UserInfo
        fullName={fullName}
        bloodType={bloodType}
        userAvatar={photo}
        email={email}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // color: COLORS.BG,
  },
});
