import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Modal, Button } from "@ui-kitten/components";

import { CustomText } from "../../components";
import { getWidthByPercents } from "../../utils/getWidthByPercents";

const { height } = Dimensions.get("screen");

export const ModalWindow = ({ visible, onBackdropPress, onPress }) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={onBackdropPress}
    >
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <CustomText style={styles.text}>
            These Terms and Conditions constitute a legally binding agreement
            made between you, whether personally or on behalf of an entity
            (“you”) and [your business name] (“we,” “us” or “our”), concerning
            your access to and use of our mobile application (the
            “Application”). You agree that by accessing the Application, you
            have read, understood, and agree to be bound by all of these Terms
            and Conditions Use. These Terms and Conditions constitute a legally
            binding agreement made between you, whether personally or on behalf
            of an entity (“you”) and [your business name] (“we,” “us” or “our”),
            concerning your access to and use of our mobile application (the
            “Application”). You agree that by accessing the Application, you
            have read, understood, and agree to be bound by all of these Terms
            and Conditions Use. These Terms and Conditions constitute a legally
            binding agreement made between you, whether personally or on behalf
            of an entity (“you”) and [your business name] (“we,” “us” or “our”),
            concerning your access to and use of our mobile application (the
            “Application”). You agree that by accessing the Application, you
            have read, understood, and agree to be bound by all of these Terms
            and Conditions Use.
          </CustomText>
          <Button style={styles.button} onPress={onPress}>
            Accept
          </Button>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: getWidthByPercents(95, 2),
    height: height * 0.7,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    padding: 30,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    paddingBottom: 50,
  },
  button: {
    backgroundColor: "red",
    width: 170,
    borderRadius: 12,
  },
});
