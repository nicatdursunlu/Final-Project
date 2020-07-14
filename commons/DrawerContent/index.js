import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { UserInfo } from "./UserInfo";
import { NavContainer } from "./NavContainer";
import { Divider } from "react-native-elements";

export const DrawerContent = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <StatusBar />
    <UserInfo />
    {/* <Divider style={{ backgroundColor: "lightgrey", height: 1 }} /> */}
    <NavContainer navigation={navigation} />
  </View>
);
