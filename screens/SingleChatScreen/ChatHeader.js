import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { CustomText } from "../../components";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { ICONS } from "../../styles";

export const ChatHeader = ({ route, navigation, children }) => {
  const { companion_img, companion_name } = route?.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyl="dark"
        />
        <LinearGradient
          style={styles.gradient}
          start={[-0.7, -7]}
          colors={["white", "#859bde"]}
        />
        <TouchableOpacity
          style={styles.leftIcon}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.left} resizeMode="cover" source={ICONS.left} />
        </TouchableOpacity>
        <Image style={styles.img} source={{ uri: companion_img }} />
        <CustomText weight="semi" style={styles.name}>
          {companion_name}
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    height: 100,
    overflow: "hidden",
    flexDirection: "row",
  },
  gradient: {
    ...StyleSheet.absoluteFill,
  },
  img: {
    marginLeft: 50,
    marginTop: 50,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#eee",
  },
  name: {
    color: "#fbfbfb",
    fontSize: 15,
    marginTop: 60,
    marginLeft: 10,
  },
  leftIcon: {
    position: "absolute",
    left: 20,
    top: 60,
  },
  left: {
    height: 20,
    width: 20,
  },
});
