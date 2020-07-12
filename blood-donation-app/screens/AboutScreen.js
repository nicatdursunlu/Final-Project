import React from "react";
import { StyleSheet } from "react-native";

import { CustomText } from "../components";
import { Container } from "./../commons/Container";

export const AboutScreen = () => (
  <Container>
    <CustomText style={styles.text}>
      We are non-profit organization that puts the power to save lives in the
      palms of your hand, makes donating blood as much easy for you. You can
      easily post urgent blood need here and find it quickly or you can become
      someone's hero.
    </CustomText>
    <CustomText weight="bold" style={styles.belowText}>
      {"\u00A9"} 2020 e-Donor
    </CustomText>
  </Container>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    padding: 20,
  },
  belowText: {
    bottom: 10,
    left: 35,
    position: "absolute",
    fontSize: 14,
    color: "grey",
  },
});
