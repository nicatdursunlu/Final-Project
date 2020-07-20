import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";
import { useTheme } from "@react-navigation/native";

export const Field = ({
  label,
  value,
  style,
  caption,
  textStyle,
  captionIcon,
  placeholder,
  onChangeText,
  keyboardType,
  accessoryRight,
  secureTextEntry,
}) => (
  <Input
    label={label}
    value={value}
    caption={caption}
    placeholder={placeholder}
    captionIcon={captionIcon}
    keyboardType={keyboardType}
    onChangeText={onChangeText}
    accessoryRight={accessoryRight}
    style={[styles().input, style]}
    secureTextEntry={secureTextEntry}
    textStyle={[styles().text, textStyle]}
  />
);

const styles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    input: {
      marginBottom: 15,
      borderColor: colors.inputBorder,
      backgroundColor: colors.inputBG,
    },
    text: {
      color: colors.inputText,
    },
  });
};
