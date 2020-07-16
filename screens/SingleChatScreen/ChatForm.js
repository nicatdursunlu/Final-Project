import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Input } from "@ui-kitten/components";

import { Field } from "../../components";
import { ICONS } from "../../styles";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";

const width = getWidthByPercents(90, 6);

export const ChatForm = ({ onPress, value, textChange }) => {
  const [state, setState] = useState(false);

  const textChangehandler = (val) => {
    if (val.trim() !== "") {
      setState(true);
    } else {
      setState(false);
    }
    textChange(val);
  };
  useEffect(() => {
    textChangehandler(value);
  }, [value]);

  return (
    <View
      style={[
        styles.container,
        { justifyContent: state ? "space-between" : "center" },
      ]}
    >
      <Input
        style={{ ...styles.field, ...{ width: state ? "80%" : "60%" } }}
        value={value}
        onChangeText={(val) => textChangehandler(val)}
        placeholder="Type here to start send"
      />
      {state && (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Image source={ICONS.send} style={styles.sendIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    marginBottom: 10,
    borderTopWidth: 1,
    paddingVertical: 10,
    borderColor: "#eee",
    backgroundColor: "white",
  },
  field: {
    borderRadius: 10,
    height: 36,
    borderColor: "#DADADA",
    width: width,
  },
  sendIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
