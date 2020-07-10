import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { DrawerItem } from "./DrawerItem";
import { CustomText } from "../../components";
import { GLOBAL_STYLES } from "../../styles";
import { logOut } from "../../store/auth";

export const NavContainer = connect(null, { logOut })(
  ({ navigation, logOut }) => {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <View style={styles.navContainer}>
            <CustomText style={styles.navHeader}>Peferences</CustomText>
            <View style={styles.navWrapper}>
              <DrawerItem title="My posts" iconName="grid" pack="feather" />
              <DrawerItem
                title="Saved"
                iconName="bookmark"
                pack="font-awesome"
                onPress={() =>
                  navigation.navigate("Home", {
                    screen: "Saved",
                  })
                }
              />
              <DrawerItem
                title="Settings"
                iconName="settings"
                pack="material"
                onPress={() => navigation.navigate("Settings")}
              />
            </View>
          </View>
          <View style={styles.navContainer}>
            <CustomText style={styles.navHeader}>Support</CustomText>
            <View style={styles.navWrapper}>
              <DrawerItem
                title="About"
                iconName="info-circle"
                pack="font-awesome"
                onPress={() => navigation.navigate("About")}
              />
              <DrawerItem
                title="Contact"
                iconName="question"
                pack="font-awesome"
                onPress={() => navigation.navigate("Contact")}
              />
              <DrawerItem
                title="Rate the App"
                iconName="star"
                pack="font-awesome"
                onPress={() => navigation.navigate("Rate the app")}
              />
            </View>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 20 }}>
          <DrawerItem
            title="Log out"
            iconName="log-out"
            pack="feather"
            onPress={logOut}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#F8F8F8",
    flex: 1,
  },

  navContainer: {
    marginTop: 30,
  },
  navHeader: {
    color: "#6979F8",
    fontSize: 22,
    borderLeftWidth: 4,
    borderLeftColor: "#6979F8",
    paddingLeft: 14,
    marginBottom: 10,
    marginLeft: GLOBAL_STYLES.HORIZONTAL,
  },
  navWrapper: {
    backgroundColor: "white",
    // elevation: 3,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  btnBorder: {
    borderTopWidth: 1,
    borderTopColor: "#979797",
  },
});
