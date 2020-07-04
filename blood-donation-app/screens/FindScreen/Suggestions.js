import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomText, SelectGroup } from "../../components";
import { GLOBAL_STYLES } from "../../styles";
import { SectionGroup } from "./SectionGroup";

const DUMMY = [{ title: "Serach on map" }, { title: "To who can i donate" }];

export const Suggesitions = ({ onChangeBloodType, types }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Suggesitions</CustomText>

      <SelectGroup types={types} onChangeBloodType={onChangeBloodType} />

      {DUMMY.map((item) => (
        <SectionGroup key={item.title} item={item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
  },
  title: {
    color: "#6979F8",
    fontSize: 15,
    marginBottom: 10,
  },
});
