import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";

import { HomeTabs } from "./HomeTabs";
import { AuthStack } from "./AuthStack";
import { DrawerContent } from "../commons";
import { SettingsStack } from "./SettingsStack";
import { AboutStack } from "./AboutStack";
import { ContactStack } from "./ContactStack";
import { RateStack } from "./RateStack";
import { selectAuthStatus } from "../store/auth";

const { Navigator, Screen } = createDrawerNavigator();

const mapStateToProps = (state) => ({
  auth: selectAuthStatus(state),
});

export const RootNav = connect(mapStateToProps)(({ auth }) => {
  console.log("auth ", auth);
  return (
    <NavigationContainer>
      <Navigator
        drawerStyle={{ width: "80%" }}
        drawerContent={({ ...props }) => <DrawerContent {...props} />}
      >
        {auth ? (
          <>
            <Screen name="HomeTabs" component={HomeTabs} />
            <Screen name="Settings" component={SettingsStack} />
            <Screen name="About" component={AboutStack} />
            <Screen name="Contact" component={ContactStack} />
            <Screen name="Rate the app" component={RateStack} />
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
  );
});
