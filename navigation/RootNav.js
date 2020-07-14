import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";

import { HomeTabs } from "./HomeTabs";
import { AuthStack } from "./AuthStack";
import { DrawerContent } from "../commons";
import { selectAuthStatus } from "../store/auth";
import { ContentStack } from "./ContentStack";
import { getTheme } from "./../store/settings";
import { LightTheme, DarkTheme } from "./../theme";

const { Navigator, Screen } = createDrawerNavigator();

const mapStateToProps = (state) => ({
  auth: selectAuthStatus(state),
  theme: getTheme(state),
});

export const RootNav = connect(mapStateToProps)(({ auth, theme }) => (
  <NavigationContainer>
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
