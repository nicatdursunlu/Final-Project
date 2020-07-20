import React from "react";
import { Icon } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import { CustomText, AvatarMaker } from "../../components";
import { useTheme } from "@react-navigation/native";

export const ChatHeader = ({ route, navigation }) => {
  const { companion_img, companion_name } = route?.params;
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.chatBG }]}>
      {/* <LinearGradient
        style={styles.gradient}
        start={[-0.7, -7]}
        colors={["white", "#859bde"]}
      /> */}
      <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
        <Icon
          name="chevron-left"
          pack="feather"
          style={[styles.left, { color: colors.link }]}
        />
      </TouchableOpacity>
      {!!companion_img && (
        <Image style={styles.img} source={{ uri: companion_img }} />
      )}
      {!companion_img && (
        <View style={styles.img}>{AvatarMaker(companion_name, 20)}</View>
      )}
      <CustomText
        weight="semi"
        style={{ ...styles.name, ...{ color: colors.text } }}
      >
        {companion_name}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  // gradient: {
  //   ...StyleSheet.absoluteFill,
  // },
  left: {
    height: 30,
    marginRight: 30,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 15,
  },
});
