import { IMAGES } from "./../styles/images";

export const BLOOD_TYPES = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
export const GENDERS = ["Male", "Female", "None"];
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

export const ITEMS = [
  {
    title: "Saved",
    name: "bookmark",
    goTo: "Saved",
  },
  {
    title: "Settings",
    name: "settings",
    goTo: "Settings",
  },
  {
    title: "About",
    name: "info",
    goTo: "About",
  },
  {
    title: "Contact",
    name: "help-circle",
    goTo: "Contact",
  },
  {
    title: "Rate The App",
    name: "star",
    goTo: "Rate",
  },
];
