import React from "react";
import { Image, Avatar } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import { CustomText, CustomBtn, AvatarMaker } from "../../components";

export const UserInfo = ({
  photo,
  onPress,
  fullName,
  bloodType,
  profileType,
}) => {
  const { colors } = useTheme();
  const btnColor = {
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBG,
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.image}>
          {photo ? (
            <Image
              style={styles.img}
              source={{ uri: photo }}
              PlaceholderContent={<ActivityIndicator />}
              placeholderStyle={{ backgroundColor: "#f2f4f8" }}
            />
          ) : (
            <View style={styles.img}>{AvatarMaker(fullName, 40)}</View>
          )}
        </View>
        <View style={styles.info}>
          <CustomText weight="bold" style={styles.value}>
            {bloodType || "?"}
          </CustomText>
          <CustomText style={styles.text}>Blood Type</CustomText>
        </View>
      </View>
      <CustomText weight="bold" style={styles.name}>
        {fullName}
      </CustomText>
      <CustomBtn
        width="100%"
        title={!!profileType ? "Send message" : "Edit profile "}
        titleStyle={{ ...styles.btnText, ...{ color: colors.text } }}
        onPress={onPress}
        style={[styles.btn, btnColor]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "35%",
    alignItems: "flex-start",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    marginVertical: 10,
  },
  info: {
    alignItems: "center",
    width: "65%",
    justifyContent: "center",
  },
  value: {
    fontSize: 20,
    color: "#ff6767",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 13,
  },
  btn: {
    height: 34,
    borderWidth: 1,
  },
  btnText: {
    textTransform: "none",
    fontSize: 15,
  },
});
