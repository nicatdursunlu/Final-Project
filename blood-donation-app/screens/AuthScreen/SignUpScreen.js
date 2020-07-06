import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CheckBox, Text, Icon } from "@ui-kitten/components";
import { connect } from "react-redux";

import { signUp } from "./../../store/auth";
import { GLOBAL_STYLES } from "./../../styles";
import { BLOOD_TYPES, GENDERS } from "../../utils/selectOptions";
import { getWidthByPercents } from "./../../utils/getWidthByPercents";
import { CustomBtn, Field, Link, SelectGroup } from "./../../components";
import { ModalWindow } from "./ModalWindow";

export const SignUpScreen = connect(null, { signUp })(
  ({ navigation, signUp }) => {
    const fieldsInitialState = {
      fullName: "",
      bloodType: "",
      gender: "",
      birthDate: null,
      username: "",
      email: "",
      password: "",
      repassword: "",
      visible: false,
      checked: false,
      visibleModal: false,
    };

    const [fields, setFields] = useState(fieldsInitialState);

    const fieldsChangeHandler = (name, value) =>
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));

    const validateForm = () => {
      if (fields.fullName.trim() === "") {
        Alert.alert("Full name required");
        return false;
      }
      if (fields.email.trim() === "") {
        Alert.alert("Email required");
        return false;
      }
      if (fields.username.trim() === "") {
        Alert.alert("Username required");
        return false;
      }
      if (fields.password.trim() === "") {
        Alert.alert("Password required");
        return false;
      }
      if (fields.repassword.trim() === "") {
        Alert.alert("Repeat password");
        return false;
      }
      if (fields.password !== fields.repassword) {
        Alert.alert("Passwords must match");
        return false;
      }
      if (fields.bloodType === "") {
        Alert.alert("Choose blood type");
        return false;
      }
      if (fields.gender === "") {
        Alert.alert("Choose gender");
        return false;
      }
      return true;
    };

    const onSubmit = () => {
      if (validateForm() && checked) {
        signUp(
          fields.email,
          fields.password,
          fields.username,
          fields.fullName,
          fields.bloodType,
          fields.gender,
          fields.birthDate
        );
      }
      console.log("auth", fields);
    };

    const togglePass = (props) => (
      <Icon
        {...props}
        name={visible ? "eye" : "eye-off"}
        onPress={() => setVisible(!visible)}
      />
    );

    const captionIcon = (props) => (
      <Icon {...props} name="alert-circle-outline" />
    );

    const toggleModal = () => {
      setChecked(true);
      setVisibleModal(false);
    };

    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <Field
              label={<Text style={{ color: "#fff" }}>Full name</Text>}
              value={fields.fullName}
              placeholder="John Doe"
              onChangeText={(val) => fieldsChangeHandler("fullName", val)}
              style={styles.bottomSpacing}
            />
            {/* <SelectGroup
              label={<Text style={{ color: "#fff" }}>Blood type</Text>}
              style={styles.bottomSpacing}
              placeholder="Select your blood type"
              options={BLOOD_TYPES}
              onChangeOption={(val) => {
                console.log("option", val);
                fieldsChangeHandler("bloodType", val);
              }}
            />
            <SelectGroup
              label={<Text style={{ color: "#fff" }}>Gender</Text>}
              style={styles.bottomSpacing}
              placeholder="Select your gender"
              options={GENDERS}
              onChangeOption={(val) => fieldsChangeHandler("gender", val)} */}
            {/* /> */}
            <Field
              value={fields.username}
              label={<Text style={{ color: "#fff" }}>Username</Text>}
              placeholder="john_doe"
              onChangeText={(val) => fieldsChangeHandler("username", val)}
              style={styles.bottomSpacing}
              accessoryRight={(props) => (
                <Icon {...props} name="user" pack="feather" />
              )}
            />
            <Field
              value={fields.email}
              label={<Text style={{ color: "#fff" }}>Email</Text>}
              placeholder="johndoe@gmail.com"
              keyboardType="email-address"
              style={styles.bottomSpacing}
              accessoryRight={(props) => <Icon {...props} name="email" />}
              onChangeText={(val) => fieldsChangeHandler("email", val)}
            />
            <Field
              value={fields.password}
              label={<Text style={{ color: "#fff" }}>Password</Text>}
              placeholder="password"
              secureTextEntry={!visible}
              accessoryRight={togglePass}
              caption="should contain at least 6 symbols"
              captionIcon={captionIcon}
              style={styles.bottomSpacing}
              onChangeText={(val) => fieldsChangeHandler("password", val)}
            />
            <Field
              value={fields.repassword}
              label={<Text style={{ color: "#fff" }}>Repeat password</Text>}
              placeholder="confirm password"
              secureTextEntry={!visible}
              accessoryRight={togglePass}
              style={styles.bottomSpacing}
              captionIcon={captionIcon}
              onChangeText={(val) => fieldsChangeHandler("repassword", val)}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={checked}
                onChange={(nextChecked) => setChecked(nextChecked)}
              >
                {
                  <Text style={styles.checkbox}>
                    By creating an account, you agree to our
                  </Text>
                }
              </CheckBox>

              <Link
                title="Terms of Service"
                onPress={() => setVisibleModal(!visibleModal)}
              />
              <ModalWindow
                onBackdropPress={() => setVisibleModal(false)}
                onPress={toggleModal}
                visible={visibleModal}
              />
            </View>
            <CustomBtn
              title="Create Account"
              onPress={onSubmit}
              style={styles.bottomSpacing}
              width={getWidthByPercents(80, 2)}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 30,
    backgroundColor: "rgba(255,57,57, 0.6)",
  },
  image: {
    position: "absolute",
    top: -50,
    zIndex: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  checkbox: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
  },
  bottomSpacing: {
    marginBottom: GLOBAL_STYLES.BOTTOM,
  },
});
