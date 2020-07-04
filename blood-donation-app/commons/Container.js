import React from "react";
import { StyleSheet, View } from "react-native";
import { GLOBAL_STYLES } from "../styles/globalStyles";

export const Container = ({ children, style }) => (
  <View style={styles.container}>
    <View style={[styles.content, style]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    ///justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
  },
});
