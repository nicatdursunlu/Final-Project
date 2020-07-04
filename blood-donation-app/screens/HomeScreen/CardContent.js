import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { CustomText } from "../../components";
import { ICONS } from "../../styles/icons";

export const CardContent = ({ bloodType, location, desc }) => {
  return (
    <>
      <View style={styles.iconRow}>
        <Image style={styles.iconImage} source={ICONS.bloodDonation} />
        <CustomText weight="bold" style={styles.bloodDonationTitle}>
          {bloodType}
        </CustomText>
      </View>
      <View style={styles.iconRow}>
        <Image style={styles.iconImage} source={ICONS.mark} />
        <TouchableOpacity>
          <CustomText style={styles.markTitle}>{location}</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.iconRow}>
        <Image
          resizeMode="contain"
          style={styles.iconImage}
          source={ICONS.tag}
        />
        <CustomText style={styles.tagTitle}>{desc}</CustomText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconRow: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  iconImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  bloodDonationTitle: {
    fontSize: 25,
  },
  markTitle: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#6979F8",
  },
  tagTitle: {
    width: 200,
    fontSize: 12,
  },
});
