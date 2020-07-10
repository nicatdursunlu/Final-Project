import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";
import { connect, useSelector } from "react-redux";
import { Input, Icon } from "@ui-kitten/components";

import { logIn, selectAuthStatus } from "../../store/auth";
import { Container } from "../../commons";
import { userIcon } from "../../styles/icons";
import { GLOBAL_STYLES } from "./../../styles";
import { CustomBtn, Link } from "./../../components";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";

const fieldsInitisalState = {
  email: "",
  password: "",
};

export const LogInScreen = connect(null, { logIn })(({ logIn, navigation }) => {
  const auth = useSelector(selectAuthStatus);
  const [fields, setFields] = useState(fieldsInitisalState);
  const [visible, setVisible] = useState(false);
  const [err, setErr] = useState(false);

  const togglePass = (props) => (
    <Icon
      {...props}
      name={visible ? "eye" : "eye-off"}
      onPress={() => setVisible(!visible)}
    />
  );

  const fieldsChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (let key in fields) {
      if (fields[key].trim() === "") {
        Alert.alert(`${key} is required`);
        return false;
      }
    }
    return true;
  };

  const onSubmit = () => {
    if (validateForm()) {
      logIn(fields.email, fields.password);
      if (!auth) {
        setErr(true);
        setFields({
          ...fields,
          password: "",
        });
      }
    }
  };

  return (
    <Container>
      <Input
        value={fields.email}
        label="Username or email"
        placeholder="username or email"
        keyboardType="email-address"
        accessoryRight={userIcon}
        onChangeText={(val) => fieldsChangeHandler("email", val)}
        style={{ marginBottom: 15 }}
      />
      <Input
        value={fields.password}
        label="Password"
        placeholder="password"
        secureTextEntry={!visible}
        accessoryRight={togglePass}
        onChangeText={(val) => fieldsChangeHandler("password", val)}
        style={styles.bottomSpacing}
      />
      {err && (
        <Link
          title="Forgot your password?"
          style={{ color: "#000" }}
          onPress={() =>
            navigation.navigate("ForgetPassword", { mail: fields.email })
          }
        />
      )}
      <CustomBtn
        title="Login"
        width={getWidthByPercents(80, 2)}
        style={styles.btn}
        onPress={onSubmit}
      />
    </Container>
  );
});

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
  },
  btn: {
    marginTop: 15,
  },
  bottomSpacing: {
    marginBottom: GLOBAL_STYLES.BOTTOM,
  },
});
