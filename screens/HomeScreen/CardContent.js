import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { CustomText } from "../../components";
import { MapModal } from "../../components/MapModal";
import { COLORS } from "../../styles";
import { Icon } from "@ui-kitten/components";

export const CardContent = ({ bloodType, location, desc, coordinates }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Icon name="droplet" pack="feather" style={styles.icon} />
        <CustomText weight="bold" style={styles.bloodDonationTitle}>
          {bloodType}
        </CustomText>
      </View>
      <View style={styles.iconRow}>
        <Icon name="map" pack="feather" style={styles.icon} />
        <TouchableOpacity
          onPress={() => {
            setIsMapOpen(true);
          }}
        >
          <CustomText style={styles.markTitle}>{location}</CustomText>
        </TouchableOpacity>
      </View>
      <View style={styles.iconRow}>
        <Icon name="clock" pack="feather" style={styles.icon} />

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.CARD_BG,
    width: "100%",
    borderRadius: 10,
    marginVertical: 15,
  },
  iconRow: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    height: 25,
    marginRight: 10,
    color: "gray",
  },
  bloodDonationTitle: {
    fontSize: 22,
  },
  markTitle: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: COLORS.LINK,
  },
  tagTitle: {
    width: 200,
    fontSize: 12,
  },
});
