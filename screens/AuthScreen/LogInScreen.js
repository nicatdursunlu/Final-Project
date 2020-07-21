import React, { useState } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import * as WebBrowser from "expo-web-browser";
import { Icon, Input } from "@ui-kitten/components";
import i18n from "i18n-js";

import { Container } from "../../commons";
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
        name={visible ? "md-eye" : "md-eye-off"}
        pack="ion"
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
      <Container style={{ backgroundColor: "#fff" }}>
        <Input
          value={fields.email}
          // label={i18n.t("email")}
          label="Email"
          // placeholder={i18n.t("email")}
          placeholder="email"
          keyboardType="email-address"
          accessoryRight={(props) => (
            <Icon {...props} name="user" pack="feather" />
          )}
          onChangeText={(val) => fieldsChangeHandler("email", val)}
          style={{ marginBottom: 15 }}
        />

        {isLogIn && (
          <>
            <Input
              value={fields.password}
              // label={i18n.t("password")}
              label="Password"
              // placeholder={i18n.t("password")}
              placeholder="password"
              secureTextEntry={!visible}
              accessoryRight={togglePass}
              onChangeText={(val) => fieldsChangeHandler("password", val)}
              style={{ marginBottom: 15 }}
            />
            <Link
              // title={i18n.t("forgot_your_password?")}
              title="Forgot your password?"
              style={{ marginBottom: 20 }}
              onPress={() => setIsLogIn(false)}
            />
          </>
        )}
        <CustomBtn
          style={{ borderWidth: 0 }}
          width={getWidthByPercents(80, 2)}
          // title={isLogIn ? i18n.t("login") : i18n.t("send_email")}
          title={isLogIn ? "Login" : "Send email"}
          onPress={isLogIn ? onSubmit : sendEmailHandler}
        />
      </Container>
    );
  }
);
