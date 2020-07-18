import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

import { CustomText, AvatarMaker } from "../../components";
import { getMessageTime } from "../../utils/getMessageTime";

export const ChatsCover = ({ chat, onPress }) => {
  const { companion_name, companion_img, last_msg, time, readed } = chat;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listCover}>
        {!!companion_img && (
          <Image style={styles.userAvatar} source={{ uri: companion_img }} />
        )}
        {!companion_img && (
          <View style={styles.userAvatar}>
            {AvatarMaker(companion_name, 23)}
          </View>
        )}
        <View style={styles.content}>
          <View>
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
    height: 65,
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  userAvatar: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    color: "#859bde",
  },
  lastMessage: {
    fontSize: 13,
  },
  timeRow: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 11,
    marginBottom: 15,
  },
  unread: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#859bde",
  },
});
