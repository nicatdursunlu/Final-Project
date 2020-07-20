import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomText } from "./CustomText";

export const AvatarMaker = (fullName, height) => (
  <View style={styles.body}>
    <CustomText weight="semi" style={{ ...styles.text, fontSize: height }}>
      {fullName ? [fullName[0], fullName[fullName.indexOf(" ") + 1]] : "??"}
    </CustomText>
  </View>
);

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    backgroundColor: "#dbdbdb", //dark
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textTransform: "capitalize",
    color: "#ff6767", //dark
  },
});
