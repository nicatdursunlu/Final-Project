import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { GLOBAL_STYLES } from "./../styles/globalStyles";

export const AuthContainer = ({ bgImg, children }) => (
  <ImageBackground source={bgImg} style={styles.backgroundImg}>
    <KeyboardAwareScrollView style={styles.body}>
      {children}
    </KeyboardAwareScrollView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImg: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#fff",
  },
  body: {
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
    marginTop: 23,
  },
});
