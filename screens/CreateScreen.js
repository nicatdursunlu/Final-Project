import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as Location from "expo-location";
import { Icon } from "@ui-kitten/components";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { Container } from "./../commons";
import { BLOOD_TYPES } from "../utils/dummy";
import { addPostToList } from "../store/posts";
import { getWidthByPercents } from "./../utils";
import {
  Field,
  MapModal,
  CustomBtn,
  CustomText,
  SelectGroup,
} from "../components";

export const CreateScreen = connect(null, { addPostToList })(
  ({ addPostToList, navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [fields, setFields] = useState({
      desc: "",
      number: "",
      bloodType: "",
      coordinates: [],
      location: "Add location",
    });

    const [isMapOpen, setIsMapOpen] = useState(false);
    //GETTING PERMISSION FOR LOCATION
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
          enableHighAccuracy: true,
        });
        setLocation(location);
      })();
    }, []);
    //SETTIN FIELDS ACCORDING TO NAME
    const fieldsChangeHandler = (name, value) => {
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };
    //OPENING MAP IN ORDER TO WE GET LOCATION OR NOT
    const openMap = () => {
      if (!!location?.coords?.latitude) {
        setIsMapOpen(true);
      }
    };
    //ADDIN POST TO DATABASE
    const onSubmit = () => {
      addPostToList(fields);
      navigation.navigate("Home");
    };

    //GETTIN LOCATION NAME BY COORDINATES AND SET LOCATION
    const getLocationName = async ({ latitude, longitude }) => {
      const answer = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (!!answer.length) {
        const locObj = answer[0];
        const location = [];
        for (let key in locObj) {
          if (locObj[key] !== null && locObj[key] !== "Unnamed Road") {
            location.push(locObj[key]);
          }
        }

        setFields((field) => ({
          ...field,
          location: location.join(),
        }));
      }
    };
    const { colors } = useTheme();
    const OPTIONS_COLOR = {
      backgroundColor: colors.inputBG,
      borderColor: colors.inputBorder,
    };
    return (
      <Container>
        <SelectGroup
          style={styles.field}
          options={BLOOD_TYPES}
          initial="Select blood type"
          onChangeOption={(val) => fieldsChangeHandler("bloodType", val)}
        />
        <View style={styles.body}>
          <Field
            value={fields.number}
            keyboardType="phone-pad"
            label="Add contact number(recommended)"
            placeholder="example: +994 77 777 77 77"
            onChangeText={(val) => fieldsChangeHandler("number", val)}
          />
          <TouchableOpacity style={{ width: "100%" }} onPress={openMap}>
            <View style={[styles.options, OPTIONS_COLOR]}>
              <CustomText weight="semi" style={{ color: colors.inputText }}>
                {fields.location}
              </CustomText>
              <Icon
                name="chevron-right"
                pack="feather"
                style={{ height: 15, color: colors.inputText }}
              />
            </View>
          </TouchableOpacity>
          <Field
            multiline={true}
            textStyle={{ minHeight: 110 }}
            placeholder="Tell us more..."
            onChangeText={(val) => fieldsChangeHandler("desc", val)}
          />
          <CustomBtn
            title="Post"
            onPress={onSubmit}
            width={getWidthByPercents(80, 2)}
          />
        </View>
        <MapModal
          visible={isMapOpen}
          onSave={(coordinates) => {
            getLocationName(coordinates);
            setFields((field) => ({
              ...field,
              coordinates: [coordinates.latitude, coordinates.longitude],
            }));
            setIsMapOpen(false);
          }}
          initialRegion={{
            latitude: location?.coords?.latitude,
            longitude: location?.coords?.longitude,
            latitudeDelta: 0.1522,
            longitudeDelta: 0.1521,
          }}
          close={() => setIsMapOpen(false)}
        />
        {errorMsg && <CustomText>{errorMsg}</CustomText>}
      </Container>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    zIndex: -1,
    width: "100%",
    alignItems: "center",
  },
  field: {
    marginBottom: 15,
  },
  options: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    paddingVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
});
