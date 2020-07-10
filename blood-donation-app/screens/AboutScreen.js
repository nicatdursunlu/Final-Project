import React from "react";
import { StyleSheet, View } from "react-native";
import { GLOBAL_STYLES } from "../styles";
import { CustomText } from "../components";

export const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <CustomText style={styles.text}>
          We are non-profit organization that puts the power to save lives in
          the palms of your hand. Makes donating blood as much easy for you. You
          can easily posted urgent blood need here and find it quickly or you
          can become a someone's hero.
        </CustomText>
        <CustomText weight="bold" style={styles.belowText}>
          {"\u00A9"} 2020 e-Donor
        </CustomText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
    paddingTop: 80,
    paddingHorizontal: 50,
    justifyContent: "center",
  },
  body: {
    flex: 1,
    marginTop: GLOBAL_STYLES.TOP,
  },
  text: {
    fontSize: 18,
    //   fontFamily:"regular",
  },
  belowText: {
    bottom: 10,
    position: "absolute",
    fontSize: 14,
    color: "grey",
  },
});
