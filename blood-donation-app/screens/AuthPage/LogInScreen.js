import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../../components";

export const LogInScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText>LogInScreen</CustomText>
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
