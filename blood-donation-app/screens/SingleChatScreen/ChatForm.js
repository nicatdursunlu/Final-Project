import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { Field } from "../../components";
import { ICONS } from "../../styles";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";

const width = getWidthByPercents(90, 2);

export const ChatForm = () => {
  const [message, setMessage] = useState("");

  const submit = () => {
    // if (message.trim() !== "") {
    //   sendMessage(chatID, message);
    //   setMessage("");
    // }
    console.log("message sent : ", message);
  };

  return (
    <View style={styles.container}>
      <Field style={styles.field} value={message} onChangeText={setMessage} />
      <TouchableOpacity style={styles.btn} onPress={submit}>
        <Image source={ICONS.send} style={styles.sendIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  field: {
    borderRadius: 40,
    height: 36,
    borderColor: "#DADADA",
    width: width,
  },
  // sendIcon: {
  // top: 11,
  // },
});
