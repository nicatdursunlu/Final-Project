import React from "react";

import { Input } from "@ui-kitten/components";

export const Field = ({
  label,
  value,
  placeholder,
  accessoryRight,
  secureTextEntry,
  caption,
  captionIcon,
  onChangeText,
  style,
  keyboardType,
}) => {
  return (
    <Input
      label={label}
      value={value}
      placeholder={placeholder}
      accessoryRight={accessoryRight}
      caption={caption}
      captionIcon={captionIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={{ ...style }}
      keyboardType={keyboardType}
    />
  );
};
