import React from "react";
import { StyleSheet, View } from "react-native";

import { ChatForm } from "./ChatForm";

export const SingleChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatForm />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
