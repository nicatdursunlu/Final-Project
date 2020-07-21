import React from "react";
import { IMAGES } from "../styles/images";
import { Icon } from "@ui-kitten/components";

export const BLOOD_TYPES = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
export const LANGUAGES = ["English", "Azerbaijani", "Russian"];
export const TITLES = [
  { title: "Search on map" },
  { title: "To whom can i donate" },
];

export const SLIDER_IMAGES = [
  { key: "1", uri: IMAGES.slider1 },
  { key: "2", uri: IMAGES.slider2 },
  { key: "3", uri: IMAGES.slider3 },
  { key: "4", uri: IMAGES.slider4 },
];

export const SIGNUP_INITIAL_STATE = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  repassword: "",
};

export const AUTH_DATA = [
  {
    label: "Full name",
    value: "fullName",
    placeholder: "John Doe",
    name: "fullName",
  },
  {
    label: "Username",
    value: "username",
    placeholder: "john_doe",
    name: "username",
    accessoryRight: (props) => <Icon {...props} name="user" pack="feather" />,
  },
  {
    label: "Email",
    value: "email",
    placeholder: "johndoe@gmail.com",
    name: "email",
    accessoryRight: (props) => <Icon {...props} name="mail" pack="feather" />,
    keyboardType: "email-address",
  },
  {
    label: "Password",
    value: "password",
    placeholder: "password",
    name: "password",
    caption: "should contain at least 6 symbols",
    captionIcon: (props) => (
      <Icon {...props} name="alert-circle" pack="feather" />
    ),
  },
  {
    label: "Repeat password",
    value: "repassword",
    placeholder: "confirm password",
    name: "repassword",
    caption: "should contain at least 6 symbols",
    captionIcon: (props) => (
      <Icon {...props} name="alert-circle" pack="feather" />
    ),
  },
];

export const ITEMS = [
  {
    title: "Saved",
    icon: () => (
      <Icon
        name="bookmark"
        pack="feather"
        style={{ color: "#999999", height: 23 }}
      />
    ),
    goTo: "Saved",
  },
  {
    title: "Settings",
    icon: () => (
      <Icon
        name="settings"
        pack="feather"
        style={{ color: "#999999", height: 23 }}
      />
    ),
    goTo: "Settings",
  },
  {
    title: "About",
    icon: () => (
      <Icon
        name="info"
        pack="feather"
        style={{ color: "#999999", height: 23 }}
      />
    ),
    goTo: "About",
  },
  {
    title: "Rate Us",
    icon: () => (
      <Icon
        name="star"
        pack="feather"
        style={{ color: "#999999", height: 23 }}
      />
    ),
    goTo: "Rate",
  },
];
