import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useTheme,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import i18n from "i18n-js";

import { BottomTabs } from "./BottomTabs";
import { HeaderStyles } from "../styles";
import { selectUsername } from "../store/auth";
import {
  ProfileScreen,
  SingleChatScreen,
  HomeScreen,
  EditProfileScreen,
  RateScreen,
  AboutScreen,
  SettingsScreen,
  EditEmailScreen,
  ChangePassScreen,
  DeleteAccountScreen,
} from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const AppStack = () => {
  const { colors } = useTheme();
  return (
    <Navigator
      headerMode="screen"
      screenOptions={({ navigation }) => ({
        ...HeaderStyles,
        headerLeft: (props) => (
          <Icon
            {...props}
            name="md-arrow-back"
            pack="ion"
            onPress={() => navigation.goBack()}
            style={{ height: 25, color: colors.text, marginLeft: 15 }}
          />
        ),
      })}
    >
      <Screen
        name="BottomTabs"
        component={BottomTabs}
        options={({ route }) => ({
          ...HeaderStyles,
          headerTitle: getHeaderTitle(route),
          headerLeft: null,
        })}
      />
      <Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ route }) => ({
          headerTitle: route.params?.author_name,
          headerTitleStyle: {
            fontSize: 17,
          },
        })}
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
      <Screen name="Settings" component={SettingsScreen} />
      <Screen name="Edit Email" component={EditEmailScreen} />
      <Screen name="Change Password" component={ChangePassScreen} />
      <Screen name="Delete Acoount" component={DeleteAccountScreen} />
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
