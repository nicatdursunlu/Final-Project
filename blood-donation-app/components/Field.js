import React from "react";

import { Input } from "@ui-kitten/components";

export const Field = ({
  label,
  fullName,
  placeholder,
  accessoryRight,
  secureTextEntry,
  caption,
  captionIcon,
  onChangeText,
  style,
}) => {
  return (
    <Input
      label={label}
      value={fullName}
      placeholder={placeholder}
      accessoryRight={accessoryRight}
      caption={caption}
      captionIcon={captionIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      style={{ ...style }}
    />
  );
};
