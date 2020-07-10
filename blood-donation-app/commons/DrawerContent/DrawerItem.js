import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Icon } from "@ui-kitten/components";
import { CustomText } from "../../components";

export const DrawerItem = ({
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
        <Icon name={iconName} pack={pack} style={styles.icon} />
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
  icon: {
    height: 22,
    color: "#585858",
    marginHorizontal: 30,
  },
  title: {
    fontSize: 18,
    color: "#585858",
  },
});
