import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@ui-kitten/components";

import { HomeStack } from "./HomeStack";
import { CreateStack } from "./CreateStack";
import { FindStack } from "./FindStack";
import { ProfileStack } from "./ProfileStack";
import { ChatsStack } from "./ChatsStack";

const { Navigator, Screen } = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let name = "";
          let pack = "";
          if (route.name === "Home") {
            name = "home";
            pack = "font-awesome";
          } else if (route.name === "Find") {
            name = "search";
            pack = "font-awesome";
          } else if (route.name === "Create") {
            name = "plus-circle";
            pack = "font-awesome";
          } else if (route.name === "Chats") {
            name = "comments";
            pack = "font-awesome";
          } else if (route.name === "Profile") {
            name = "user";
            pack = "font-awesome";
          }

          return (
            <Icon
              name={name}
              pack={pack}
              style={[styles.icon, { color: focused ? "#000" : "#c1c1c1" }]}
            />
          );
        },
      })}
    >
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
