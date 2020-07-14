import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, Divider } from "@ui-kitten/components";

import { CustomText } from "../../components";
import { COLORS } from "./../../styles/colors";

export const DrawerItem = ({ title, onPress, name }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.btn}>
      <Icon name={name} pack="feather" style={styles.icon} />
      <CustomText weight="semi" style={styles.title}>
        {title}
      </CustomText>
    </View>
    <Divider />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 22,
    color: COLORS.ICON,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 18,
    color: COLORS.DRAWER_TEXT,
  },
});
