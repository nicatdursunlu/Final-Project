import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../../components";

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText>WelcomeScreen</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
