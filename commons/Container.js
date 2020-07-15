import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Container = ({ children }) => (
  <KeyboardAwareScrollView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.body}
    contentContainerStyle={styles.container}
  >
    {children}
  </KeyboardAwareScrollView>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
