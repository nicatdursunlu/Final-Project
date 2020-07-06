import React from "react";
import { StyleSheet, View } from "react-native";

import { ChatMessages } from "./ChatMessages";
import { ChatForm } from "./ChatForm";
import { Button } from "@ui-kitten/components";

export const SingleChatScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => console.log("checked", route)}>check</Button>
      <ChatMessages />
      <ChatForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
