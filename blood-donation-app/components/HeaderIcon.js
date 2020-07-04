import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { GLOBAL_STYLES } from "../styles";

export const HeaderIcon = ({ iconName, onPress, side }) => (
  <TouchableOpacity
    style={[
      styles.wrapper,
      {
        marginRight: side === "right" ? GLOBAL_STYLES.HORIZONTAL : 0,
        marginLeft: side === "left" ? GLOBAL_STYLES.HORIZONTAL : 0,
      },
    ]}
    onPress={onPress}
  >
    <Image style={styles.icon} source={iconName} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 16,
  },
});
