import React, { useState } from "react";
import { Select, SelectItem } from "@ui-kitten/components";

export const SelectGroup = ({
  onChangeOption,
  options,
  label,
  placeholder,
  style = {},
}) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const selectHandler = (index) => {
    setSelectedIndex(index);
    onChangeOption(options[selectedIndex]);
  };
  return (
    <Select
      label={label}
      placeholder={placeholder}
      value={options[selectedIndex - 1]}
      selectedIndex={selectedIndex}
      onSelect={selectHandler}
      style={style}
    >
      {options.map((option) => (
        <SelectItem key={option} title={option} />
      ))}
    </Select>
  );
};
