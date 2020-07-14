import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { ICONS } from "../../styles";
import { Field } from "../../components";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";

export const ChatForm = () => {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.container}>
      <Field style={styles.field} value={message} onChangeText={setMessage} />
      <TouchableOpacity style={styles.btn} onPress={console.log(message)}>
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
    marginBottom: 20,
  },
  field: {
    borderRadius: 20,
    height: 36,
    borderColor: "#DADADA",
    width: getWidthByPercents(90, 2),
  },
});
