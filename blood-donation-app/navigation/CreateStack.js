import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CreateScreen } from "./../screens";
import { HeaderIcon } from "./../components";
import { ICONS } from "./../styles";

const { Navigator, Screen } = createStackNavigator();

export const CreateStack = () => {
  return (
    <Navigator>
      <Screen
        name="New Post"
        component={CreateScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderIcon
              iconName={ICONS.menu}
              side="right"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerLeft: () => (
            <HeaderIcon iconName={ICONS.back} side="right" onPress={() => {}} />
          ),
        })}
      />
    </Navigator>
  );
};
