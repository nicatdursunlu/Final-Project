import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";

import { CustomText, Link, CustomBtn } from "../../components";
import { EditButton } from "./EditButton";
import { InfoCard } from "./InfoCard";
import { IMAGES, ICONS } from "../../styles";
import { Icon } from "@ui-kitten/components";

const { height } = Dimensions.get("screen");

export const UserInfo = ({ fullName }) => {
  const myProfile = false;

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImg} source={IMAGES.profileBG}>
        {myProfile && <EditButton style={styles.editBtn} />}
        <View style={styles.userInfo}>
          <InfoCard value="B+" text="blood type" style={styles.bloodType} />
          <Image style={styles.avatarImg} source={IMAGES.femaleAvatar} />
          <InfoCard
            value="870 ml"
            text="total donation"
            style={styles.donation}
            textStyle={styles.donationText}
          />
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <View
          style={[
            styles.wrapper,
            { justifyContent: myProfile ? "center" : "space-between" },
          ]}
        >
          <CustomText weight="bold" style={styles.fullName}>
            {fullName}
          </CustomText>
          {!myProfile ? (
            <CustomBtn
              title="Message"
              style={styles.messageBtn}
              titleStyle={styles.btnText}
            />
          ) : null}
        </View>
        <View style={styles.row}>
          <Image source={ICONS.location} />
          <Link
            title="9768 Fairway Lane, Flushing, NY 11354"
            style={styles.location}
          />
        </View>
        <View style={styles.row}>
          <Icon name="envelope" pack="font-awesome" style={styles.icon} />
          <CustomText>m.jane@gmail.com</CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: 20,
    color: "blue",
    marginRight: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImg: {
    width: "100%",
    height: height * 0.25,
    marginBottom: 45,
    alignItems: "center",
  },
  userInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    top: 65,
  },
  editBtn: {
    position: "absolute",
    top: 18,
    zIndex: 10,
  },
  avatarImg: {
    width: 150,
    height: 150,
  },
  bloodType: {
    backgroundColor: "#6979F8",
    left: 20,
  },
  donation: {
    backgroundColor: "#D66879",
    right: 20,
  },
  donationText: {
    fontSize: 25,
    lineHeight: 30,
  },
  fullName: {
    fontSize: 27,
  },
  body: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    marginTop: 15,
  },
  // icon: {
  //   marginRight: 8,
  // },
  location: {
    textDecorationLine: "none",
    color: "#6979F8",
  },
  messageBtn: {
    height: 35,
    width: 100,
    borderRadius: 50,
    backgroundColor: "#6979F8",
    top: 5,
  },
  btnText: {
    textTransform: "none",
    fontSize: 15,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});
