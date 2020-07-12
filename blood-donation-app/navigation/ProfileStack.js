import React from "react";
import { useSelector } from "react-redux";
import { TopNavigationAction } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileScreen, EditProfileScreen } from "./../screens";
import { selectAuthUsername } from "../store/auth";
import { leftIcon, editIcon } from "./../styles/icons";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = () => {
  const username = useSelector(selectAuthUsername);
  return (
    <Navigator screenOptions={HeaderStyles}>
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: username,
          headerRight: () => (
            <TopNavigationAction
              icon={editIcon}
              onPress={() => navigation.navigate("EditProfile")}
            />
          ),
        })}
      />

      <Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={({ navigation }) => ({
          title: "Edit Profile",
          headerLeft: () => (
            <TopNavigationAction
              icon={leftIcon}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Navigator>
  );
};
