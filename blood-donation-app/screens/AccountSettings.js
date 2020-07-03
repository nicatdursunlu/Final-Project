import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomText } from "../components";

export const AccountSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText>AccountSettingsScreen</CustomText>
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
