import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Input } from "@ui-kitten/components";

import { ICONS } from "../../styles";

export const ChatForm = ({ onPress, value, textChange }) => {
  const [state, setState] = useState(false);

  const textChangehandler = (val) => {
    if (val.trim() !== "") setState(true);
    else setState(false);
    textChange(val);
  };
  useEffect(() => textChangehandler(value), [value]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[
        styles.container,
        { justifyContent: state ? "space-between" : "center" },
      ]}
    >
      <Input
        style={styles.field}
        value={value}
        onChangeText={(val) => textChangehandler(val)}
        placeholder="Type here to start send"
      />
      {state && (
        <TouchableOpacity onPress={onPress}>
          <Image source={ICONS.send} style={styles.sendIcon} />
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    borderTopWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
  },
  field: {
    width: "90%",
    borderRadius: 20,
    marginVertical: 5,
    borderColor: "#dadada",
    backgroundColor: "#fff",
  },
  sendIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
