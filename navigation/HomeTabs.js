import React from "react";
import { Icon } from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import { COLORS } from "../styles/colors";
import { DrawerStack } from "./DrawerStack";
import { ChatsScreen, CreateScreen, FindScreen, HomeScreen } from "../screens";

const { Navigator, Screen } = createBottomTabNavigator();
// const { Navigator, Screen } = AnimatedTabBarNavigator();

export const HomeTabs = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeBackgroundColor: "rgba(255, 57,57,0.5)",
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
      <Screen name="Home">{() => <HomeScreen type="posts" />}</Screen>
      <Screen name="Find" component={FindScreen} />
      <Screen name="Create" component={CreateScreen} />
      <Screen name="Chats" component={ChatsScreen} />
      <Screen name="Profile" component={DrawerStack} />
    </Navigator>
  );
};
