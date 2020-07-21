import React from "react";
import { connect } from "react-redux";
import { useTheme } from "@react-navigation/native";
import { Toggle, Icon } from "@ui-kitten/components";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Container } from "./../../commons";
import { LANGUAGES } from "./../../utils/dummy";
import { CustomText, SelectGroup } from "./../../components";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";
import {
  getTheme,
  setTheme,
  getLanguage,
  setLanguage,
} from "./../../store/settings";

const mapStateToProps = (state) => ({
  theme: getTheme(state),
  language: getLanguage(state),
});

export const SettingsScreen = connect(mapStateToProps, {
  setTheme,
  setLanguage,
})(({ theme, language, setTheme, setLanguage, navigation }) => {
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
      {/* <View style={[styles.options, border]}>
        <CustomText style={styles.optionsText}>Language</CustomText>
        <SelectGroup
          initial={language}
          options={LANGUAGES}
          onChangeOption={setLanguage}
          style={{ width: getWidthByPercents(40, 2) }}
        />
      </View> */}
      <TouchableOpacity
        style={[styles.options, border]}
        onPress={() => navigation.navigate("Edit Email")}
      >
        <CustomText style={styles.optionsText}>Change email</CustomText>
        <Icon
          name="chevron-right"
          pack="feather"
          style={{ height: 20, color: colors.text }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.options, border]}
        onPress={() => navigation.navigate("Change Password")}
      >
        <CustomText style={styles.optionsText}>Change password</CustomText>
        <Icon
          name="chevron-right"
          pack="feather"
          style={{ height: 20, color: colors.text }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.options, border]}
        onPress={() => navigation.navigate("Delete Acoount")}
      >
        <CustomText style={styles.optionsText}>Delete account</CustomText>
        <Icon
          name="chevron-right"
          pack="feather"
          style={{ height: 20, color: colors.text }}
        />
      </TouchableOpacity>
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
  icon: {
    height: 20,
    color: "#fff",
  },
});
