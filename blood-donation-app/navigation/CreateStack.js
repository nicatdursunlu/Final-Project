import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateScreen } from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => {
  return (
    <Navigator>
      <Screen name="Create" component={CreateScreen} />
    </Navigator>
  );
};
