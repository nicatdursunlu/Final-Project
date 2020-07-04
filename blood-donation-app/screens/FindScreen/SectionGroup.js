import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { ICONS } from "../../styles";
import { CustomText } from "../../components";

export const SectionGroup = ({ item }) => {
  return (
    <TouchableOpacity key={item.title} style={styles.context}>
      <CustomText weight="semi" style={styles.type}>
        {item.title}
      </CustomText>
      <View style={styles.select}>
        <CustomText style={styles.selected}>{item.selected}</CustomText>
        <Image style={styles.icon} resizeMode="contain" source={ICONS.goto} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  context: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 20,
  },
  type: {
    fontSize: 16,
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
  icon: {
    marginTop: 3,
    width: 15,
    height: 15,
  },
});
