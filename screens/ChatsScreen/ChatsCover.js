import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from "react-native";

import { CustomText, avatarMaker } from "../../components";
import { getMessageTime } from "../../utils/getMessageTime";

const { width } = Dimensions.get("screen");

export const ChatsCover = ({ chat, onPress }) => {
  const { companion_name, companion_img, last_msg, time, readed } = chat;

  return (
    <TouchableOpacity style={styles.listCover} onPress={onPress}>
      {!!companion_img && (
        <Image style={styles.userAvatar} source={{ uri: companion_img }} />
      )}
      {!companion_img && (
        <View style={styles.userAvatar}>{avatarMaker(companion_name, 23)}</View>
      )}
      <View style={styles.content}>
        <View style={styles.row}>
          <View style={styles.infoContent}>
            <CustomText weight="semi" style={styles.title}>
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listCover: {
    flexDirection: "row",
    width: width,
    height: 60,
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    marginRight: 15,
  },
  userAvatar: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  infoContent: {
    maxWidth: width * 0.5,
  },
  title: {
    fontSize: 20,
    marginRight: 10,
    color: "#859bde",
  },
  lastMessage: {
    fontSize: 13,
  },
  timeRow: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 50,
  },
  time: {
    fontSize: 11,
    marginBottom: 15,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  unread: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#859bde",
  },
});
