import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

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
    backgroundColor: "#fff",
    paddingTop: 80,
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
