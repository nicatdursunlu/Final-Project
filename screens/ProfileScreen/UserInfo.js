import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { CustomText, CustomBtn } from "../../components";
import { Container } from "./../../commons/Container";
import { COLORS } from "../../styles";

export const UserInfo = ({ fullName, bloodType, userAvatar, email }) => {
  const myProfile = true;
  return (
    <Container>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.userAvatar}
          source={{
            uri:
              userAvatar === ""
                ? "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
                : userAvatar,
          }}
        />
      </View>

      <View style={styles.userInfo}>
        <CustomText weight="bold" style={styles.fullName}>
          {fullName}
        </CustomText>
        <CustomText weight="bold" style={styles.fullName}>
          {email}
        </CustomText>

        {myProfile && (
          <CustomBtn
            title="Message"
            style={styles.messageBtn}
            titleStyle={styles.btnText}
          />
        )}

        <View style={styles.row}>
          <View style={styles.bloodType}>
            <CustomText weight="bold" style={styles.value}>
              {bloodType}
            </CustomText>
            <CustomText style={styles.text}>Blood Type</CustomText>
          </View>
          <View style={styles.donation}>
            <CustomText weight="bold" style={styles.value}>
              870 ml
            </CustomText>
            <CustomText style={styles.text}>total donation</CustomText>
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: COLORS.BORDER,
    elevation: 3,
    alignSelf: "center",
    marginTop: 80,
  },
  userAvatar: {
    width: "100%",
    height: "100%",
  },

  fullName: {
    fontSize: 27,
    paddingBottom: 10,
  },
  userInfo: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  messageBtn: {
    height: 35,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#FF647C",
    top: 5,
  },
  btnText: {
    textTransform: "none",
    fontSize: 15,
    color: COLORS.TITLE,
  },

  bloodType: {
    marginRight: 30,
  },
  value: {
    fontSize: 20,
    color: "#FF647C",
    textAlign: "center",
  },
  text: {
    textTransform: "uppercase",
  },
});
