import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen } from "./../screens/AuthPage/WelcomeScreen";
import { SignUpScreen } from "./../screens/AuthPage/SignUpScreen";
import { LogInScreen } from "./../screens/AuthPage/LogInScreen";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator headerMode="screen">
      <Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Screen name="SignUp" component={SignUpScreen} />
      <Screen name="LogIn" component={LogInScreen} />
    </Navigator>
  );
};
