import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileScreen } from "./../screens";
import { selectAuthUsername } from "../store/auth";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = () => {
  const username = useSelector(selectAuthUsername);
  return (
    <Navigator screenOptions={HeaderStyles}>
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          title: username,
        })}
      />
    </Navigator>
  );
};
