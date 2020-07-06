import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import { Input, Icon, Text } from "@ui-kitten/components";

import { logIn } from "../../store/auth";
import { CustomBtn, Link } from "./../../components";
import { GLOBAL_STYLES } from "./../../styles";

const fieldsInitisalState = {
  email: "",
  password: "",
};

export const LogInScreen = connect(null, { logIn })(({ logIn, navigation }) => {
  const [fields, setFields] = useState(fieldsInitisalState);
  const [visible, setVisible] = useState(true);

  const togglePass = (props) => (
    <Icon
      {...props}
      name={visible ? "eye" : "eye-off"}
      onPress={() => setVisible(!visible)}
    />
  );
  const userIcon = (props) => <Icon {...props} name="user" pack="feather" />;

  const fieldsChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (fields.email.trim() === "") {
      Alert.alert("Email required");
      return false;
    }
    if (fields.password.trim() === "") {
      Alert.alert("Password required");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (validateForm) {
      logIn(fields.email, fields.password);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Input
        value={fields.email}
        label={<Text style={{ color: "#fff" }}>Email</Text>}
        placeholder="email"
        accessoryRight={userIcon}
        onChangeText={(val) => fieldsChangeHandler("email", val)}
        style={(styles.bottomSpacing, { marginTop: GLOBAL_STYLES.TOP })}
      />
      <Input
        value={fields.password}
        label={<Text style={{ color: "#fff" }}>Password</Text>}
        placeholder="password"
        secureTextEntry={!visible}
        accessoryRight={togglePass}
        onChangeText={(val) => fieldsChangeHandler("password", val)}
        style={styles.bottomSpacing}
      />
      <Link title="Forgot your password?" />
      <CustomBtn title="Login" style={styles.btn} onPress={onSubmit} />
    </KeyboardAwareScrollView>
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
