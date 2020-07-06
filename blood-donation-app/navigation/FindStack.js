import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { FindScreen } from "./../screens";
import { HeaderAction } from "./../components/HeaderAction";

const { Navigator, Screen } = createStackNavigator();

export const FindStack = ({ navigation }) => {
  return (
    <Navigator>
      <Screen
        name="Find"
        component={FindScreen}
        options={() => ({
          headerRight: () => (
            <HeaderAction
              name="menu"
              pack="feather"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </Navigator>
  );
};
