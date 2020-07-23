import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { connect, useSelector } from "react-redux";

import { Container } from "../../commons";
import { GLOBAL_STYLES } from "../../styles";
import { getWidthByPercents } from "../../utils";
import { Field, CustomBtn } from "../../components";
import { updatePassword, selectMail } from "../../store/auth";

export const ChangePassScreen = connect(null, {
  updatePassword,
})(({ navigation, updatePassword }) => {
  const email = useSelector(selectMail);
  const [fields, setFields] = useState({
    currentPass: "",
    newPass: "",
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
      if (fields.newPass !== fields.confirmPass) {
        Alert.alert("Passwords must match");
        return false;
      } else return true;
    }
  };

  const onSumbit = () => {
    if (validate()) {
      updatePassword(email, fields.currentPass, fields.newPass);
      navigation.navigate("Profile");
    }
  };

  return (
    <Container style={styles.container}>
      <Field
        style={styles.field}
        label="Current password"
        value={fields.currentPass}
        placeholder="current password"
        onChangeText={(val) => fieldsChangeHandler("currentPass", val)}
      />
      <Field
        label="New password"
        style={styles.field}
        value={fields.newPass}
        placeholder="new password"
        onChangeText={(val) => fieldsChangeHandler("newPass", val)}
      />
      <Field
        style={styles.field}
        label="Confirm password"
        value={fields.confirmPass}
        placeholder="confirm password"
        onChangeText={(val) => fieldsChangeHandler("confirmPass", val)}
      />
      <CustomBtn
        onPress={onSumbit}
        title="Save Changes"
        width={getWidthByPercents(80, 2)}
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
