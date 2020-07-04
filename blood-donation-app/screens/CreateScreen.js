import React, { useState, Fragment } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import { CustomText, CustomBtn } from "../components";
import { GLOBAL_STYLES } from "../styles/globalStyles";
import { Icon, Layout, Select, SelectItem } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import PhoneInput from "react-phone-number-input";
// import 'react-phone-number-input/style.css'

const StarIcon = (props) => <Icon {...props} name="star" />;

const useInputState = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  return { value, onChangeText: setValue };
};

export const CreateScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState();

  const multilineInputState = useInputState();

  const [value, setValue] = useState();

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          <Layout style={styles.bloodType} level="1">
            <Select
              label="Choose blood type"
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            >
              <SelectItem
                title="O+"
                // accessoryLeft={StarIcon}
              />
              <SelectItem
                title="O-"
                // accessoryLeft={StarIcon}
              />
              <SelectItem
                title="A+"
                // accessoryLeft={StarIcon}
              />
              <SelectItem
                title="A-"
                // accessoryLeft={StarIcon}
              />
              <SelectItem
                title="B+"
                // accessoryLeft={StarIcon}
              />
              <SelectItem
                title="B-"
                // accessoryLeft={StarIcon}
              />
              <SelectItem
                title="AB+"
                // accessoryLeft={StarIcon}
              />
              <SelectItem
                title="AB-"
                // accessoryLeft={StarIcon}
              />
            </Select>
          </Layout>

          <TouchableOpacity
          // onPress={()=>{}}
          >
            <View style={styles.options}>
              <CustomText style={styles.optionsText}>Add location</CustomText>
            </View>
          </TouchableOpacity>

          <Fragment>
            <Input
              multiline={true}
              textStyle={{ minHeight: 110 }}
              placeholder="Tell us more..."
              {...multilineInputState}
            />
          </Fragment>

          {/* <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/> */}
          {/* <Text>
<PhoneInput
  defaultCountry="RU"
  value={value}
  onChange={setValue}/>
</Text> */}

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
  bloodType: {
    minHeight: 65,
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
