import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Switch } from "react-native";
import { Toggle, Divider } from "@ui-kitten/components";

import { Container } from "../commons";
import { LANGUAGES } from "../utils/dummy";
import { CustomText, SelectGroup } from "../components";
import { getWidthByPercents } from "./../utils/getWidthByPercents";
import {
  getTheme,
  setTheme,
  getLanguage,
  setLanguage,
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

  return (
    <Container>
      <Divider style={{ width: "100%" }} />
      <View style={styles.options}>
        <CustomText style={styles.optionsText}>Theme</CustomText>
        <View style={styles.row}>
          <CustomText>{theme === "light" ? "Light" : "Dark"}</CustomText>
          <Toggle
            checked={theme === "dark" ? true : false}
            onChange={themeHandler}
            style={{ marginLeft: 10 }}
          />
        </View>
      </View>
      <Divider style={{ width: "100%" }} />
      <View style={styles.options}>
        <CustomText style={styles.optionsText}>Language</CustomText>
        <SelectGroup
          options={LANGUAGES}
          initial={language}
          onChangeOption={setLanguage}
          style={{ width: getWidthByPercents(50, 2) }}
        />
      </View>
      <Divider style={{ width: "100%" }} />
    </Container>
  );
});

const styles = StyleSheet.create({
  options: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    height: 50,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionsText: {
    fontSize: 16,
    padding: 14,
  },
});