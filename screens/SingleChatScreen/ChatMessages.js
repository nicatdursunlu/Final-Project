import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { ChatMessageBubble } from "./ChatMessageBubble";

export const ChatMessages = ({ messages, userID }) => (
  <FlatList
    contentContainerStyle={styles.list}
    data={messages}
    inverted={true}
    renderItem={({ item }) => (
      <ChatMessageBubble message={item} userID={userID} />
    )}
    keyExtractor={(item) => item.time.toString()}
  />
);

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
  },
});
