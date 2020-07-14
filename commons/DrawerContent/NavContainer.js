import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { DrawerItem } from "./DrawerItem";
import { logOut } from "../../store/auth";
import { ITEMS } from "../../utils/selectOptions";
import { ScrollView } from "react-native-gesture-handler";

export const NavContainer = connect(null, { logOut })(
  ({ logOut, navigation }) => (
    <ScrollView style={{ flex: 1 }}>
      {ITEMS.map((item) => (
        <DrawerItem
          key={item.name}
          name={item.name}
          title={item.title}
          onPress={() =>
            item.goTo === "Saved"
              ? navigation.navigate("Home", { screen: "Saved" })
              : navigation.navigate("Content", { screen: item.goTo })
          }
        />
      ))}
      <DrawerItem title="Log out" name="log-out" onPress={logOut} />
    </ScrollView>
  )
);
