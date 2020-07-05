import React from "react";
import { Icon, TopNavigationAction } from "@ui-kitten/components";

export const HeaderAction = ({ name, pack, onPress }) => (
  <TopNavigationAction
    icon={(props) => <Icon {...props} name={name} pack={pack} />}
    onPress={onPress}
  />
);
