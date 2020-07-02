import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen, AccountSettingsScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator>
      <Screen name="Settings" component={SettingsScreen} />
      <Screen name="Account Settings" component={AccountSettingsScreen} />
    </Navigator>
  );
};
