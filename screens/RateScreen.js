import React from "react";
import { Alert } from "react-native";
import { Rating } from "react-native-ratings";

import { CustomText, CustomBtn } from "../components";
import { Container } from "./../commons/Container";
import { getWidthByPercents } from "./../utils/getWidthByPercents";

export const RateScreen = () => (
  <Container>
    <CustomText weight="semi" style={{ fontSize: 16, padding: 20 }}>
      If you enjoy using this app, would you mind taking a moment to rate it?
      Thanks for your support!
    </CustomText>

    <Rating
      showRating
      startingValue={5}
      ratingCount={5}
      size={20}
      style={{ paddingBottom: 50 }}
    />
    <CustomBtn
      width={getWidthByPercents(80, 2)}
      title="Submit"
      onPress={() => Alert.alert("Thanks for your feedback")}
    />
  </Container>
);
