import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Input, Icon } from "@ui-kitten/components";
import * as Location from "expo-location";

import { CustomText, CustomBtn, SelectGroup, MapModal } from "../components";

import { COLORS } from "../styles";
import { Container } from "./../commons";
import { addPostToList } from "../store/posts";
import { getWidthByPercents } from "./../utils";
import { BLOOD_TYPES } from "../utils/dummy";
import { Field } from "./../components/Field";

export const CreateScreen = connect(null, { addPostToList })(
  ({ addPostToList, navigation }) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [fields, setFields] = useState({
      bloodType: "",
      number: "",
      location: "Add location",
      desc: "",
      coordinates: [],
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

    return (
      <Container>
        <SelectGroup
          options={BLOOD_TYPES}
          onChangeOption={(val) => fieldsChangeHandler("bloodType", val)}
        />
        <View style={styles.body}>
          <Field
            label="Add contact number(recommended)"
            placeholder="example: +994 77 777 77 77"
            keyboardType="phone-pad"
            onChangeText={(val) => fieldsChangeHandler("number", val)}
            style={{ marginBottom: 15 }}
          />
          <TouchableOpacity style={{ width: "100%" }} onPress={openMap}>
            <View style={styles.options}>
              <CustomText weight="semi">{fields.location}</CustomText>
              <Icon name="chevron-right" pack="feather" style={styles.icon} />
            </View>
          </TouchableOpacity>
          <Field
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
        />
        {errorMsg && (
          <CustomText style={styles.errorMsg}>{errorMsg}</CustomText>
        )}
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
