import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigationAction } from "@ui-kitten/components";

import {
  RateScreen,
  AboutScreen,
  ContactScreen,
  SettingsScreen,
} from "./../screens";

import { HeaderStyles } from "../styles";
import { leftIcon } from "./../styles/icons";

const { Screen, Navigator } = createStackNavigator();

export const ContentStack = ({ navigation }) => {
  return (
    <Navigator
      screenOptions={() => ({
        ...HeaderStyles,
        headerLeft: () => (
          <TopNavigationAction
            icon={leftIcon}
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <Screen name="Rate" component={RateScreen} />
      <Screen name="About" component={AboutScreen} />
      <Screen name="Contact" component={ContactScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};
