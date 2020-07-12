import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "@ui-kitten/components";

import { CustomText } from "./CustomText";
import { COLORS } from "./../styles/colors";

export const SelectGroup = ({ onChangeOption, options, initial }) => {
  const [groups, setGroups] = useState({
    state: false,
    selected: initial || options[0],
  });
  const showHandler = () => {
    setGroups((group) => ({
      ...group,
      state: true,
    }));
  };
  const setGroupItemHandler = (option, index) => {
    setGroups((group) => ({
      ...group,
      state: false,
      selected: option,
    }));

    onChangeOption(options[index]);
  };
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity onPress={showHandler}>
        <View style={styles.container}>
          <CustomText weight="semi">{groups.selected}</CustomText>
          <Icon
            name={groups.state ? "chevron-up" : "chevron-down"}
            pack="feather"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      {groups.state && (
        <View style={styles.group}>
          <ScrollView>
            {options.map((option, index) => (
              <TouchableOpacity
                key={option}
                onPress={() => setGroupItemHandler(option, index)}
              >
                <CustomText weight="regular" style={styles.groupItem}>
                  {option}
                </CustomText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(247, 249, 252)",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgb(228, 233, 242)",
  },
  icon: {
    height: 15,
  },
  group: {
    position: "absolute",
    top: 40,
    height: 160,
    width: "100%",
    backgroundColor: COLORS.MAIN,
    paddingHorizontal: 20,
    paddingVertical: 10,
    zIndex: 200,
    elevation: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgb(228, 233, 242)",
  },
  groupItem: {
    fontSize: 17,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderColor: COLORS.BORDER,
  },
});
