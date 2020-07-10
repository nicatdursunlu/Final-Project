import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen } from "./../screens";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator headerMode="screen" screenOptions={HeaderStyles} mode="modal">
      <Screen name="AppSettings" component={SettingsScreen} />
    </Navigator>
  );
};
