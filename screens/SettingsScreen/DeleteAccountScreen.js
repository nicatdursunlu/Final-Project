import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { connect, useSelector } from "react-redux";

import { Container } from "../../commons";
import { Field, CustomBtn } from "../../components";
import { GLOBAL_STYLES } from "../../styles";
import { getWidthByPercents } from "../../utils";
import { deleteAccount, logOut, selectMail } from "../../store/auth";

export const DeleteAccountScreen = connect(null, {
  deleteAccount,
  logOut,
})(({ deleteAccount, logOut }) => {
  const email = useSelector(selectMail);
  const [password, setPassword] = useState("");

  const onSumbit = () => {
    if (password.trim() === "") {
      Alert.alert(
        "Password required",
        "If you want to delete this account, you must write your password for security"
      );
    } else {
      deleteAccount(email, password);
      logOut();
    }
  };

  return (
    <Container style={styles.container}>
      <Field
        label="Password"
        placeholder="password"
        secureTextEntry={false}
        style={styles.field}
        value={password}
        onChangeText={(val) => setPassword(val)}
      />
      <CustomBtn
        title="Delete Account"
        width={getWidthByPercents(80, 2)}
        onPress={onSumbit}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  field: {
    marginBottom: GLOBAL_STYLES.BOTTOM + 5,
  },
});
