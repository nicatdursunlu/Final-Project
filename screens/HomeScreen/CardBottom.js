import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { toggleSavePost } from "../../store/posts";
import { CustomText } from "../../components";
import { ICONS } from "../../styles/icons";
import { COLORS } from "../../styles";
import { Icon } from "@ui-kitten/components";

export const CardBottom = connect(null, { toggleSavePost })(
  ({ saved, userID, id, toggleSavePost }) => {
    const isSaved = saved.find((item) => item === userID);
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Icon name="phone" pack="feather" style={styles.icon} />
            <CustomText weight="bold" style={styles.btnTitle}>
              call now
            </CustomText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleSavePost(id, isSaved, userID)}>
          <Image
            style={styles.btnIcon}
            source={isSaved ? ICONS.saved : ICONS.bookmark}
          />
        </TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    borderRadius: 15,
    width: 105,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 18,
    color: "#fff",
    marginLeft: 10,
    paddingVertical: 5,
  },
  btnTitle: {
    color: COLORS.TITLE,
    marginLeft: 8,
    fontSize: 12,
    textTransform: "uppercase",
  },
  btnIcon: {
    width: 22,
    height: 22,
    marginLeft: 10,
  },
});
