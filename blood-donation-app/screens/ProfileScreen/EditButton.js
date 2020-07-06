import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { ICONS } from "../../styles";
import { CustomText } from "../../components";

export const EditButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.btnWrapper, style]}>
        <Image source={ICONS.edit} style={styles.editIcon} />
        <CustomText weight="semi" style={styles.btnText}>
          Edit profile
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
    borderRadius: 20,
    height: 30,
    width: 120,
  },
  btnText: {
    fontSize: 12,
    color: "white",
    paddingLeft: 12,
  },
});
