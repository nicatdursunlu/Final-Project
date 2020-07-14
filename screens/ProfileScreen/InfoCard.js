import React from "react";
import { StyleSheet, View } from "react-native";

import { CustomText } from "../../components";
import { COLORS } from "../../styles";

export const InfoCard = ({ value, text, textStyle, style }) => {
  return (
    <View style={styles.content}>
      <View style={[styles.circle, style]}>
        <CustomText weight="bold" style={{ ...styles.valueText, ...textStyle }}>
          {value}
        </CustomText>
        <CustomText style={styles.text}>{text}</CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },
  circle: {
    //   // width: 100,
    //   height: 100,
    //   borderRadius: 50,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   borderWidth: 1,
    //   borderColor: "white",
    //   top: 40,
    //   zIndex: 2,
  },
  valueText: {
    color: COLORS.TEXT,
    textAlign: "center",
    fontSize: 38,
  },
  text: {
    fontSize: 11,
    color: COLORS.TITLE,
    textAlign: "center",
  },
});
