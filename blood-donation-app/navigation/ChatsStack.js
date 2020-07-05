import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ChatsListScreen, SingleChatScreen } from "../screens";
import { HeaderAction } from "./../components";

const { Navigator, Screen } = createStackNavigator();

export const ChatsStack = ({ navigation }) => {
  return (
    <Navigator>
      <Screen
        name="Chats"
        component={ChatsListScreen}
        options={{ title: "Chats" }}
      />
      <Screen
        name="SingleChat"
        component={SingleChatScreen}
        options={{
          headerLeft: () => (
            <HeaderAction
              name="arrow-left"
              pack="feather"
              onPress={() => navigation.goBack()}
            />
          ),
        }}
      />
    </Navigator>
  );
};
