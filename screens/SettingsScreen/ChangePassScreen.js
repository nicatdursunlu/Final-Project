import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { connect, useSelector } from "react-redux";

import { Container } from "../../commons";
import { Field, CustomBtn } from "../../components";
import { GLOBAL_STYLES } from "../../styles";
import { getWidthByPercents } from "../../utils";
import { updatePassword, selectMail } from "../../store/auth";

export const ChangePassScreen = connect(null, {
  updatePassword,
})(({ navigation, updatePassword }) => {
  const email = useSelector(selectMail);
  const [fields, setFields] = useState({
    currentPass: "",
    newPasss: "",
    confirmPass: "",
  });

  const fieldsChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const validate = () => {
    for (let key in fields) {
      if (fields[key].trim() === "") {
        Alert.alert(`${key} is required`);
        return false;
      }
      if (fields.newPasss !== fields.confirmPass) {
        Alert.alert("Passwords must match");
        return false;
      } else return true;
    }
  };

  const onSumbit = () => {
    if (validate()) {
      updatePassword(email, fields.currentPass, fields.newPasss);
      navigation.navigate("Profile");
    }
  };

  return (
    <Container style={styles.container}>
      <Field
        label="Current password"
        placeholder="current password"
        secureTextEntry={false}
        style={styles.field}
        value={fields.currentPass}
        onChangeText={(val) => fieldsChangeHandler("currentPass", val)}
      />
      <Field
        label="New password"
        placeholder="new password"
        secureTextEntry={false}
        style={styles.field}
        value={fields.newPasss}
        onChangeText={(val) => fieldsChangeHandler("newPasss", val)}
      />
      <Field
        label="Confirm password"
        placeholder="confirm password"
        secureTextEntry={false}
        style={styles.field}
        value={fields.confirmPass}
        onChangeText={(val) => fieldsChangeHandler("confirmPass", val)}
      />
      <CustomBtn
        title="Save Changes"
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
