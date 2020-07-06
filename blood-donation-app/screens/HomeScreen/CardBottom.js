import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { CustomText } from "../../components";
import { ICONS } from "../../styles/icons";

export const CardBottom = () => {
  return (
    <View style={styles.bottomRow}>
      <TouchableOpacity>
        <View style={styles.btn}>
          <Image style={styles.btnImage} source={ICONS.phone} />
          <CustomText weight="bold" style={styles.btnTitle}>
            call now
          </CustomText>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomIconRow}>
        <TouchableOpacity>
          <Image style={styles.btnIcon} source={ICONS.comment} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.btnIcon} source={ICONS.bookmark} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomRow: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  btn: {
    height: 25,
    borderRadius: 15,
    width: 105,
    backgroundColor: "#7ED09E",
    flexDirection: "row",
    alignItems: "center",
  },
  btnImage: {
    marginLeft: 10,
  },
  btnTitle: {
    color: "white",
    marginBottom: 3,
    marginLeft: 8,
    fontSize: 10,
    textTransform: "uppercase",
  },
  bottomIconRow: {
    flexDirection: "row",
  },
  btnIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
});