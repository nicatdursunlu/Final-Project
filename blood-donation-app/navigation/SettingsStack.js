import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HeaderIcon } from "./../components";
import { SettingsScreen, AccountSettingsScreen } from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Navigator>
      <Screen
        name="AppSettings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderIcon side="left" onPress={() => navigation.goBack()} />
          ),
        })}
      />
      <Screen
        name="Account Settings"
        component={AccountSettingsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderIcon side="left" onPress={() => navigation.goBack()} />
          ),
        })}
      />
    </Navigator>
  );
};
