import React from "react";
import { connect } from "react-redux";
import { Toggle } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

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
  const { colors } = useTheme();
  const border = { borderBottomColor: colors.inputText };
  return (
    <Container>
      <View style={[styles.options, border]}>
        <CustomText style={styles.optionsText}>Theme</CustomText>
        <View style={styles.row}>
          <CustomText>{theme === "light" ? "Light" : "Dark"}</CustomText>
          <Toggle
            onChange={themeHandler}
            style={{ marginLeft: 20 }}
            checked={theme === "dark" ? true : false}
          />
        </View>
      </View>
      <View style={[styles.options, border]}>
        <CustomText style={styles.optionsText}>Language</CustomText>
        <SelectGroup
          initial={language}
          options={LANGUAGES}
          onChangeOption={setLanguage}
          style={{ width: getWidthByPercents(40, 2) }}
        />
      </View>
    </Container>
  );
});

const styles = StyleSheet.create({
  options: {
    height: 50,
    width: "100%",
    marginVertical: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  optionsText: {
    padding: 14,
    fontSize: 16,
  },
});
