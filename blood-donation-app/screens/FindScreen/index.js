import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../../components";

export const FindScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText>FindScreen</CustomText>
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
