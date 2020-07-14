import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { connect } from "react-redux";

import { COLORS } from "./../../styles/colors";
import { CustomText } from "../../components";
import {
  selectName,
  selectUsername,
  selectPhoto,
  logOut,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  fullName: selectName(state),
  username: selectUsername(state),
  photo: selectPhoto(state),
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
      <CustomText
        numberOfLines={1}
        ellipsizeMode="tail"
        weight="bold"
        style={styles.fullName}
      >
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
    margin: 20,
    marginTop: 40,
    alignItems: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  fullName: {
    fontSize: 22,
    color: "grey",
    marginVertical: 5,
  },
  username: {
    color: COLORS.LINK,
    fontSize: 15,
  },
});
