import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { ICONS } from "../../styles";
import { CustomText, AvatarMaker } from "../../components";

export const ChatHeader = ({ route, navigation, children }) => {
  const { companion_img, companion_name } = route?.params;
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="dark"
      />
      <LinearGradient
        style={styles.gradient}
        start={[-0.7, -7]}
        colors={["white", "#859bde"]}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
        <Image style={styles.left} source={ICONS.left} />
      </TouchableOpacity>
      {!!companion_img && (
        <Image style={styles.img} source={{ uri: companion_img }} />
      )}
      {!companion_img && (
        <View style={styles.img}>{AvatarMaker(companion_name, 20)}</View>
      )}
      <CustomText weight="semi" style={styles.name}>
        {companion_name}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 10,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  gradient: {
    ...StyleSheet.absoluteFill,
  },
  left: {
    height: 20,
    width: 20,
    marginRight: 30,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    color: "#fbfbfb",
    fontSize: 15,
  },
});
