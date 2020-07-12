import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { CustomText } from "../../components";
import { getTimeFromPosted } from "../../utils/getTimeFromPosted";
import { COLORS } from "../../styles";

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
    <View style={styles.cardHeaderRow}>
      <View style={styles.userInfo}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: user_photo
                ? user_photo
                : "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png",
            }}
          />
        </View>
        <View>
          <CustomText weight="semi" style={styles.name}>
            {isMe ? "Me" : author_name}
          </CustomText>
          <CustomText weight="regular" style={styles.lastSeen}>
            {formattedTime}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeaderRow: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  userInfo: {
    flexDirection: "row",
  },
  imageWrapper: {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: COLORS.BORDER,
    marginRight: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  requestInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 14,
    height: 14,
    marginRight: 6,
  },
  reqTitle: {
    marginBottom: 3,
    textTransform: "uppercase",
    fontSize: 11,
  },
});
