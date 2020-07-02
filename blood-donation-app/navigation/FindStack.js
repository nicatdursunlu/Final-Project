import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { FindScreen } from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const FindStack = () => {
  return (
    <Navigator>
      <Screen name="Find" component={FindScreen} />
    </Navigator>
  );
};
