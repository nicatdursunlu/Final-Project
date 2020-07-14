import { Dimensions } from "react-native";
import { GLOBAL_STYLES } from "./../styles/globalStyles";

export function getWidthByPercents(percents = 100, spacesCount = 0) {
  return (
    ((Dimensions.get("window").width - GLOBAL_STYLES.HORIZONTAL * spacesCount) /
      100) *
    percents
  );
}
