import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
import { connect } from "react-redux";
import call from "react-native-phone-call";

import { toggleSavePost } from "../../store/posts";
import { CustomText } from "../../components";
import { ICONS } from "../../styles/icons";
import { COLORS } from "../../styles";
import { Icon } from "@ui-kitten/components";

export const CardBottom = connect(null, { toggleSavePost })(
  ({ saved, userID, id, toggleSavePost, number }) => {
    const isSaved = saved.find((item) => item === userID);
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            number
              ? call({
                  number: number,
                  prompt: false,
                })
              : Alert.alert(
                  "Number is not provided",
                  "Try to write user via dm"
                )
          }
        >
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
    width: "100%",
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
