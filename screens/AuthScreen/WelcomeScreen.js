import React from "react";
import Swiper from "react-native-swiper";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

import { IMAGES, COLORS } from "./../../styles";
import { SLIDER_IMAGES } from "../../utils/dummy";
import { CustomText, CustomBtn, Link } from "./../../components";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";

export const WelcomeScreen = ({ navigation }) => (
  <ImageBackground style={styles.body} source={IMAGES.footer}>
    <Swiper autoplay={true}>
      {SLIDER_IMAGES.map((image) => (
        <Image source={image.uri} key={image.uri} style={styles.img} />
      ))}
    </Swiper>
    <View style={styles.actions}>
      <CustomBtn
        title="Get Started"
        width={getWidthByPercents(80, 2)}
        style={{ backgroundColor: COLORS.MAIN }}
        titleStyle={{ color: COLORS.PRIMARY }}
        onPress={() => navigation.navigate("Signup")}
      />
      <View style={styles.row}>
        <CustomText style={styles.text}>
          Already have an account ? &nbsp;
        </CustomText>
        <Link
          style={{ color: "#fff" }}
          title="Log in"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  img: {
    alignSelf: "center",
  },
  actions: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 40,
  },
  row: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: {
    fontSize: 17,
    color: COLORS.TITLE,
  },
});
