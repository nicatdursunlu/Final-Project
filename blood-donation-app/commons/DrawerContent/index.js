import React from "react";
import { StyleSheet, View, } from "react-native";

import { UserInfo } from "./UserInfo";
import { NavContainer } from "./NavContainer";

export const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <NavContainer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1,
  },
});
