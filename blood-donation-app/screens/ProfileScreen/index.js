import React, { useState } from "react";
import { StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Layout, Input, Text } from "@ui-kitten/components";

import { UserInfo } from "./UserInfo";
import {
  selectAuthFullname,
  selectAuthBloodType,
  selectAuthPhoto,
  selectAuthEmail,
  deleteAuthPhoto,
  editUsername,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  fullName: selectAuthFullname(state),
  bloodType: selectAuthBloodType(state),
  photo: selectAuthPhoto(state),
  email: selectAuthEmail(state),
});

export const ProfileScreen = connect(mapStateToProps, {
  deleteAuthPhoto,
  editUsername,
})(({ fullName, bloodType, photo, email, deleteAuthPhoto, editUsername }) => {
  console.log("hdud", fullName, bloodType, photo, email);
  const [username, setUsername] = useState("hello");
  return (
    <Layout style={styles.container}>
      <UserInfo
        fullName={fullName}
        bloodType={bloodType}
        userAvatar={photo}
        email={email}
      />

      <Input
        placeholder="username"
        value={username}
        onChangeText={(val) => setUsername(val)}
      />
      <Button title="edit username" onPress={() => editUsername(username)} />
    </Layout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
  },
});
