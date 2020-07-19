import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { CustomText } from "../../components";
import { getTimeFromPosted } from "../../utils";
import { AvatarMaker } from "../../components/AvatarMaker";

export const CardHeader = ({
  author_id,
  userID,
  user_photo,
  author_name,
  time,
  navigation,
}) => {
  const formattedTime = getTimeFromPosted(time);
  const isMe = author_id === userID;
  const goTo = () => {
    isMe
      ? navigation.navigate("Profile")
      : navigation.navigate("ProfileScreen", {
          author_id,
          author_name,
          type: "other",
        });
  };

  return (
    <View style={styles.container}>
      {user_photo ? (
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: user_photo }}
        />
      ) : (
        <View style={styles.image}>{AvatarMaker(author_name, 15)}</View>
      )}
      <TouchableOpacity onPress={goTo}>
        <CustomText weight="semi" style={styles.name}>
          {isMe ? "Me" : author_name}
        </CustomText>
        <CustomText weight="regular" style={styles.lastSeen}>
          {formattedTime}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 10,
  },
});