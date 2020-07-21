import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";

import { Container } from "../../commons";
import { Field, CustomBtn } from "../../components";
import { GLOBAL_STYLES } from "../../styles";
import { getWidthByPercents } from "../../utils";
import { updateEmail } from "../../store/auth";

export const EditEmailScreen = connect(null, {
  updateEmail,
})(({ navigation, updateEmail }) => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
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
    }
    return true;
  };

  const onSumbit = () => {
    if (validate()) {
      updateEmail(fields.email, fields.password);
      navigation.navigate("Profile");
    }
  };

  return (
    <Container style={styles.container}>
      <Field
        label="Email"
        placeholder="email"
        style={styles.field}
        value={fields.email}
        onChangeText={(val) => fieldsChangeHandler("email", val)}
      />
      <Field
        label="Confirm your password"
        placeholder="password"
        secureTextEntry={false}
        style={styles.field}
        value={fields.password}
        onChangeText={(val) => fieldsChangeHandler("password", val)}
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
