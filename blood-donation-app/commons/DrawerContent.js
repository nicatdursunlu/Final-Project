import React from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

import { CustomText, DrawerButton } from "../components";
import { IMAGES } from "../styles/images";
import { ICONS } from "../styles/icons";
import { GLOBAL_STYLES } from "../styles/globalStyles";

export const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        source={IMAGES.welcomeImgBG}
      >
        <View style={styles.row}>
          <Image style={styles.avatar} source={IMAGES.femaleAvatar} />
          <View style={styles.namesWrapper}>
            <CustomText weight="bold" style={styles.fullName}>
              Mary Jane
            </CustomText>
            <View style={styles.usernameWrapper}>
              <Image style={styles.profileIcon} source={ICONS.profile} />
              <CustomText weight="bold" style={styles.username}>
                mary_j
              </CustomText>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.navigation}>
        <View style={styles.navContainer}>
          <CustomText style={styles.navHeader}>Peferences</CustomText>
          <View style={styles.navWrapper}>
            <DrawerButton title="My posts" iconName="grid" pack="feather" />
            <DrawerButton
              title="Saved"
              iconName="bookmark"
              pack="font-awesome"
            />
            <DrawerButton
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
            <DrawerButton
              title="About"
              iconName="info-circle"
              pack="font-awesome"
            />
            <DrawerButton
              title="Contact"
              iconName="question"
              pack="font-awesome"
            />
            <DrawerButton
              title="Rate the App"
              iconName="star"
              pack="font-awesome"
            />
          </View>
        </View>
      </View>
      <View style={{ position: "absolute", bottom: 20 }}>
        <DrawerButton
          title="Log out"
          iconName="log-out"
          pack="feather"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1,
  },
  imgBackground: {
    width: "100%",
    height: 200,
  },
  row: {
    flexDirection: "row",
    marginTop: 55,
    marginLeft: 15,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  fullName: {
    color: "white",
    fontSize: 30,
    paddingBottom: 9,
  },
  usernameWrapper: {
    flexDirection: "row",
    backgroundColor: "#6979F8",
    borderRadius: 20,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 3,
    maxWidth: 100,
  },
  profileIcon: {
    width: 11,
    height: 11,
    marginRight: 4,
  },
  username: {
    color: "white",
    fontSize: 10,
  },

  navContainer: {
    marginTop: 25,
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
    elevation: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  btnBorder: {
    borderTopWidth: 1,
    borderTopColor: "#979797",
  },
});
