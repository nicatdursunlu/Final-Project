import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
} from "react-native";

import { CustomText } from "../../components";
import { IMAGES, ICONS } from "../../styles";

const { width } = Dimensions.get("screen");

export const ChatsCover = ({ chat, onPress }) => {
  const { name, userAvatar, lastMessage } = chat;

  return (
    <TouchableOpacity style={styles.listCover} onPress={onPress}>
      <Image style={styles.userAvatar} source={{ uri: userAvatar }} />
      <View style={{ maxWidth: width * 0.6 }}>
        <CustomText weight="bold" style={styles.title}>
          {name}
        </CustomText>
        <CustomText numberOfLines={1} style={styles.lastMessage}>
          {lastMessage}
        </CustomText>
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
    borderColor: "#eee",
    width: width,
    height: 75,
    alignItems: "center",
  },
  userAvatar: {
    borderRadius: 25,
    width: 45,
    height: 45,
    marginLeft: 25,
    marginRight: 15,
  },
  title: {
    fontSize: 17,
  },
  lastMessage: {
    fontSize: 15,
  },
  iconRight: {
    position: "absolute",
    right: 25,
  },
});
