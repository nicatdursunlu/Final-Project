import React from "react";
import {
  NavigationContainer,
  Theme,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";

import { HomeTabs } from "./HomeTabs";
import { AuthStack } from "./AuthStack";
import { DrawerContent } from "../commons";
import { selectAuthStatus } from "../store/auth";
import { ContentStack } from "./ContentStack";

const { Navigator, Screen } = createDrawerNavigator();

const mapStateToProps = (state) => ({
  auth: selectAuthStatus(state),
});

export const RootNav = connect(mapStateToProps)(({ auth, navigation }) => (
  <NavigationContainer theme={DefaultTheme}>
    <Navigator
      drawerStyle={{ width: "80%" }}
      drawerContent={({ ...props }) => <DrawerContent {...props} />}
    >
      {auth ? (
        <>
          <Screen name="HomeTabs" component={HomeTabs} />
          <Screen name="Content" component={ContentStack} />
        </>
      ) : (
        <Screen
          name="Auth"
          component={AuthStack}
          options={{ swipeEnabled: false }}
        />
      )}
    </Navigator>
  </NavigationContainer>
));
