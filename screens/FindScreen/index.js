import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Container } from "../../commons";
import { BLOOD_TYPES } from "../../utils/dummy";
import { CustomText, SelectGroup } from "../../components";

export const FindScreen = () => {
  const [bloodType, setBloodType] = useState();
  return (
    <Container>
      <CustomText style={styles.title}>Find People by blood type</CustomText>
      <SelectGroup
        options={BLOOD_TYPES}
        initial="Select blood type"
        onChangeOption={(val) => setBloodType(val)}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    color: "#0070c9", //light
    color: "#007aff", //dark
    fontSize: 17,
    marginBottom: 10,
  },
});
