import React, { useState } from "react";

export const fieldsChangeHandler = (fieldsInitialState, name, value) => {
  const [fields, setFields] = useState(fieldsInitialState);

  setFields((fields) => ({
    ...fields,
    [name]: value,
  }));
};
