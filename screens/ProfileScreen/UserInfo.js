import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

import { GLOBAL_STYLES } from "../../styles";
import { CustomText, CustomBtn } from "../../components";
import { avatarMaker } from "./../../components/avatarMaker";

export const UserInfo = ({ fullName, bloodType, photo, email, navigation }) => {
  const sendEmail = () => {
    WebBrowser.openBrowserAsync("mailto:" + email);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* {photo ? (
          <Image style={styles.img} source={{ uri: photo }} />
        ) : (
          <View style={styles.img}>{avatarMaker(fullName, 40)}</View>
        )} */}
        <View style={styles.blood}>
          <CustomText weight="bold" style={styles.value}>
            {bloodType || "?"}
          </CustomText>
          <CustomText style={styles.text}>Blood Type</CustomText>
        </View>
      </View>
      <View style={styles.info}>
        <CustomText weight="bold" style={styles.name}>
          {fullName}
        </CustomText>
        <TouchableOpacity onPress={sendEmail} style={styles.emailRow}>
          <Icon name="mail" pack="feather" style={styles.icon} />
          <CustomText style={styles.email}>{email}</CustomText>
        </TouchableOpacity>
        <CustomBtn
          width="100%"
          title={"Edit profile"}
          titleStyle={styles.btnText}
          onPress={() => navigation.navigate("Edit Profile")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignContent: "center",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 20,
  },
  blood: {
    alignItems: "center",
  },
  value: {
    fontSize: 25,
    color: "#FF647C",
  },
  text: {
    textTransform: "uppercase",
  },
  info: {
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 27,
  },
  emailRow: {
    flexDirection: "row",
    marginVertical: GLOBAL_STYLES.BOTTOM,
  },
  icon: {
    height: 20,
    color: "#ff6767",
  },
  email: {
    paddingHorizontal: 10,
    fontSize: 15,
  },
  btnText: {
    textTransform: "none",
    fontSize: 15,
    color: "#fff",
  },
});
