import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { CheckBox, Text, Icon, Input } from "@ui-kitten/components";
import { connect } from "react-redux";
import i18n from "i18n-js";

import { signUp } from "./../../store/auth";
import { Container } from "./../../commons";
import { ModalWindow } from "./ModalWindow";
import { CustomBtn, Link } from "./../../components";
import { SIGNUP_INITIAL_STATE, AUTH_DATA } from "../../utils/dummy";
import { getWidthByPercents } from "../../utils/getWidthByPercents";

export const SignUpScreen = connect(null, { signUp })(({ signUp }) => {
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
      name={showPass ? "md-eye" : "md-eye-off"}
      pack="ion"
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
    <Container style={{ backgroundColor: "#fff" }}>
      {AUTH_DATA.map((item) => {
        const {
          label,
          value,
          placeholder,
          name,
          accessoryRight,
          keyboardType,
          caption,
          captionIcon,
        } = item;
        return (
          <Input
            key={item.value}
            label={label}
            value={fields[value]}
            placeholder={placeholder}
            onChangeText={(val) => fieldsChangeHandler(name, val)}
            keyboardType={keyboardType}
            accessoryRight={
              value === "password" || value === "repassword"
                ? togglePass
                : accessoryRight
            }
            caption={caption}
            captionIcon={captionIcon}
            secureTextEntry={
              (value === "password" || value === "repassword") && !showPass
            }
            style={styles.bottomSpacing}
          />
        );
      })}
      <View style={styles.container}>
        <CheckBox checked={checked} onChange={(val) => setChecked(val)}>
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
        onPress={onSubmit}
        title="Create Account"
        style={{ borderWidth: 0 }}
        width={getWidthByPercents(80, 2)}
      />
    </Container>
  );
});

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
  },
  bottomSpacing: {
    marginBottom: 15,
  },
});
