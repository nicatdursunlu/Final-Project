import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen } from "./../screens/AuthScreen/WelcomeScreen";
import { SignUpScreen } from "./../screens/AuthScreen/SignUpScreen";
import { LogInScreen } from "./../screens/AuthScreen/LogInScreen";
import { Icon } from "@ui-kitten/components";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerMode: "screen",
        headerTitleAlign: "center",
        headerTransparent: true,
        headerTitleStyle: {
          fontSize: 25,
          color: "#fff",
        },
      }}
    >
      <Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Sign up" }}
      />

      <Screen
        name="LogIn"
        component={LogInScreen}
        options={{ title: "Log in" }}
      />
    </Navigator>
  );
};
