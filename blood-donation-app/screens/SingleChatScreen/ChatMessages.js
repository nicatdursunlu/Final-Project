import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { ChatMessageBubble } from "./ChatMessageBubble";
import { MESSAGES } from "../../utils/selectOptions";

export const ChatMessages = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      keyExtractor={(item) => item.chatID}
      data={MESSAGES}
      //inverted={true}
      renderItem={({ item }) => <ChatMessageBubble message={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
});
