import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GLOBAL_STYLES, ICONS } from "../styles";
import { CustomText } from "../components";
import { Input, Icon } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SocialIcon } from "react-native-elements";

export const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>
          If you have any comment or question, please get in touch with us!
        </Text>
        <TouchableOpacity style={styles.row}>
          <Icon name="phone-call" pack="feather" style={styles.callIcon} />
          <CustomText>*7700</CustomText>
        </TouchableOpacity>
        <View style={styles.row}>
          <Icon name="mail" pack="feather" style={styles.callIcon} />
          <CustomText>e-Donor@gmail.com</CustomText>
        </View>
        <View style={styles.icons}>
          {/* <View style={styles.icon}>
            <Icon name="facebook" pack="feather" style={styles.facebookIcon} />
          </View>

          <Icon name="linkedin" pack="feather" style={styles.linkedinIcon} />
          <Icon name="twitter" pack="feather" style={styles.twitterIcon} />
          <Icon name="youtube" pack="feather" style={styles.youtubeIcon} />
          <Icon name="instagram" pack="feather" style={styles.instagramIcon} /> */}
          <SocialIcon type="facebook" />
          <SocialIcon type="instagram" />
          <SocialIcon type="linkedin" />
          <SocialIcon type="twitter" />
          <SocialIcon type="youtube" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#3B5999",
    alignItems: "center",
    justifyContent: "center",
  },
  facebookIcon: {
    // width: "100%",
    height: 25,
    // backgroundColor: "#3B5999",
    color: "#F9FFFF",
    // position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
  },
  body: {
    flex: 1,
    marginTop: GLOBAL_STYLES.TOP,
  },
  row: {
    marginTop: GLOBAL_STYLES.TOP,
    flexDirection: "row",

    borderBottomWidth: 1,
  },
  callIcon: {
    width: 25,
    height: 25,

    marginRight: 20,
    marginVertical: 2,
  },

  linkedinIcon: {
    width: "100%",
    height: 25,
    backgroundColor: "#007DB4",
    color: "#FFFBF3",
  },
  twitterIcon: {
    width: "100%",
    height: 25,
    backgroundColor: "#55ACEF",
    color: "#FCFFFF",
  },
  youtubeIcon: {
    width: "100%",
    height: 25,
    backgroundColor: "#CE332E",
    color: "#FFF9FC",
  },
  instagramIcon: {
    width: "100%",
    height: 25,
    backgroundColor: "#67473A",
    color: "#FBF9FA",
  },
  icons: {
    borderTopWidth: 0.5,
    flexDirection: "row",
    borderColor: "grey",
    justifyContent: "space-around",
    width: "100%",
    bottom: 10,
    position: "absolute",
    paddingTop: 10,
    //   borderWidth:1,
    //   borderRadius:30,
  },
});
