import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { CustomText } from "./CustomText";
import { Icon } from "@ui-kitten/components";

export const DrawerButton = ({
  title,
  iconName,
  pack,
  onPress,
  titleStyle,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btn, style]}>
        <Icon name={iconName} pack={pack} style={{ height: 22 }} />
        <CustomText weight="semi" style={{ ...styles.title, ...titleStyle }}>
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#323232",
  },
});
