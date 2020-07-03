import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Homepage } from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Homepage} />
    </Navigator>
  );
};
