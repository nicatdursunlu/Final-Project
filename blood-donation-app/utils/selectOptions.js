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

export const CHATS = [
  {
    id: "1",
    userAvatar:
      "https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Juri Json",
    lastMessage: "Thank you for help",
  },
  {
    id: "2",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Dean Hutson",
    lastMessage: "No worries, he will be available",
  },
  {
    id: "3",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Sphie Lenor",
    lastMessage:
      "We are waiting for you We are waiting for you We are waiting for you",
  },
  {
    id: "4",
    userAvatar:
      "https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Chelsea Kim",
    lastMessage: "Thank you for help",
  },
];

export const SIGNUP_INITIAL_STATE = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  repassword: "",
};

export const MESSAGES = [
  {
    _id: 1,
    text: "Hello Darvin",
    createdAt: new Date(),
    user: {
      _id: 3,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 2,
    text: "I was informed",
    createdAt: new Date(),
    user: {
      _id: 3,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 3,
    text: "Thanks",
    createdAt: new Date(),
    user: {
      _id: 3,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
];
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
