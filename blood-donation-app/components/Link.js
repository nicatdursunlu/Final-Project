import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { CustomText } from "./CustomText";
import { COLORS } from "./../styles/colors";

export const Link = ({ title, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <CustomText weight="semi" style={{ ...styles.title, ...style }}>
      {title}
    </CustomText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  title: {
    color: COLORS.PRIMARY,
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
