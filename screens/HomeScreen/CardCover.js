import React from "react";
import { Divider } from "@ui-kitten/components";

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
    <>
      <CardHeader
        {...{ author_id, userID, user_photo, author_name, time, navigation }}
      />
      <CardContent
        {...{ bloodType, location, desc, coordinates, navigation }}
      />
      <CardBottom {...{ saved, userID, id }} />
      <Divider style={{ marginVertical: 30, backgroundColor: "lightgray" }} />
    </>
  );
};
