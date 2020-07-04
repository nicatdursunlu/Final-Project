import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { CustomText } from "../../components";
import { GLOBAL_STYLES } from "../../styles";

export const Filters = ({ filters, filterType, changeFilterType }) => {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const isFiltertype = filter === filterType;
        return (
          <TouchableOpacity
            onPress={() => changeFilterType(filter)}
            key={filter}
          >
            <View
              style={[
                styles.filter,
                {
                  opacity: isFiltertype ? 1 : 0.3,
                },
              ]}
            >
              <CustomText style={styles.title}>{filter}</CustomText>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
    marginVertical: GLOBAL_STYLES.TOP,
    backgroundColor: "#FFFF",
    flexDirection: "row",
  },
  filter: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 12,
    alignItems: "center",
    backgroundColor: "#BFBFBF",
  },
  title: {
    fontSize: 12,
  },
});
