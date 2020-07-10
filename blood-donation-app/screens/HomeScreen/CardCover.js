import React from "react";
import { StyleSheet, View } from "react-native";

import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { CardBottom } from "./CardBottom";

export const CardCover = ({ item, navigation, userID }) => {
  const {
    author_id,
    author_name,
    user_photo,
    time,
    bloodType,
    location,
    desc,
    coordinates,
    saved,
    id,
  } = item;

  return (
    <View style={styles.card}>
      <CardHeader {...{ author_id, userID, user_photo, author_name, time }} />
      <View style={styles.cardContext}>
        <CardContent
          {...{ bloodType, location, desc, coordinates, navigation }}
        />
        <CardBottom {...{ saved, userID, id }} />
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
