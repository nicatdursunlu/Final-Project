import React from "react";
import { Icon } from "@ui-kitten/components";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import { DrawerStack } from "./DrawerStack";
import { ChatsScreen, CreateScreen, FindScreen, HomeScreen } from "../screens";
import { useTheme } from "@react-navigation/native";

const { Navigator, Screen } = AnimatedTabBarNavigator();

export const BottomTabs = () => {
  const { colors } = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: colors.tabbarActive,
        activeTintColor: colors.tabbarTint,
        keyboardHidesTabBar: true,
      }}
      appearence={{
        tabBarBackground: colors.tabbarBG,
        topPadding: 10,
        horizontalPadding: 10,
      }}
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
              style={{
                height: 20,
                color: focused ? colors.tabbarTint : "#999999",
              }}
            />
          );
        },
      })}
    >
      <Screen name="Home">
        {({ ...props }) => <HomeScreen type="posts" {...props} />}
      </Screen>
      <Screen name="Find" component={FindScreen} />
      <Screen name="Create" component={CreateScreen} />
      <Screen name="Chats" component={ChatsScreen} />
      <Screen name="Profile" component={DrawerStack} />
    </Navigator>
  );
};
