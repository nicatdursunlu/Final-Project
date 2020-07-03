import * as Font from "expo-font";

import QuicksandBold from "../assets/fonts/Quicksand-Bold.ttf";
import QuicksandMedium from "../assets/fonts/Quicksand-Medium.ttf";
import QuicksandRegular from "../assets/fonts/Quicksand-Regular.ttf";
import QuicksandSemiBold from "../assets/fonts/Quicksand-SemiBold.ttf";

export const loadFonts = () => {
  return Font.loadAsync({
    QuicksandBold,
    QuicksandMedium,
    QuicksandRegular,
    QuicksandSemiBold,
  });
};

export const FONT_FAMILIES = Object.freeze({
  regular: "QuicksandRegular",
  medium: "QuicksandMedium",
  semi: "QuicksandSemiBold",
  bold: "QuicksandBold",
});
