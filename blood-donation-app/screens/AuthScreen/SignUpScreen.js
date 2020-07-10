import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { CheckBox, Text, Icon } from "@ui-kitten/components";
import { connect } from "react-redux";

import { signUp } from "./../../store/auth";
import { ModalWindow } from "./ModalWindow";
import { Container } from "./../../commons";
import { GLOBAL_STYLES } from "./../../styles";
import { CustomBtn, Link, Field } from "./../../components";
import { SIGNUP_INITIAL_STATE } from "../../utils/selectOptions";
import { getWidthByPercents } from "../../utils/getWidthByPercents";
import { userIcon, mailIcon, captionIcon } from "../../styles/icons";

export const SignUpScreen = connect(null, { signUp })(
  ({ navigation, signUp }) => {
    const [fields, setFields] = useState(SIGNUP_INITIAL_STATE);
    const [showPass, setShowPass] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [checked, setChecked] = useState(false);

    const fieldsChangeHandler = (name, value) => {
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };

    const togglePass = (props) => (
      <Icon
        {...props}
        name={showPass ? "eye" : "eye-off"}
        onPress={() => setShowPass(!showPass)}
      />
    );

    const toggleModal = () => {
      setChecked(true);
      setShowModal(false);
    };

    const validateForm = () => {
      for (let key in fields) {
        if (fields[key].trim() === "") {
          Alert.alert(`${key} is required`);
          return false;
        } else if (fields.password !== fields.repassword) {
          Alert.alert("Passwords must match");
          return false;
        } else if (!checked) {
          Alert.alert("Agree with our Terms and Conditions");
          return false;
        } else return true;
      }
    };

    const onSubmit = () => {
      const { email, password, username, fullName } = fields;
      if (validateForm()) signUp(email, password, username, fullName);
    };

    return (
      <Container>
        <Field
          label="Full name"
          value={fields.fullName}
          placeholder="John Doe"
          onChangeText={(val) => fieldsChangeHandler("fullName", val)}
          style={styles.bottomSpacing}
        />
        <Field
          value={fields.username}
          label="Username"
          placeholder="john_doe"
          onChangeText={(val) => fieldsChangeHandler("username", val)}
          style={styles.bottomSpacing}
          accessoryRight={userIcon}
        />
        <Field
          value={fields.email}
          label="Emai"
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          style={styles.bottomSpacing}
          accessoryRight={mailIcon}
          onChangeText={(val) => fieldsChangeHandler("email", val)}
        />
        <Field
          value={fields.password}
          label="Password"
          placeholder="password"
          secureTextEntry={!showPass}
          accessoryRight={togglePass}
          captionIcon={captionIcon}
          caption="should contain at least 6 symbols"
          style={styles.bottomSpacing}
          onChangeText={(val) => fieldsChangeHandler("password", val)}
        />
        <Field
          value={fields.repassword}
          label="Repeat Password"
          placeholder="confirm password"
          secureTextEntry={!showPass}
          accessoryRight={togglePass}
          style={styles.bottomSpacing}
          captionIcon={captionIcon}
          caption="should contain at least 6 symbols"
          onChangeText={(val) => fieldsChangeHandler("repassword", val)}
        />
        <View style={styles.container}>
          <CheckBox
            checked={checked}
            onChange={(nextChecked) => setChecked(nextChecked)}
          >
            {
              <Text style={styles.checkText}>
                By creating an account, you agree to our
              </Text>
            }
          </CheckBox>
          <Link
            title="Terms & Conditions"
            style={styles.link}
            onPress={() => setShowModal(!showModal)}
          />
          <ModalWindow
            onBackdropPress={() => setShowModal(false)}
            onPress={toggleModal}
            visible={showModal}
          />
        </View>
        <CustomBtn
          title="Create Account"
          style={styles.bottomSpacing}
          width={getWidthByPercents(80, 2)}
          onPress={onSubmit}
        />
      </Container>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 25,
  },
  checkText: {
    marginLeft: 10,
    fontSize: 16,
  },
  link: {
    fontSize: 13,
    marginLeft: 32,
    color: "#ff6767",
  },
  bottomSpacing: {
    marginBottom: GLOBAL_STYLES.BOTTOM,
  },
});
