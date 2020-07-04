import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";

export const SelectGroup = ({ onChangeBloodType, types }) => {
  //useState to detirmine index array whic index
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  //handled selected value to drop to outside component
  const selectHandler = (index) => {
    setSelectedIndex(index);
    onChangeBloodType(types[selectedIndex]);
  };

  return (
    <Layout style={styles.container} level="1">
      <Select
        label="blood type"
        value={types[selectedIndex - 1]}
        selectedIndex={selectedIndex}
        onSelect={selectHandler}
      >
        {types.map((type) => (
          <SelectItem key={type} title={type} />
        ))}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
});
