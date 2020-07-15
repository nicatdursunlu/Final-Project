import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ProfileScreen } from "./../screens";
import { DrawerContent } from "./../commons/DrawerContent/index";

const { Navigator, Screen } = createDrawerNavigator();

export const DrawerStack = () => (
  <Navigator drawerContent={({ ...props }) => <DrawerContent {...props} />}>
    <Screen name="Profile" component={ProfileScreen} />
  </Navigator>
);
