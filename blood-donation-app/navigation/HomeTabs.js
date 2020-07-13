import React from "react";
import { Icon } from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import { HomeStack } from "./HomeStack";
import { CreateStack } from "./CreateStack";
import { FindStack } from "./FindStack";
import { ProfileStack } from "./ProfileStack";
import { ChatsStack } from "./ChatsStack";
import { COLORS } from "./../styles/colors";

const { Navigator, Screen } = createBottomTabNavigator();
// const { Navigator, Screen } = AnimatedTabBarNavigator();

export const HomeTabs = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeBackgroundColor: "#ff5757",
        activeTintColor: COLORS.MAIN,
        keyboardHidesTabBar: true,
        showLabel: false,
      }}
      screenOptions={({ navigation, route }) => ({
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
              style={{
                height: 20,
                color: focused ? COLORS.TITLE : COLORS.ICON,
              }}
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
