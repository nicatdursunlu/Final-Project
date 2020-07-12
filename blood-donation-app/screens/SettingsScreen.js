import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { Toggle } from "@ui-kitten/components";

import { Container } from "../commons";
import { LANGUAGES } from "../utils/selectOptions";
import { CustomText, SelectGroup } from "../components";
import {
  setTheme,
  setLanguage,
  getLanguage,
  getTheme,
} from "../store/settings";

const mapStateToProps = (state) => ({
  theme: getTheme(state),
  language: getLanguage(state),
});

export const SettingsScreen = connect(mapStateToProps, {
  setTheme,
  setLanguage,
})(({ theme, language, setTheme, setLanguage }) => {
  const themeHandler = (val) => {
    if (val) setTheme("dark");
    else setTheme("light");
  };

  const languageHandler = (val) => setLanguage(val);
  return (
    <Container>
      <View style={styles.options}>
        <CustomText style={styles.optionsText}>Theme</CustomText>
        <Toggle
          style={styles.toggle}
          checked={theme === "dark" ? true : false}
          onChange={themeHandler}
        />
      </View>
      <View style={styles.options}>
        <CustomText style={styles.optionsText}>Language</CustomText>
        <SelectGroup
          options={LANGUAGES}
          initial={language}
          onChangeOption={(val) => languageHandler(val)}
        />
      </View>
    </Container>
  );
});

const styles = StyleSheet.create({
  options: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
    height: 50,
    width: "100%",
  },
  optionsText: {
    fontSize: 16,
    padding: 14,
  },
  toggle: {
    right: 10,
  },
});
