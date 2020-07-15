import React from "react";
import { StyleSheet, FlatList, Text } from "react-native";

import { ChatMessageBubble } from "./ChatMessageBubble";

export const ChatMessages = ({ messages, userID }) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={messages}
      inverted={true}
      renderItem={({ item }) => (
        <ChatMessageBubble message={item} userID={userID} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
  },
});
