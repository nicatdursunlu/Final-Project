import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HeaderStyles } from "../styles";
import { ChatsListScreen, SingleChatScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const ChatsStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0)
    navigation.setOptions({ tabBarVisible: false });
  else navigation.setOptions({ tabBarVisible: true });
  return (
    <Navigator>
      <Screen name="Chats" component={ChatsListScreen} options={HeaderStyles} />
      <Screen name="SingleChat" component={SingleChatScreen} />
    </Navigator>
  );
};
