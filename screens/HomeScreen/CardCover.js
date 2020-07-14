import React from "react";
import { View } from "react-native";

import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import { CardBottom } from "./CardBottom";
import { Divider } from "@ui-kitten/components";

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
    <>
      <View style={{ paddingHorizontal: 15 }}>
        <CardHeader {...{ author_id, userID, user_photo, author_name, time }} />
        <CardContent
          {...{ bloodType, location, desc, coordinates, navigation }}
        />
        <CardBottom {...{ saved, userID, id }} />
      </View>
      <Divider style={{ marginVertical: 30, backgroundColor: "lightgray" }} />
    </>
  );
};
