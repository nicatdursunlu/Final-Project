import React from "react";
import { connect } from "react-redux";
import { Icon } from "@ui-kitten/components";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { logOut } from "../store/auth";
import { ITEMS } from "../utils/dummyData";

export const DrawerContent = connect(null, { logOut })(
  ({ logOut, navigation }) => (
    <DrawerContentScrollView>
      {ITEMS.map((item) => (
        <DrawerItem
          key={item.title}
          icon={item.icon}
          label={item.title}
          onPress={() => navigation.navigate(item.goTo)}
        />
      ))}
      <DrawerItem
        label="Log out"
        icon={() => (
          <Icon
            name="log-out"
            pack="feather"
            style={{ color: "gray", height: 23 }}
          />
        )}
        onPress={logOut}
      />
    </DrawerContentScrollView>
  )
);
