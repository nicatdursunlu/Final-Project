import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Icon } from "@ui-kitten/components";

import { CustomBtn, Field } from "./../components";
import { GLOBAL_STYLES, IconCollection } from "./../styles";

export const AccountSettingsScreen = () => {
  const fieldsInitialState = {
    username: "",
    password: "",
    newPassword: "",
  };
  const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

  const [visible, setVisible] = useState(true);
  const [fields, setFields] = useState(fieldsInitialState);

  const toggleVisibility = () => setVisible(!visible);

  const fieldsChangeHandler = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.body}>
        <Field
          label="Username"
          fullName={fields.username}
          placeholder="mary_j"
          onChangeText={(val) => fieldsChangeHandler("username", val)}
          style={styles.bottomSpacing}
        />
        <Field
          value={fields.password}
          label="Current password"
          placeholder="password"
          secureTextEntry={visible}
          accessoryRight={(props) => (
            <IconCollection
              name={visible ? "eye" : "eye-off"}
              props={props}
              onPress={toggleVisibility}
            />
          )}
          onChangeText={(val) => fieldsChangeHandler("password", val)}
          style={styles.bottomSpacing}
        />

        <Field
          value={fields.newPassword}
          label="New password"
          placeholder="password"
          secureTextEntry={visible}
          caption="Should contain at least 8 symbols"
          captionIcon={AlertIcon}
          accessoryRight={(props) => (
            <IconCollection
              name={visible ? "eye" : "eye-off"}
              props={props}
              onPress={toggleVisibility}
            />
          )}
          onChangeText={(val) => fieldsChangeHandler("newPassword", val)}
          style={styles.bottomSpacing}
        />

        <CustomBtn title="Save Changes" style={styles.btn} onPress={() => {}} />
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    paddingHorizontal: GLOBAL_STYLES.HORIZONTAL,
    marginTop: GLOBAL_STYLES.TOP,
  },
  bottomSpacing: {
    marginBottom: GLOBAL_STYLES.BOTTOM,
    // marginTop: GLOBAL_STYLES.TOP,
  },
  btn: {
    marginTop: GLOBAL_STYLES.TOP,
  },
});
