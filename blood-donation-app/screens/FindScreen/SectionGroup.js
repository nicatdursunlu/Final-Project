import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { CustomText } from "../../components";
import { Icon } from "@ui-kitten/components";

export const SectionGroup = ({ item }) => {
  return (
    <TouchableOpacity key={item.title} style={styles.options}>
      <CustomText weight="semi" style={{ fontSize: 16 }}>
        {item.title}
      </CustomText>
      <View style={styles.select}>
        <CustomText style={styles.selected}>{item.selected}</CustomText>
        <Icon name="chevron-right" pack="feather" style={{ height: 15 }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  options: {
    width: "100%",
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgb(228, 233, 242)",
    zIndex: -1,
  },

  select: {
    flexDirection: "row",
    alignItems: "center",
  },
  selected: {
    opacity: 0.5,
    fontSize: 16,
    marginRight: 7,
  },
});
