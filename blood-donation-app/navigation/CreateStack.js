import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateScreen } from "./../screens";
import { HeaderAction } from "./../components/HeaderAction";

const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => {
  return (
    <Navigator>
      <Screen
        name="New Post"
        component={CreateScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderAction
              name="menu"
              pack="feather"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          // headerLeft: () => (
          //   <HeaderAction
          //     name="arrow-left"
          //     pack="feather"
          //     onPress={() => navigation.goBack()}
          //   />
          // ),
        })}
      />
    </Navigator>
  );
};
