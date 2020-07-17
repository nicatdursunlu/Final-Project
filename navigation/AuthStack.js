import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigationAction } from "@ui-kitten/components";

import { WelcomeScreen, SignUpScreen, LogInScreen } from "./../screens";
import { HeaderStyles } from "./../styles/HeaderStyles";
import { leftIcon } from "../styles/icons";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => (
  <Navigator
    screenOptions={({ navigation }) => ({
      ...HeaderStyles,
      headerTitleStyle: { fontSize: 25, color: "#fff" },
      headerLeft: () => (
        <TopNavigationAction
          icon={leftIcon}
          onPress={() => navigation.goBack()}
        />
      ),
    })}
  >
    <Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Screen name="Signup" component={SignUpScreen} />
    <Screen name="Login" component={LogInScreen} />
  </Navigator>
);
