import React from "react";
import { useSelector } from "react-redux";
import { TopNavigationAction } from "@ui-kitten/components";
import { createStackNavigator } from "@react-navigation/stack";

import { ProfileScreen, EditProfileScreen } from "./../screens";
import { selectUsername } from "../store/auth";
import { editIcon } from "./../styles/icons";
import { HeaderStyles } from "../styles";

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = ({ navigation, route }) => {
  const username = useSelector(selectUsername);
  if (route.state && route.state.index > 0)
    navigation.setOptions({ tabBarVisible: false });
  else navigation.setOptions({ tabBarVisible: true });

  return (
    <Navigator screenOptions={HeaderStyles}>
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: username,
          headerRight: () => (
            <TopNavigationAction
              icon={editIcon}
              onPress={() => navigation.navigate("Edit Profile")}
            />
          ),
        })}
      />

      <Screen
        name="Edit Profile"
        component={EditProfileScreen}
        options={{ headerLeft: null }}
      />
    </Navigator>
  );
};
