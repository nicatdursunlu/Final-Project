import React from "react";
import { Image } from "react-native";

import { IMAGES } from "./images";
import { COLORS } from "./colors";

export const HeaderStyles = {
  headerMode: "screen",
  headerTitleAlign: "center",
  headerTransparent: true,
  headerTitleStyle: {
    fontSize: 20,
    color: COLORS.TITLE,
  },
  headerStyle: { height: 80 },
  headerBackground: () => (
    <Image source={IMAGES.header} style={{ width: "100%", height: "100%" }} />
  ),
};
