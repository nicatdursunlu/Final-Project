import React from "react";
import { Alert } from "react-native";
import { Rating } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

import { Container } from "./../commons";
import { CustomText, CustomBtn } from "../components";
import { getWidthByPercents } from "./../utils/getWidthByPercents";

export const RateScreen = () => {
  const { colors } = useTheme();
  return (
    <Container>
      <CustomText style={{ fontSize: 16, paddingVertical: 20 }}>
        If you enjoy using this app, would you mind taking a moment to rate it?
        {"\n"} {"\n"}Thanks for your support!
      </CustomText>

      <Rating
        type="custom"
        showRating
        startingValue={5}
        ratingCount={5}
        size={20}
        tintColor={colors.background}
        ratingBackgroundColor="#f2f4f8"
        style={{ paddingBottom: 50 }}
      />
      <CustomBtn
        title="Submit"
        width={getWidthByPercents(80, 2)}
        onPress={() =>
          Alert.alert("Submitted", "Thanks for your feedback 🥳🎉")
        }
      />
    </Container>
  );
};
