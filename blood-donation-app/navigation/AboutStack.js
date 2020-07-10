import React from "react";
import { TopNavigationAction } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";

import { HeaderStyles } from "../styles";
import { leftIcon } from "../styles/icons";
import { AboutScreen } from "./../screens";

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({ navigation }) => {
  return (
    <Navigator>
      <Screen
        name="About"
        component={AboutScreen}
        options={{
          ...HeaderStyles,
          headerLeft: () => (
            <TopNavigationAction
              icon={leftIcon}
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Navigator>
  );
};
0;
