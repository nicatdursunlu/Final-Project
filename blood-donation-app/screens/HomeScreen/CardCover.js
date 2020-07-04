import React from "react";
import { StyleSheet, View } from "react-native";

import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { CardBottom } from "./CardBottom";

export const CardCover = ({ item }) => {
  const {
    userAvatar,
    name,
    time,
    bloodType,
    location,
    desc,
    requestType,
  } = item;

  return (
    <View style={styles.card}>
      <CardHeader {...{ userAvatar, name, time, requestType }} />
      <View style={styles.cardContext}>
        <CardContent {...{ bloodType, location, desc }} />
        <CardBottom />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  cardContext: {
    backgroundColor: "#F5F7FB",
    borderRadius: 20,
    padding: 10,
  },
});
