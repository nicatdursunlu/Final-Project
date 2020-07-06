import React from "react";
import { StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Layout } from "@ui-kitten/components";

import { UserInfo } from "./UserInfo";
import { logOut, selectAuthFullname } from "../../store/auth";
import { AvatarUploader } from "./AvatarUploader";

const mapStateToProps = (state) => ({
  fullName: selectAuthFullname(state),
});

export const ProfileScreen = connect(mapStateToProps, { logOut })(
  ({ logOut, fullName }) => {
    return (
      <Layout style={styles.container}>
        <UserInfo fullName={fullName} />
        <AvatarUploader />
        <Button title="log out" onPress={logOut} />
      </Layout>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
  },
});
