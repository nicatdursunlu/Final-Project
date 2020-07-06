import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomText, SelectGroup } from "../../components";
import { GLOBAL_STYLES } from "../../styles";
import { SectionGroup } from "./SectionGroup";
import { TITLES } from "./../../utils/selectOptions";

export const Suggestions = ({
  label,
  options,
  placeholder,
  onChangeOption,
}) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Suggestions</CustomText>
      <SelectGroup
        label={label}
        placeholder={placeholder}
        options={options}
        onChangeOption={onChangeOption}
      />
      {TITLES.map((item) => (
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
