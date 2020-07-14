import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from "react-native";

import { CustomText } from "../../components";
import { ICONS, COLORS } from "../../styles";
import { getMessageTime } from "../../utils/getMessageTime";

const { width } = Dimensions.get("screen");

export const ChatsCover = ({ chat, onPress }) => {
  const { companion_name, companion_img, last_msg, time, readed } = chat;

  return (
    <TouchableOpacity style={styles.listCover} onPress={onPress}>
      <Image style={styles.avatar} source={{ uri: companion_img }} />
      <View style={styles.row}>
        <View style={styles.infoContent}>
          <CustomText weight="bold" style={styles.title}>
            {companion_name}
          </CustomText>
          <CustomText
            numberOfLines={1}
            style={styles.lastMessage}
            weight={readed ? "regular" : "bold"}
          >
            {last_msg}
          </CustomText>
        </View>
        <View style={styles.timeRow}>
          <CustomText weight="bold" style={styles.time}>
            {getMessageTime(time)}
          </CustomText>
          {!readed && <View style={styles.unread} />}
        </View>
      </View>
      <Image style={styles.iconRight} source={ICONS.right} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listCover: {
    flexDirection: "row",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    width: width,
    height: 75,
    alignItems: "center",
  },
  avatar: {
    borderRadius: 25,
    width: 45,
    height: 45,
    marginLeft: 25,
    marginRight: 15,
  },
  infoContent: {
    maxWidth: width * 0.4,
  },
  title: {
    fontSize: 16,
    marginRight: 10,
  },
  lastMessage: {
    fontSize: 13,
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 45,
  },
  time: {
    fontSize: 11,
  },
  iconRight: {
    position: "absolute",
    right: 25,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: width * 0.64,
  },
  unread: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "cyan",
  },
});
