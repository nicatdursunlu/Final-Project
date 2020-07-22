import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { useTheme } from "@react-navigation/native";

import { UserInfo } from "./UserInfo";
import { Container } from "../../commons";
import { CustomText } from "../../components";
import { selectPostLists } from "../../store/posts";
import { CardCover } from "./../HomeScreen/CardCover";
import { generateChatID } from "./../../utils/generateChatID";
import {
  selectName,
  selectBlood,
  selectPhoto,
  selectUserID,
  initOtherUser,
  selectOtherUser,
  selectUsername,
  getAndListenForUsers,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  photo: selectPhoto(state),
  userID: selectUserID(state),
  fullName: selectName(state),
  posts: selectPostLists(state),
  bloodType: selectBlood(state),
  username: selectUsername(state),
  otherProfile: selectOtherUser(state),
});

export const ProfileScreen = connect(mapStateToProps, {
  getAndListenForUsers,
  initOtherUser,
})(
  ({
    photo,
    posts,
    route,
    userID,
    username,
    fullName,
    bloodType,
    navigation,
    otherProfile,
    initOtherUser,
    getAndListenForUsers,
  }) => {
    const user = route.params?.author_id;
    const profileType = route.params?.type;
    const userPosts =
      profileType === "other"
        ? posts.filter((post) => post.author_id === user)
        : posts.filter((post) => post.author_id === userID);
    useEffect(() => {
      if (profileType === "other") getAndListenForUsers(user);
      return initOtherUser;
    }, []);
    const userInfo = !!profileType
      ? otherProfile
      : { username, fullName, bloodType, photo };
    const onPressHandler = () => {
      if (!!profileType)
        navigation.navigate("SingleChat", {
          companion_name: otherProfile.fullName,
          companion_img: otherProfile.photo,
          chatID: generateChatID(userID, otherProfile.userID),
          companion_id: otherProfile.userID,
        });
      else navigation.navigate("Edit Profile");
    };
    const { colors } = useTheme();
    return (
      <Container>
        <UserInfo
          {...{ ...userInfo }}
          profileType={profileType}
          onPress={onPressHandler}
        />
        <View style={styles.divider}>
          <View style={[styles.line, { borderColor: colors.divider }]} />
          <CustomText>Posts</CustomText>
          <View style={[styles.line, { borderColor: colors.divider }]} />
        </View>
        <View style={styles.card}>
          {userPosts.length > 0 ? (
            userPosts.map((item) => (
              <CardCover
                key={item.id}
                item={item}
                navigation={navigation}
                userID={userID}
              />
            ))
          ) : (
            <CustomText style={styles.post}>
              {profileType === "other"
                ? "This user has no posts"
                : "Share your first post"}
            </CustomText>
          )}
        </View>
      </Container>
    );
  }
);
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    width: "40%",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  card: {
    width: "100%",
    marginBottom: 60,
    alignItems: "center",
  },
  post: {
    fontSize: 20,
    marginTop: 20,
  },
});
