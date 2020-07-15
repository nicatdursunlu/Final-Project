import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigationAction } from "@ui-kitten/components";

import { HomeTabs } from "./HomeTabs";
import { leftIcon } from "../styles/icons";
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

export const AppStack = () => (
  <Navigator headerMode="screen">
    <Screen name="HomeTabs" component={HomeTabs} />
    <Screen name="Profile" component={ProfileScreen} />
    <Screen name="SingleChat" component={SingleChatScreen} />
    <Screen name="Edit Profile" component={EditProfileScreen} />
    <Screen name="Saved">{() => <HomeScreen type="saved" />}</Screen>
    <Screen name="Rate" component={RateScreen} />
    <Screen name="About" component={AboutScreen} />
    <Screen name="Contact" component={ContactScreen} />
    <Screen name="Settings" component={SettingsScreen} />
  </Navigator>
);
