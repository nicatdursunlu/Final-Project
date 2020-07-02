import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ChatsListScreen, SingleChatScreen } from "../screens";
import { HeaderIcon } from "../components";
import { ICONS, globalHeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const ChatsStack = () => {
  return (
    <Navigator screenOptions={globalHeaderStyles}>
      <Screen name="Chats" component={ChatsListScreen} />
      <Screen name="SingleChat" component={SingleChatScreen} />
    </Navigator>
  );
};
