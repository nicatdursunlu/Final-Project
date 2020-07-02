import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeTabs } from "./HomeTabs";
import { AuthStack } from "./AuthStack";
import { SettingsStack } from "./SettingsStack";

const { Navigator, Screen } = createDrawerNavigator();

export const RootNav = () => {
  return (
    <NavigationContainer>
      <Navigator drawerStyle={{ width: "80%" }}>
        <Screen
          name="Auth"
          component={AuthStack}
          // options={{ swipeEnabled: false }}
        />
        <Screen name="HomeTabs" component={HomeTabs} />
        <Screen name="Settings" component={SettingsStack} />
      </Navigator>
    </NavigationContainer>
  );
};
