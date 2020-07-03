import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStack } from "./HomeStack";
import { CreateStack } from "./CreateStack";
import { FindStack } from "./FindStack";
import { ProfileStack } from "./ProfileStack";
import { ChatsStack } from "./ChatsStack";

const { Navigator, Screen } = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeStack} />
      <Screen name="Find" component={FindStack} />
      <Screen name="Create" component={CreateStack} />
      <Screen name="Chats" component={ChatsStack} />
      <Screen name="Profile" component={ProfileStack} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 22,
    marginRight: 10,
  },
});
