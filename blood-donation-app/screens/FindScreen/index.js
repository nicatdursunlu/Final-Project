import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Filters } from "./Filters";
import { Suggesitions } from "./Suggestions";

const DUMMY = ["all", "people", "posts", "blood centers"];
const BLOOD_TYPES = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

export const FindScreen = () => {
  //FILTER OBJECT TO DETIRMENI WHICH BLOOD TYPE AND TYPE OF SEARCH
  const [filterBy, setFilterBy] = useState({
    byType: "",
    bloodType: "",
  });
  //FILTER HANDLERE JUST SET VALUE TO PROPER VALUE
  const filterHandler = (name, val) => {
    setFilterBy((filter) => ({
      ...filter,
      [name]: val,
    }));
  };

  console.log(filterBy);
  return (
    <View style={styles.container}>
      <Filters
        filters={DUMMY}
        filterType={filterBy.byType}
        changeFilterType={(type) => filterHandler("byType", type)}
      />
      <Suggesitions
        onChangeBloodType={(type) => filterHandler("bloodType", type)}
        types={BLOOD_TYPES}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
