import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateScreen } from "./../screens";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => (
  <Navigator screenOptions={HeaderStyles}>
    <Screen name="New Post" component={CreateScreen} />
  </Navigator>
);
