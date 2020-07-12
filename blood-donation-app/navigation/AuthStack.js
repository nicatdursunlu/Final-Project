import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigationAction } from "@ui-kitten/components";

import {
  WelcomeScreen,
  SignUpScreen,
  LogInScreen,
  ForgetPasswordScreen,
} from "./../screens/AuthScreen";
import { HeaderStyles } from "./../styles/HeaderStyles";
import { leftIcon } from "../styles/icons";
import { COLORS } from "./../styles/colors";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = ({ navigation }) => {
  return (
    <Navigator
      screenOptions={{
        ...HeaderStyles,
        headerTitleStyle: { fontSize: 25, color: COLORS.TEXT },
        headerLeft: () => (
          <TopNavigationAction
            icon={leftIcon}
            onPress={() => navigation.goBack()}
          />
        ),
      }}
    >
      <Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Screen name="Signup" component={SignUpScreen} />
      <Screen name="Login" component={LogInScreen} />
      <Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{ title: "Forget Password" }}
      />
    </Navigator>
  );
};
