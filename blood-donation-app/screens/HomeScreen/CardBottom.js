import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { toggleSavePost } from "../../store/posts";
import { CustomText } from "../../components";
import { ICONS } from "../../styles/icons";
import { COLORS } from "../../styles";

export const CardBottom = connect(null, { toggleSavePost })(
  ({ saved, userID, id, toggleSavePost }) => {
    const isSaved = saved.find((item) => item === userID);
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
          <TouchableOpacity onPress={() => toggleSavePost(id, isSaved, userID)}>
            <Image
              style={styles.btnIcon}
              source={isSaved ? ICONS.saved : ICONS.bookmark}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

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
    backgroundColor: COLORS.CALL_BTN,
    flexDirection: "row",
    alignItems: "center",
  },
  btnImage: {
    marginLeft: 10,
  },
  btnTitle: {
    color: COLORS.TITLE,
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
