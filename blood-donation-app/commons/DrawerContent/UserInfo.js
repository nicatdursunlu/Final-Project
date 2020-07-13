import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { connect } from "react-redux";

import { COLORS } from "./../../styles/colors";
import { CustomText } from "../../components";
import {
  selectAuthFullname,
  selectAuthUsername,
  selectAuthPhoto,
  logOut,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  fullName: selectAuthFullname(state),
  username: selectAuthUsername(state),
  photo: selectAuthPhoto(state),
});

export const UserInfo = connect(mapStateToProps, { logOut })(
  ({ fullName, username, photo }) => (
    <View style={styles.userInfo}>
      <Image
        style={styles.avatar}
        source={{
          uri:
            photo ||
            "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png",
        }}
      />

      <CustomText weight="bold" style={styles.fullName}>
        {fullName}
      </CustomText>
      <CustomText weight="semi" style={styles.username}>
        @{username}
      </CustomText>
    </View>
  )
);

const styles = StyleSheet.create({
  userInfo: {
    margin: 25,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  fullName: {
    fontSize: 25,
  },
  username: {
    color: COLORS.LINK,
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 10,
    alignSelf: "flex-start",
  },
});
