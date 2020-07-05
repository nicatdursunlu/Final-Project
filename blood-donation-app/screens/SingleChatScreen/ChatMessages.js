import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { ChatMessageBubble } from "./ChatMessageBubble";

const DUMMY = [
  {
    chatID: "1",
    text:
      "No problem Dustin, I send you the documents when I arrived at my office! ",
    author: "Sophie Lenor",
    time: "20:00",
  },
  {
    chatID: "2",
    text:
      "I have received your documents. Maybe we can try another color for the homepage, I’m already working on a proposal",
    author: "Dean Hutson",
    time: "20:01",
  },
  {
    chatID: "3",
    text: "Nice! Sorry for the spelling mistakes, the text was pretty old",
    author: "Sophie Lenor",
    time: "20:03",
  },
  {
    chatID: "4",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Dean Hutson",
    time: "20:05",
  },
];

export const ChatMessages = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      keyExtractor={(item) => item.chatID}
      data={DUMMY}
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
