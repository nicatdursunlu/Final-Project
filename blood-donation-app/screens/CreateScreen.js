import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomText } from "../components";

export const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText>CreateScreen</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
