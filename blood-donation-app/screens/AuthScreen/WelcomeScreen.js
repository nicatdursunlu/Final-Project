import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Swiper from "react-native-swiper";

import { CustomText, CustomBtn, Link } from "./../../components";
import { IMAGES } from "./../../styles";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";
import { SLIDER_IMAGES } from "./../../utils/selectOptions";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <Swiper style={styles.swiper} autoplay={true}>
        {SLIDER_IMAGES.map((image) => (
          <Image source={image.uri} key={image.key} style={styles.img} />
        ))}
      </Swiper>
      <View style={styles.container}>
        <CustomBtn
          title="Get Started"
          width={getWidthByPercents(80, 2)}
          onPress={() => navigation.navigate("SignUp")}
        />
        <View style={styles.row}>
          <CustomText style={styles.text}>
            Already have an account ? &nbsp;
          </CustomText>
          <Link title="Log in" onPress={() => navigation.navigate("LogIn")} />
        </View>
      </View>
      <Image source={IMAGES.footer} style={styles.footerImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  swiper: {
    marginTop: 100,
  },
  img: {
    alignSelf: "center",
  },
  container: {
    position: "absolute",
    bottom: 40,
    zIndex: 2,
    alignItems: "center",
  },
  row: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "baseline",
  },
  text: {
    fontSize: 17,
    color: "#fff",
  },
  footerImg: {
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
});
