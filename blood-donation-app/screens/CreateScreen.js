import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Input, Icon } from "@ui-kitten/components";

import {
  CustomText,
  CustomBtn,
  Field,
  SelectGroup,
  MapModal,
} from "../components";

import { getWidthByPercents } from "./../utils/getWidthByPercents";
import { BLOOD_TYPES } from "../utils/selectOptions";
import { addPostToList } from "../store/posts";
import { Container } from "./../commons";
import { COLORS } from "../styles";

export const CreateScreen = connect(null, { addPostToList })(
  ({ addPostToList }) => {
    const [fields, setFields] = useState({
      bloodType: "",
      number: "",
      location: "",
      desc: "",
      coordinates: [],
    });
    const [isMapOpen, setIsMapOpen] = useState(false);

    const fieldsChangeHandler = (name, value) => {
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };

    const onSubmit = () => {
      addPostToList(fields);
    };

    return (
      <Container>
        <SelectGroup
          options={BLOOD_TYPES}
          onChangeOption={(val) => fieldsChangeHandler("bloodType", val)}
        />
        <View style={styles.body}>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => setIsMapOpen(true)}
          >
            <View style={styles.options}>
              <CustomText weight="semi">Add location</CustomText>
              <Icon name="chevron-right" pack="feather" style={styles.icon} />
            </View>
          </TouchableOpacity>
          <Field
            label="Add location name, important"
            placeholder="Icharishahar, Baku "
            onChangeText={(val) => fieldsChangeHandler("location", val)}
            style={{ marginBottom: 15 }}
          />
          <Field
            label="Add contact number(recommended)"
            placeholder="example: +994 77 777 77 77"
            keyboardType="phone-pad"
            onChangeText={(val) => fieldsChangeHandler("number", val)}
            style={{ marginBottom: 15 }}
          />
          <Input
            multiline={true}
            textStyle={{ minHeight: 110 }}
            placeholder="Tell us more..."
            onChangeText={(val) => fieldsChangeHandler("desc", val)}
            style={{ marginBottom: 15 }}
          />
          <CustomBtn
            title="Post"
            width={getWidthByPercents(80, 2)}
            onPress={onSubmit}
          />
        </View>
        <MapModal
          visible={isMapOpen}
          close={() => setIsMapOpen(false)}
          onSave={(coordinates) => {
            setFields((field) => ({
              ...field,
              coordinates: [coordinates.latitude, coordinates.longitude],
            }));
            setIsMapOpen(false);
          }}
          initialRegion={{
            latitude: 40.434742,
            longitude: 49.838531,
            latitudeDelta: 0.5522,
            longitudeDelta: 0.5521,
          }}
        />
      </Container>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.MAIN,
  },
  body: {
    zIndex: -1,
    width: "100%",
    alignItems: "center",
  },
  options: {
    width: "100%",
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "rgb(228, 233, 242)",
    backgroundColor: COLORS.SELECT_BG,
  },
  icon: {
    height: 15,
  },
});
