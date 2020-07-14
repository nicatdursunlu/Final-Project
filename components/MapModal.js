import React, { useState } from "react";
import { StyleSheet, Modal, TouchableOpacity, Alert } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import MapView, { Marker } from "react-native-maps";
import { StatusBar } from "expo-status-bar";

import { COLORS } from "./../styles/colors";

export const MapModal = ({ onSave, close, visible, initialRegion, type }) => {
  const isStatic = type === "static";
  const [markerCoordinates, setMarkerCoordinates] = useState(
    isStatic ? { ...initialRegion } : null
  );

  const saveHandler = () => {
    if (markerCoordinates) {
      onSave(markerCoordinates);
    } else {
      Alert.alert("Choose location", "For save you need set location first");
    }
  };

  const startCoordinates = {
    ...initialRegion,
    latitude: initialRegion.latitude || 50.446584,
    longitude: initialRegion.longitude || 30.521744,
  };
  return (
    <Modal visible={visible} animationType="slide">
      <StatusBar hidden={true} />
      <MapView
        style={styles.map}
        initialRegion={{
          ...startCoordinates,
        }}
        onPress={(e) => {
          isStatic
            ? setMarkerCoordinates(initialRegion)
            : setMarkerCoordinates(e.nativeEvent.coordinate);
        }}
      >
        {markerCoordinates && <Marker coordinate={markerCoordinates} />}
      </MapView>

      <TouchableOpacity style={[styles.btn, styles.btnBack]} onPress={close}>
        <Ionicons name="md-arrow-back" size={24} color={COLORS.TEXT} />
      </TouchableOpacity>
      {onSave && (
        <TouchableOpacity
          style={[styles.btn, styles.btnSave]}
          onPress={saveHandler}
        >
          <Ionicons name="ios-save" size={24} color={COLORS.TEXT} />
        </TouchableOpacity>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  btn: {
    position: "absolute",

    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    top: 15,
  },
  btnBack: {
    left: 15,
  },
  btnSave: {
    right: 15,
  },
});
