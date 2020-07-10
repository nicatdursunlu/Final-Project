import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

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
  ({ fullName, username, photo }) => {
    console.log("photo url: ", photo, fullName, username);
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <LinearGradient
            colors={["#FF647C", "white"]}
            style={{ ...StyleSheet.absoluteFill }}
            start={[0.5, 0.1]}
            end={[0.5, 1.2]}
          />
          <View style={styles.imageWrapper}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  photo === ""
                    ? "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
                    : photo,
              }}
            />
          </View>
          <CustomText weight="bold" style={styles.fullName}>
            {fullName}
          </CustomText>
          <CustomText weight="semi" style={styles.username}>
            @{username}
          </CustomText>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  imgBackground: {
    width: "100%",
    height: 200,
  },
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  imageWrapper: {
    marginTop: 25,
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#eee",
    elevation: 13,
    borderRadius: 100,
    // borderWidth: 3,
    // borderColor: "#FF647C",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  fullName: {
    color: "red",
    fontSize: 25,
  },
  username: {
    color: "blue",
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 10,
  },
});
