import React from "react";
import { TopNavigationAction } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";

import { ContactScreen } from "./../screens";
import { leftIcon } from "../styles/icons";

const { Navigator, Screen } = createStackNavigator();

export const ContactStack = ({ navigation }) => {
  return (
    <Navigator>
      <Screen
        name="Contact"
        component={ContactScreen}
        options={{
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
