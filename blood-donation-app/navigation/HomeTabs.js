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

export const HomeTabs = ({ navigation }) => {
  return (
    <Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let name = "";
          if (route.name === "Home") name = "home";
          else if (route.name === "Find") name = "search";
          else if (route.name === "Create") name = "plus-circle";
          else if (route.name === "Chats") name = "message-circle";
          else if (route.name === "Profile") name = "user";

          return (
            <Icon
              name={name}
              pack="feather"
              style={focused ? styles.focus : styles.icon}
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
    color: "#c1c1c1",
  },
  focus: {
    height: 22,
    color: "#f06767",
  },
});
