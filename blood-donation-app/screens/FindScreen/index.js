import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Filters } from "./Filters";
import { Suggestions } from "./Suggestions";
import { BLOOD_TYPES, FILTERS } from "../../utils/selectOptions";

export const FindScreen = () => {
  const [filterBy, setFilterBy] = useState({ byType: "", bloodType: "" });
  const filterHandler = (name, val) => {
    setFilterBy((filter) => ({
      ...filter,
      [name]: val,
    }));
  };

  return (
    <View style={styles.container}>
      <Filters
        filters={FILTERS}
        filterType={filterBy.byType}
        changeFilterType={(index) => filterHandler("byType", index)}
      />
      <Suggestions
        placeholder="Search by blood type"
        options={BLOOD_TYPES}
        onChangeOption={(index) => filterHandler("bloodType", index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
