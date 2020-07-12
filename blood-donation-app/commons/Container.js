import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS } from "./../styles/colors";

export const Container = ({ children }) => (
  <SafeAreaView style={styles.body}>
    <KeyboardAwareScrollView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      contentContainerStyle={styles.container}
    >
      <View style={styles.content}>{children}</View>
    </KeyboardAwareScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.MAIN,
    paddingTop: 60,
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 15,
    flex: 1,
  },
});
