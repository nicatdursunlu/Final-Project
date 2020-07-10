import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { CustomText, SelectGroup } from "../../components";
import { SectionGroup } from "./SectionGroup";
import { TITLES, BLOOD_TYPES } from "./../../utils/selectOptions";
import { Container } from "../../commons";

export const FindScreen = () => {
  const [bloodType, setBloodType] = useState(BLOOD_TYPES[0]);
  return (
    <Container>
      <CustomText style={styles.title}>Find People by blood type</CustomText>
      <SelectGroup
        options={BLOOD_TYPES}
        onChangeOption={(val) => setBloodType(val)}
      />
      {TITLES.map((item) => (
        <SectionGroup key={item.title} item={item} />
      ))}
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    color: "#6979F8",
    fontSize: 17,
    marginBottom: 10,
  },
});
