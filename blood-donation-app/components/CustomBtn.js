import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { CustomText } from "./CustomText";
import { COLORS } from "./../styles/colors";

export const CustomBtn = ({
  title,
  onPress,
  width,
  paddingVertical,
  style,
  titleStyle = {},
}) => (
  <TouchableOpacity onPress={onPress} style={{ width, paddingVertical }}>
    <View style={[styles.btn, style]}>
      <CustomText weight="bold" style={{ ...styles.title, ...titleStyle }}>
        {title}
      </CustomText>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    height: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 17,
    color: "#f07274",
    textTransform: "uppercase",
  },
});
