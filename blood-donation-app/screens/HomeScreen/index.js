import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { CardCover } from "./CardCover";
import {
  getAndListenForPosts,
  selectPostLists,
  getAndListenSavedPosts,
  selectSavedLists,
  deleteSavedPostList,
} from "../../store/posts";
import { connect } from "react-redux";
import { selectAuthUserID } from "../../store/auth";
import { COLORS } from "../../styles";

const mapStateToProps = (state) => ({
  posts: selectPostLists(state),
  userID: selectAuthUserID(state),
  savedPosts: selectSavedLists(state),
});

export const HomeScreen = connect(mapStateToProps, {
  getAndListenForPosts,
  getAndListenSavedPosts,
  deleteSavedPostList,
})(
  ({
    getAndListenForPosts,
    getAndListenSavedPosts,
    deleteSavedPostList,
    posts,
    savedPosts,
    userID,
    navigation,
    type,
  }) => {
    useEffect(() => {
      if (type === "posts") {
        getAndListenForPosts();
      } else if (type === "saved") {
        alert("saved");
        deleteSavedPostList();
        getAndListenSavedPosts(userID);
      }
    }, []);
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={type === "posts" ? posts : savedPosts}
          renderItem={({ item }) => (
            <CardCover item={item} navigation={navigation} userID={userID} />
          )}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MAIN,
  },
  list: {
    flexGrow: 1,
    paddingBottom: 60,
    paddingHorizontal: 15,
    paddingTop: 80,
  },
});
