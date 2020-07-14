import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigationAction } from "@ui-kitten/components";

import { HomeScreen } from "./../screens";
import { HeaderStyles } from "../styles";
import { leftIcon } from "../styles/icons";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0)
    navigation.setOptions({ tabBarVisible: false });
  else navigation.setOptions({ tabBarVisible: true });

  return (
    <Navigator screenOptions={HeaderStyles} initialRouteName="Home">
      <Screen name="HomeScreen">{() => <HomeScreen type="posts" />}</Screen>
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
