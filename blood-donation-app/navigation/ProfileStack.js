import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileScreen } from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Navigator>
      <Screen name="Profile" component={ProfileScreen} />
    </Navigator>
  );
};
