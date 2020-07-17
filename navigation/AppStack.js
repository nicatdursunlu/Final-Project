import React from "react";
import { useSelector } from "react-redux";
import { TopNavigationAction } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import { HomeTabs } from "./HomeTabs";
import { HeaderStyles } from "../styles";
import { leftIcon } from "../styles/icons";
import { selectUsername } from "../store/auth";
import {
  ProfileScreen,
  SingleChatScreen,
  HomeScreen,
  EditProfileScreen,
  RateScreen,
  AboutScreen,
  ContactScreen,
  SettingsScreen,
} from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  return (
    <Navigator
      headerMode="screen"
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <TopNavigationAction
            icon={leftIcon}
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <Screen
        name="HomeTabs"
        component={HomeTabs}
        options={({ route }) => ({
          ...HeaderStyles,
          headerTitle: getHeaderTitle(route),
          headerLeft: null,
        })}
      />
      <Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ route }) => ({ title: route.params?.author_name })}
      />
      <Screen
        name="SingleChat"
        component={SingleChatScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{ headerLeft: null }}
      />
      <Screen name="Saved">{() => <HomeScreen type="saved" />}</Screen>
      <Screen name="Rate" component={RateScreen} />
      <Screen name="About" component={AboutScreen} />
      <Screen name="Contact" component={ContactScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
};

export function getHeaderTitle(route) {
  const username = useSelector(selectUsername);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "Home":
      return "Home";
    case "Find":
      return "Find";
    case "Create":
      return "New Post";
    case "Chats":
      return "Chats";
    case "Profile":
      return username;
  }
}
