import React, { useState } from "react";
import { connect } from "react-redux";
import { StyleSheet, Alert } from "react-native";
import { Input } from "@ui-kitten/components";
import * as WebBrowser from "expo-web-browser";

import { sendEmail } from "../../store/auth";
import { CustomBtn } from "./../../components";
import { GLOBAL_STYLES } from "./../../styles";
import { userIcon } from "../../styles/icons";
import { Container } from "../../commons";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";

export const ForgetPasswordScreen = connect(null, { sendEmail })(
  ({ sendEmail, navigation, route }) => {
    const [email, setEmail] = useState(route.params.mail);
    const onSubmit = () => {
      if (email.trim() === "") Alert.alert("Email required");
      else {
        sendEmail(email);
        WebBrowser.openBrowserAsync(
          "https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        );
        navigation.navigate("Login");
      }
    };

    return (
      <Container>
        <Input
          value={email}
          label="Email"
          accessoryRight={userIcon}
          onChangeText={(val) => setEmail(val)}
          style={(styles.bottomSpacing, { marginTop: GLOBAL_STYLES.TOP })}
        />
        <CustomBtn
          title="Send"
          width={getWidthByPercents(80, 2)}
          style={styles.btn}
          onPress={onSubmit}
        />
      </Container>
    );
  }
);

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
