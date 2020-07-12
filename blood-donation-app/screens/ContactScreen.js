import React from "react";
import { StyleSheet, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import { Icon } from "@ui-kitten/components";

import { GLOBAL_STYLES } from "../styles";
import { CustomText } from "../components";
import { Container } from "./../commons/Container";
import { COLORS } from "./../styles/colors";

export const ContactScreen = () => (
  <Container>
    <CustomText style={{ padding: 20 }}>
      If you have any comment or question, please get in touch with us!
    </CustomText>
    <View style={styles.row}>
      <Icon name="phone-call" pack="feather" style={styles.icon} />
      <CustomText>*7700</CustomText>
    </View>
    <View style={styles.row}>
      <Icon name="mail" pack="feather" style={styles.icon} />
      <CustomText>e-Donor@gmail.com</CustomText>
    </View>
    <CustomText style={styles.text}>
      Follow us on Social Media for Latest Updates!
    </CustomText>
    <View style={styles.icons}>
      <SocialIcon type="facebook" />
      <SocialIcon type="instagram" />
      <SocialIcon type="linkedin" />
      <SocialIcon type="twitter" />
      <SocialIcon type="youtube" />
    </View>
  </Container>
);

const styles = StyleSheet.create({
  row: {
    marginTop: GLOBAL_STYLES.TOP,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "grey",
    width: "100%",
    alignItems: "center",
  },
  icon: {
    height: 25,
    color: COLORS.ICON,
    marginHorizontal: 20,
    marginVertical: 8,
  },
  text: {
    position: "absolute",
    bottom: 100,
    color: COLORS.PRIMARY,
    fontSize: 14,
  },
  icons: {
    borderTopWidth: 0.5,
    flexDirection: "row",
    borderColor: "grey",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 10,
  },
});
