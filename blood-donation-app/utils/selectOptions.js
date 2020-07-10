import { IMAGES } from "./../styles/images";

export const BLOOD_TYPES = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
export const GENDERS = ["Male", "Female", "None"];
export const FILTERS = ["all", "people", "posts", "blood centers"];
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

export const MESSAGES = [
  {
    chatID: "1",
    text:
      "No problem Dustin, I send you the documents when I arrived at my office! ",
    author: "Sophie Lenor",
    time: "20:00",
  },
  {
    chatID: "2",
    text:
      "I have received your documents. Maybe we can try another color for the homepage, Iâ€™m already working on a proposal",
    author: "Dean Hutson",
    time: "20:01",
  },
  {
    chatID: "3",
    text: "Nice! Sorry for the spelling mistakes, the text was pretty old",
    author: "Sophie Lenor",
    time: "20:03",
  },
  {
    chatID: "4",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author: "Dean Hutson",
    time: "20:05",
  },
];

export const POSTS = [
  {
    id: "1",
    userAvatar:
      "https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    location: "Baku, Absheron Rayon",
    time: Date.now() - 12345456,
    bloodType: "A+",
    name: "Juri Json",
    desc: "Qana ehtiyacim var xais edirem komek edin",
    requestType: "request",
  },
  {
    id: "2",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    location: "Baku, Iceri seher, 24 a",
    time: Date.now() - 1223344,
    bloodType: "A-",
    name: "Michel Ancela",
    desc:
      "Qana ehtiyacim var xais edirem komek edin, komeye cox ehtiyacim var nezere alin",
    requestType: "pending",
  },
  {
    id: "3",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    location: "Baku, Iceri seher, 24 a",
    time: Date.now() - 1223344,
    bloodType: "A-",
    name: "Something /Nothing",
    desc:
      "Qana ehtiyacim var xais edirem komek edin, komeye cox ehtiyacim var nezere alin ozumde kasibam ehtiyaicm var",
    requestType: "request",
  },
];

export const SIGNUP_INITIAL_STATE = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  repassword: "",
};
