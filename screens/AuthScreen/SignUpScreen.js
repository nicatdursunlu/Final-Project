import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { CheckBox, Text, Icon } from "@ui-kitten/components";
import { connect } from "react-redux";

import { signUp } from "./../../store/auth";
import { ModalWindow } from "./ModalWindow";
import { Container } from "./../../commons";
import { GLOBAL_STYLES, COLORS } from "./../../styles";
import { CustomBtn, Link, Field } from "./../../components";
import { SIGNUP_INITIAL_STATE, AUTH_DATA } from "../../utils/selectOptions";
import { getWidthByPercents } from "../../utils/getWidthByPercents";
import { userIcon, mailIcon, captionIcon } from "../../styles/icons";

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

  const DUMMY = [
    {
      label: "Full name",
      value: "fullName",
      placeholder: "John Doe",
      name: "fullName",
    },
    {
      label: "Username",
      value: "username",
      placeholder: "john_doe",
      name: "username",
      accessoryRight: userIcon,
    },
    {
      label: "Email",
      value: "email",
      placeholder: "johndoe@gmail.com",
      name: "email",
      accessoryRight: mailIcon,
      keyboardType: "email-address",
    },

    {
      label: "Password",
      value: "password",
      placeholder: "password",
      name: "password",
      accessoryRight: togglePass,
      caption: "should contain at least 6 symbols",
      captionIcon: captionIcon,
      secureTextEntry: !showPass,
    },
    {
      label: "Repeat password",
      value: "repassword",
      placeholder: "confirm password",
      name: "repassword",
      accessoryRight: togglePass,
      caption: "should contain at least 6 symbols",
      captionIcon: captionIcon,
      secureTextEntry: !showPass,
    },
  ];

  return (
    <Container>
      {DUMMY.map((item) => {
        const {
          label,
          value,
          placeholder,
          name,
          accessoryRight,
          caption,
          captionIcon,
          secureTextEntry,
        } = item;
        return (
          <Field
            key={item.value}
            label={label}
            value={fields[value]}
            placeholder={placeholder}
            onChangeText={(val) => fieldsChangeHandler(name, val)}
            accessoryRight={accessoryRight}
            caption={caption}
            captionIcon={captionIcon}
            secureTextEntry={secureTextEntry}
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
        title="Create Account"
        style={styles.bottomSpacing}
        width={getWidthByPercents(80, 2)}
        onPress={onSubmit}
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
    color: COLORS.PRIMARY,
  },
  bottomSpacing: {
    marginBottom: GLOBAL_STYLES.BOTTOM,
  },
});
