import React, { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";

import { CustomText } from "../../components";
import { getMessageTime } from "../../utils/getMessageTime";

export const ChatMessageBubble = ({ message, userID }) => {
  const { text, author_id, time } = message;
  const [show, setShow] = useState(false);

  const isMyMsg = userID === author_id;

  const bubbleStyles = [styles.bubble];
  if (isMyMsg) bubbleStyles.push(styles.myBubble);
  if (!isMyMsg) bubbleStyles.push(styles.companionBubble);

  const showTime = () => {
    setShow((v) => !v);
  };

  return (
    <View style={[styles.container, { opacity: show ? 0.6 : 1 }]}>
      {show && (
        <CustomText weight="semi" style={styles.time}>
          {getMessageTime(time)}
        </CustomText>
      )}
      <TouchableWithoutFeedback onLongPress={showTime} onPressOut={showTime}>
        <View style={bubbleStyles}>
          <CustomText
            weight="semi"
            style={{
              ...styles.text,
              ...{ color: isMyMsg ? "white" : "rgba(0,0,0,0.5)" },
            }}
          >
            {text}
          </CustomText>
        </View>
      </TouchableWithoutFeedback>
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
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
    backgroundColor: "#DADADA",
    alignSelf: "flex-start",
  },
  companionBubble: {
    borderBottomEndRadius: 18,
    backgroundColor: "#eee",
  },
  myBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#859bde",
    alignItems: "flex-end",
    borderBottomStartRadius: 18,
    color: "white",
  },
  text: {
    fontSize: 15,
  },
  time: {
    fontSize: 10,
    color: "rgba(0,0,0,0.5)",
    margin: 5,
    textAlign: "center",
  },
});
