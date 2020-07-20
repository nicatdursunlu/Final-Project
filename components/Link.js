import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { CustomText } from "./CustomText";

export const Link = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <CustomText weight="semi" style={{ ...styles.title, ...style }}>
      {title}
    </CustomText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  title: {
    color: "#0070c9",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
