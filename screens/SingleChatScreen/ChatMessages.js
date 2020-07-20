import React from "react";
import { FlatList } from "react-native";

import { ChatMessageBubble } from "./ChatMessageBubble";

export const ChatMessages = ({ messages, userID }) => {
  const renderItem = ({ item }) => (
    <ChatMessageBubble message={item} userID={userID} />
  );
  return (
    <FlatList
      data={messages}
      inverted={true}
      renderItem={renderItem}
      keyExtractor={(item) => item.time.toString()}
    />
  );
};
