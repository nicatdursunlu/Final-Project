import React from "react";
import { connect } from "react-redux";
import { Divider } from "react-native-elements";

import { UserInfo } from "./UserInfo";
import { UserPosts } from "./UserPosts";
import { Container } from "./../../commons/Container";
import {
  selectName,
  selectBlood,
  selectPhoto,
  selectMail,
} from "../../store/auth";

const mapStateToProps = (state) => ({
  fullName: selectName(state),
  bloodType: selectBlood(state),
  photo: selectPhoto(state),
  email: selectMail(state),
});

export const ProfileScreen = connect(mapStateToProps)(
  ({ fullName, bloodType, photo, email, navigation }) => (
    <Container>
      <UserInfo
        fullName={fullName}
        bloodType={bloodType}
        avatar={photo}
        email={email}
        navigation={navigation}
      />
      <Divider style={{ width: "100%" }} />
      <UserPosts />
    </Container>
  )
);
