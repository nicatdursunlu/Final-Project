import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { CustomText } from "../../components";
import { getTimeFromPosted } from "../../utils/getTimeFromPosted";

export const CardHeader = ({
  author_id,
  userID,
  user_photo,
  author_name,
  time,
}) => {
  const formattedTime = getTimeFromPosted(time);
  const isMe = author_id === userID;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri:
            user_photo ||
            "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png",
        }}
      />
      <View>
        <CustomText weight="semi" style={styles.name}>
          {isMe ? "Me" : author_name}
        </CustomText>
        <CustomText weight="regular" style={styles.lastSeen}>
          {formattedTime}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 10,
  },
});
