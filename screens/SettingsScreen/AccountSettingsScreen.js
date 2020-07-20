import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "@ui-kitten/components";

import { Container } from "../../commons";
import { CustomText } from "../../components";

export const AccountSettingsScreen = ({ navigation }) => {
  return (
    <Container>
      <Divider style={{ width: "100%" }} />

      <TouchableOpacity
        style={styles.account}
        onPress={() => navigation.navigate("Edit Email")}
      >
        <CustomText style={styles.accountText}>Edit email</CustomText>
      </TouchableOpacity>
      <Divider style={{ width: "100%" }} />

      <TouchableOpacity
        style={styles.account}
        onPress={() => navigation.navigate("Change Password")}
      >
        <CustomText style={styles.accountText}>Change password</CustomText>
      </TouchableOpacity>
      <Divider style={{ width: "100%" }} />

      <TouchableOpacity
        style={styles.account}
        onPress={() => navigation.navigate("Delete Acoount")}
      >
        <CustomText style={styles.accountText}>Delete account</CustomText>
      </TouchableOpacity>
      <Divider style={{ width: "100%" }} />
    </Container>
  );
};
const styles = StyleSheet.create({
  account: {
    alignSelf: "flex-start",
    marginVertical: 5,
    width: "100%",
  },
  accountText: {
    fontSize: 16,
    padding: 14,
  },
});
