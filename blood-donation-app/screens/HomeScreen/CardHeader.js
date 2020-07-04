import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { CustomText } from "../../components";
import { IMAGES, ICONS } from "../../styles";
import { getTimeFromPosted } from "../../utils/getTimeFromPosted";

export const CardHeader = ({ userAvatar, name, time, requestType }) => {
  const isRequsted = requestType === "request";
  const formattedTime = getTimeFromPosted(time);
  return (
    <View style={styles.cardHeaderRow}>
      <View style={styles.userInfo}>
        <View style={styles.imageWrapper}>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: userAvatar,
            }}
          />
        </View>
        <View>
          <CustomText weight="semi" style={styles.name}>
            {name}
          </CustomText>
          <CustomText weight="regular" style={styles.lastSeen}>
            {formattedTime}
          </CustomText>
        </View>
      </View>
      <View style={styles.requestInfo}>
        <Image
          style={styles.icon}
          source={isRequsted ? ICONS.request : ICONS.pending}
        />
        <CustomText
          weight="semi"
          style={{
            ...styles.reqTitle,
            ...{ color: isRequsted ? "#6979F8" : "#FFCF5C" },
          }}
        >
          {isRequsted ? "request" : "pending"}
        </CustomText>
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
    backgroundColor: "#eee",
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
