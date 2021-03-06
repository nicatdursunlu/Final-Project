import React from "react";
import { Icon } from "@ui-kitten/components";
import { Image } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { CustomText, AvatarMaker } from "../../components";

export const ChatHeader = ({ route, navigation }) => {
  const { companion_img, companion_name, companion_id } = route?.params;
  const { colors } = useTheme();
  const onPress = () => {
    navigation.navigate("ProfileScreen", {
      companion_id,
      companion_name,
      type: "other",
    });
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.chatBG }]}>
      <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
        <Icon
          name="chevron-left"
          pack="feather"
          style={[styles.left, { color: colors.link }]}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.info} onPress={onPress}>
        {companion_img ? (
          <Image
            style={styles.img}
            source={{ uri: companion_img }}
            PlaceholderContent={<ActivityIndicator />}
            placeholderStyle={{ backgroundColor: "#f2f4f8" }}
          />
        ) : (
          <View style={styles.img}>{AvatarMaker(companion_name, 20)}</View>
        )}
        <CustomText
          weight="semi"
          style={{ ...styles.name, ...{ color: colors.text } }}
        >
          {companion_name}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  left: {
    height: 30,
    marginRight: 20,
  },
  info: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
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
