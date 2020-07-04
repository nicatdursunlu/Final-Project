import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Toggle,
} from "@ui-kitten/components";

import { CustomText } from "../components";
import { GLOBAL_STYLES } from "../styles/globalStyles";

export const SettingsScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [notChecked, setNotChecked] = useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const onChange = (isChecked) => {
    setNotChecked(isChecked);
  };

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.options}>
          <CustomText style={styles.optionsText}>Theme</CustomText>
          <Toggle
            style={styles.toggle}
            checked={checked}
            onChange={onCheckedChange}
          ></Toggle>
        </View>
        <View style={styles.options}>
          <CustomText style={styles.optionsText}>Language</CustomText>
          <Layout style={styles.languageOptions} level="1">
            <Select
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              <SelectItem title="English" />
              <SelectItem title="Russian" />
              <SelectItem title="Azerbaijan" />
            </Select>
          </Layout>
        </View>
        <View style={styles.options}>
          <CustomText style={styles.optionsText}>Notifications</CustomText>
          <Toggle
            style={styles.toggle}
            checked={notChecked}
            onChange={onChange}
          ></Toggle>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Account Settings", {})}
        >
          <View style={styles.options}>
            <CustomText style={styles.optionsText}>Account Settings</CustomText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
    marginTop: GLOBAL_STYLES.TOP,
  },
  options: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
    height: 50,
    borderColor: "rgba(0, 0, 0, 0.2)",
    // borderWidth:1,
    borderBottomWidth: 1,
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 2,
    //     elevation: 2,
  },
  optionsText: {
    fontSize: 16,
    padding: 14,
  },
  toggle: {
    right: 10,
  },
  languageOptions: {
    minWidth: 128,
  },
});
