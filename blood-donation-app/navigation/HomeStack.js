import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigationAction } from "@ui-kitten/components";

import { HomeScreen } from "./../screens";
import { leftIcon } from "./../styles/icons";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => {
  return (
    <Navigator initialRouteName="Home" screenOptions={HeaderStyles}>
      <Screen name="Home">{() => <HomeScreen type="posts" />}</Screen>
      <Screen
        name="Saved"
        options={({ navigation }) => ({
          headerLeft: () => (
            <TopNavigationAction
              icon={leftIcon}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      >
        {() => <HomeScreen type="saved" />}
      </Screen>
    </Navigator>
  );
};
