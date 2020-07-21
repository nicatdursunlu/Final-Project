import React from "react";
import i18n from "i18n-js";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { CustomText } from "./CustomText";

export const CustomBtn = ({
  title,
  onPress,
  width,
  style,
  titleStyle = {},
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={{ width }}>
      <View style={[styles.btn, { borderColor: colors.inputBorder }, style]}>
        <CustomText weight="bold" style={{ ...styles.title, ...titleStyle }}>
          {/* {i18n.t(title)} */}
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 40,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6767",
    borderWidth: StyleSheet.hairlineWidth,
  },
  title: {
    color: "#fff",
    fontSize: 17,
    textTransform: "uppercase",
  },
});
