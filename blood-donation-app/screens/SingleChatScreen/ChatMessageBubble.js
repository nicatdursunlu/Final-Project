import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomText } from "../../components";

export const ChatMessageBubble = ({ message }) => {
  const { text, author, time } = message;

  const isMyMsg = author === "Dean Hutson";

  const bubbleStyles = [styles.bubble];
  if (isMyMsg) bubbleStyles.push(styles.myBubble);

  return (
    <View style={styles.container}>
      <View style={bubbleStyles}>
        <CustomText style={styles.text}>{text}</CustomText>
        <CustomText style={styles.time}>{time}</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  bubble: {
    maxWidth: "75%",
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 15,

    borderRadius: 10,
    backgroundColor: "#DADADA",
    alignSelf: "flex-start",
  },
  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#E1FFC8",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 13,
  },
  time: {
    fontSize: 10,
    color: "rgba(0,0,0,0.5)",
    marginTop: 1,
    alignSelf: "flex-end",
  },
});
