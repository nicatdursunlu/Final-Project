import React, { useEffect } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { connect } from "react-redux";

import { UserInfo } from "./UserInfo";
import { Container } from "../../commons";
import { CustomText } from "../../components";
import { selectPostLists } from "../../store/posts";
import { CardCover } from "./../HomeScreen/CardCover";
import { generateChatID } from "./../../utils/generateChatID";
import {
  selectUserID,
  selectName,
  selectBlood,
  selectPhoto,
  selectMail,
  getAndListenForUsers,
  selectOtherUser,
  initOtherUser,
  selectUsername,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  email: selectMail(state),
  username: selectUsername(state),
  photo: selectPhoto(state),
  userID: selectUserID(state),
  fullName: selectName(state),
  posts: selectPostLists(state),
  bloodType: selectBlood(state),
  otherProfile: selectOtherUser(state),
});

export const ProfileScreen = connect(mapStateToProps, {
  getAndListenForUsers,
  initOtherUser,
})(
  ({
    userID,
    username,
    fullName,
    bloodType,
    photo,
    email,
    navigation,
    posts,
    route,
    otherProfile,
    getAndListenForUsers,
    initOtherUser,
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
      : { username, fullName, bloodType, photo, email };

    const onPressHandler = () => {
      if (!!profileType) {
        navigation.navigate("SingleChat", {
          companion_name: otherProfile.fullName,
          companion_img: otherProfile.photo,
          chatID: generateChatID(userID, otherProfile.userID),
        });
      } else {
        navigation.navigate("Edit Profile");
      }
    };
    return (
      <>
        <View style={styles.bar}>
          <CustomText weight="semi" style={styles.username}>
            {userInfo.username}
          </CustomText>
        </View>
        <Container>
          <UserInfo
            {...{ ...userInfo }}
            profileType={profileType}
            onPress={onPressHandler}
          />
          <View style={styles.divider}>
            <CustomText style={styles.text}>Posts</CustomText>
          </View>
          {userPosts.map((item) => (
            <CardCover
              key={item.id}
              item={item}
              navigation={navigation}
              userID={userID}
            />
          ))}
        </Container>
      </>
    );
  }
);
const styles = StyleSheet.create({
  bar: {
    height: 45,
    marginTop: Platform.OS === "ios" ? 20 : 24,
    borderBottomColor: "#dadada",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  username: {
    fontSize: 16,
  },
  divider: {
    width: "100%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#dadada",
    borderBottomColor: "#dadada",
    marginBottom: 15,
  },
  text: {
    paddingVertical: 10,
    alignSelf: "center",
  },
});
