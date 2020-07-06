import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import { ProfileScreen } from "./../screens";
import { selectAuthUsername } from "../store/auth";
import { globalHeaderStyles } from "../styles/globalHeaderStyles";
import { HeaderIcon } from "../components";
import { ICONS } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = () => {
  const username = useSelector(selectAuthUsername);

  return (
    <Navigator screenOptions={globalHeaderStyles}>
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: username,
          headerRight: () => (
            <HeaderIcon
              iconName={ICONS.menu}
              side="right"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Navigator>
  );
};
