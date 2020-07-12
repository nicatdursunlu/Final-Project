import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { CustomText } from "../../components";
import { ICONS } from "../../styles/icons";
import { MapModal } from "../../components/MapModal";
import { COLORS } from "../../styles";

export const CardContent = ({
  bloodType,
  location,
  desc,
  navigation,
  coordinates,
}) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
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
        <TouchableOpacity
          onPress={() => {
            setIsMapOpen(true);
          }}
        >
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
      <MapModal
        visible={isMapOpen}
        close={() => setIsMapOpen(false)}
        type="static"
        initialRegion={{
          latitude: coordinates[0],
          longitude: coordinates[1],
          latitudeDelta: 0.5522,
          longitudeDelta: 0.5521,
        }}
      />
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
    color: COLORS.TOUCHABLE_TEXT,
  },
  tagTitle: {
    width: 200,
    fontSize: 12,
  },
});
