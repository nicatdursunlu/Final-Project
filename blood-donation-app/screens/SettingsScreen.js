import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Toggle } from "@ui-kitten/components";

import { CustomText } from "../components";
import { GLOBAL_STYLES } from "../styles/globalStyles";
import { SelectGroup } from "./../components/SelectGroup";
import { LANGUAGES } from "../utils/selectOptions";

export const SettingsScreen = ({ navigation }) => {
  const [theme, setTheme] = useState(false);
  const [notf, setNotf] = useState(false);
  const [lang, setLang] = useState(LANGUAGES[0]);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.options}>
          <CustomText style={styles.optionsText}>Theme</CustomText>
          <Toggle
            style={styles.toggle}
            checked={theme}
            onChange={() => setTheme((theme) => !theme)}
          ></Toggle>
        </View>
        <View style={styles.options}>
          <CustomText style={styles.optionsText}>Notifications</CustomText>
          <Toggle
            style={styles.toggle}
            checked={notf}
            onChange={() => setNotf((notf) => !notf)}
          ></Toggle>
        </View>
        <View style={styles.options}>
          <CustomText style={styles.optionsText}>Language</CustomText>
          <SelectGroup
            value={lang}
            style={styles.languageOptions}
            options={LANGUAGES}
            onChangeOption={(val) => setLang(val)}
          />
        </View>
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
    borderBottomWidth: 1,
  },
  optionsText: {
    fontSize: 16,
    padding: 14,
  },
  toggle: {
    right: 10,
  },
  languageOptions: {
    // minWidth: 128,
    width: "20%",
  },
});
