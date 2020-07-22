import React from "react";
import Swiper from "react-native-swiper";
import { View, Image, StyleSheet, ImageBackground } from "react-native";

import { IMAGES } from "./../../styles";
import { SLIDER_IMAGES } from "../../utils/dummy";
import { CustomText, CustomBtn, Link } from "./../../components";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";

export const WelcomeScreen = ({ navigation }) => (
  <ImageBackground style={styles.body} source={IMAGES.footer}>
    <Swiper autoplay={true}>
      {SLIDER_IMAGES.map((image) => (
        <Image key={image.uri} source={image.uri} style={styles.img} />
      ))}
    </Swiper>
    <View style={styles.actions}>
      <CustomBtn
        title="Get Started"
        style={{ borderWidth: 0 }}
        width={getWidthByPercents(80, 2)}
        onPress={() => navigation.navigate("Signup")}
      />
      <View style={styles.row}>
        <CustomText style={styles.text}>
          Already have an account ? &nbsp;
        </CustomText>
        <Link
          title="Log in"
          style={{ color: "#fff" }}
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
    paddingBottom: 70,
  },
  row: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: {
    fontSize: 17,
    color: "#fff",
  },
});
