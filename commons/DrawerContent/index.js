import React from "react";
import { connect } from "react-redux";

import { DrawerItem } from "./DrawerItem";
import { logOut } from "../../store/auth";
import { ITEMS } from "../../utils/selectOptions";
import { ScrollView } from "react-native-gesture-handler";

export const DrawerContent = connect(null, { logOut })(
  ({ logOut, navigation }) => (
    <ScrollView style={{ flex: 1 }}>
      {ITEMS.map((item) => (
        <DrawerItem
          key={item.name}
          name={item.name}
          title={item.title}
          onPress={() => navigation.navigate(item.goTo)}
        />
      ))}
      <DrawerItem title="Log out" name="log-out" onPress={logOut} />
    </ScrollView>
  )
);
