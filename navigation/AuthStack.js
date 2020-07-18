import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigationAction, Icon } from "@ui-kitten/components";

import { WelcomeScreen, SignUpScreen, LogInScreen } from "./../screens";
import { HeaderStyles } from "./../styles";

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => (
  <Navigator
    screenOptions={({ navigation }) => ({
      ...HeaderStyles,
      headerLeft: () => (
        <TopNavigationAction
          icon={(props) => (
            <Icon
              {...props}
              name="arrow-left"
              pack="feather"
              style={{ height: 25, color: "#fff" }}
            />
          )}
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
