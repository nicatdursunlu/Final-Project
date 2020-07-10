import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ChatsListScreen, SingleChatScreen } from "../screens";
import { TopNavigationAction } from "@ui-kitten/components";
import { leftIcon } from "../styles/icons";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const ChatsStack = () => {
  return (
    <Navigator>
      <Screen
        name="Chats"
        component={ChatsListScreen}
        options={{ ...HeaderStyles, title: "Chats" }}
      />
      <Screen
        name="SingleChat"
        component={SingleChatScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TopNavigationAction
              icon={leftIcon}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Navigator>
  );
};
