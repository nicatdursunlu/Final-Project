import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { FindScreen } from "./../screens";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const FindStack = () => (
  <Navigator screenOptions={HeaderStyles}>
    <Screen name="Find" component={FindScreen} />
  </Navigator>
);
