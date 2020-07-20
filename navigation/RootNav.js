import React from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { selectAuthStatus } from "../store/auth";
import { getTheme } from "../store/settings";
import { LightTheme, DarkTheme } from "../theme";

const mapStateToProps = (state) => ({
  auth: selectAuthStatus(state),
  theme: getTheme(state),
});

export const RootNav = connect(mapStateToProps)(({ auth, theme }) => (
  <NavigationContainer theme={theme === "light" ? LightTheme : DarkTheme}>
    {auth ? <AppStack /> : <AuthStack />}
  </NavigationContainer>
));
