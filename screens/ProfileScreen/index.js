import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
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
} from "../../store/auth";

const mapStateToProps = (state) => ({
  email: selectMail(state),
  photo: selectPhoto(state),
  userID: selectUserID(state),
  fullName: selectName(state),
  posts: selectPostLists(state),
  bloodType: selectBlood(state),
});

export const ProfileScreen = connect(mapStateToProps)(
  ({ userID, fullName, bloodType, photo, email, navigation, posts }) => {
    const myposts = posts.filter((post) => post.author_id === userID);
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.body}>
        <UserInfo
          fullName={fullName}
          bloodType={bloodType}
          avatar={photo}
          email={email}
          navigation={navigation}
        />
        <Divider />
        <CustomText style={styles.text}>My Posts</CustomText>
        <Divider />

        {myposts.map((item) => (
          <CardCover
            key={item.id}
            item={item}
            navigation={navigation}
            userID={userID}
          />
        ))}
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
