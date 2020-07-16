import React, { useState } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import * as WebBrowser from "expo-web-browser";
import { Input, Icon } from "@ui-kitten/components";

import { Container } from "../../commons";
import { userIcon } from "../../styles/icons";
import { getWidthByPercents } from "./../../utils";
import { logIn, sendEmail } from "../../store/auth";
import { CustomBtn, Link } from "./../../components";

const fieldsInitisalState = {
  email: "",
  password: "",
};

export const LogInScreen = connect(null, { logIn, sendEmail })(
  ({ logIn, sendEmail }) => {
    const [isLogIn, setIsLogIn] = useState(true);
    const [fields, setFields] = useState(fieldsInitisalState);
    const [visible, setVisible] = useState(false);

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

    const onSubmit = () => {
      for (let key in fields) {
        if (fields[key].trim() === "") {
          Alert.alert(`${key} is required`);
          return false;
        }
      }
      return logIn(fields.email, fields.password);
    };

    const sendEmailHandler = () => {
      sendEmail(fields.email);
      WebBrowser.openBrowserAsync(
        "https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
      );
      setIsLogIn(true);
      setFields((fields) => ({
        ...fields,
        password: "",
      }));
    };

    return (
      <Container>
        <Input
          value={fields.email}
          label="Email"
          placeholder="Email"
          keyboardType="email-address"
          accessoryRight={userIcon}
          onChangeText={(val) => fieldsChangeHandler("email", val)}
          style={{ marginBottom: 15 }}
        />

        {isLogIn && (
          <>
            <Input
              value={fields.password}
              label="Password"
              placeholder="password"
              secureTextEntry={!visible}
              accessoryRight={togglePass}
              onChangeText={(val) => fieldsChangeHandler("password", val)}
              style={{ marginBottom: 15 }}
            />
            <Link
              title="Forgot your password?"
              style={{ color: "#6979f8", marginBottom: 20 }}
              onPress={() => setIsLogIn(false)}
            />
          </>
        )}

        <CustomBtn
          title={isLogIn ? "Login" : "Send email"}
          onPress={isLogIn ? onSubmit : sendEmailHandler}
          width={getWidthByPercents(80, 2)}
        />
      </Container>
    );
  }
);
