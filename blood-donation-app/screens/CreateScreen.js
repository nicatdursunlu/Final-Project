import React, { useState, Fragment } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input } from "@ui-kitten/components";

import { CustomText, CustomBtn, SelectGroup, Field } from "../components";
import { GLOBAL_STYLES } from "../styles/globalStyles";
import { BLOOD_TYPES } from "../utils/selectOptions";

const useInputState = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  return { value, onChangeText: setValue };
};

export const CreateScreen = () => {
  const multilineInputState = useInputState();
  const [filterBy, setFilterBy] = useState({ bloodType: "" });
  const [value, setValue] = useState();

  const filterHandler = (name, val) => {
    setFilterBy((filter) => ({
      ...filter,
      [name]: val,
    }));
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          <SelectGroup
            placeholder="Select your blood type"
            label="Blood type"
            options={BLOOD_TYPES}
            onChangeOption={(index) => filterHandler("bloodType", index)}
          />
          <TouchableOpacity>
            <View style={styles.options}>
              <CustomText style={styles.optionsText}>Add location</CustomText>
            </View>
          </TouchableOpacity>
          <Field
            label="Add contact number(recommended)"
            keyboardType={"phone-pad"}
            onChangeText={(nextValue) => setValue(nextValue)}
            style={styles.bottomSpacing}
          />
          <Fragment>
            <Input
              multiline={true}
              textStyle={{ minHeight: 110 }}
              placeholder="Tell us more..."
              {...multilineInputState}
            />
          </Fragment>
          <CustomBtn title="Post" style={styles.btn} onPress={() => {}} />
        </View>
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

  options: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
    height: 50,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderBottomWidth: 1,
  },
  optionsText: {
    fontSize: 16,
    padding: 14,
  },
  btn: {
    marginTop: GLOBAL_STYLES.TOP,
  },
});
