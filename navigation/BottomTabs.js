import React from "react";
import { Icon } from "@ui-kitten/components";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import { COLORS } from "../styles/colors";
import { DrawerStack } from "./DrawerStack";
import { ChatsScreen, CreateScreen, FindScreen, HomeScreen } from "../screens";

const { Navigator, Screen } = AnimatedTabBarNavigator();

export const BottomTabs = ({ navigation, route }) => {
  if (route.state && route.state.index === 4)
    navigation.setOptions({ headerShown: false });
  else navigation.setOptions({ headerShown: true });
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: "rgba(255, 57,57,0.7)",
        activeTintColor: COLORS.MAIN,
        keyboardHidesTabBar: true,
      }}
      appearence={{
        tabBarBackground: "#fff",
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
                color: focused ? COLORS.TITLE : COLORS.ICON,
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
