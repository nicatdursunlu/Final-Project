import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { UserInfo } from "./UserInfo";
import { NavContainer } from "./NavContainer";
import { Divider } from "react-native-elements";

export const DrawerContent = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <UserInfo />
    <Divider />
    <NavContainer navigation={navigation} />
  </SafeAreaView>
);
