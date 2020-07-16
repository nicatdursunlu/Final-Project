import React, { useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Divider } from "@ui-kitten/components";
import { connect } from "react-redux";

import { UserInfo } from "./UserInfo";
import { CustomText } from "../../components";
import { selectPostLists } from "../../store/posts";
import { CardCover } from "./../HomeScreen/CardCover";
import {
  selectUserID,
  selectName,
  selectBlood,
  selectPhoto,
  selectMail,
  getAndListenForUsers,
  selectOtherUser,
  initOtherUser,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  email: selectMail(state),
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
    const myposts = posts.filter((post) => post.author_id === userID);
    const isMyProfile = route.params?.type;
    useEffect(() => {
      if (isMyProfile === "other")
        getAndListenForUsers(route.params?.author_id);
      return initOtherUser;
    }, []);
    const userInfo = !!route.params?.type
      ? otherProfile
      : { fullName, bloodType, photo, email };
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.body}>
        <UserInfo {...{ ...userInfo }} navigation={navigation} />
        <Divider />
        <CustomText style={styles.text}>My Posts</CustomText>
        <Divider />

        {/* {myposts.map((item) => (
          <CardCover
            key={item.id}
            item={item}
            navigation={navigation}
            userID={userID}
          />
        ))} */}
      </ScrollView>
    );
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flexGrow: 1,
    paddingHorizontal: 15,
  },
  text: {
    paddingVertical: 10,
    alignSelf: "center",
  },
});
