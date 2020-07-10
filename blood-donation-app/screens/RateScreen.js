import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { GLOBAL_STYLES } from "../styles";
import { CustomText, CustomBtn } from "../components";
import { Rating, AirbnbRating } from "react-native-ratings";
import { getWidthByPercents } from "../utils/getWidthByPercents";

export const RateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <CustomText weight="semi" style={styles.text}>
          If you enjoy using this app, would you mind taking a moment to rate
          it? Thanks for your support!
        </CustomText>

        {/* <AirbnbRating defaultRating={5} /> */}
        <Rating
          showRating
          imageSize={40}
          style={{ paddingVertical: 10 }}
          //   ratingTextColor="red"
          defaultRating={5}
          size={40}
        />
        <CustomBtn
          title="Submit"
          style={styles.btn}
          onPress={() => Alert.alert("Thanks for your feedback")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
    paddingTop: 80,
    // paddingHorizontal: 50,
    justifyContent: "center",
  },
  body: {
    flex: 1,
    marginTop: GLOBAL_STYLES.TOP,
  },
  btn: {
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    // marginTop:10,
    // marginBottom:10,
    paddingVertical: 15,
  },
});
