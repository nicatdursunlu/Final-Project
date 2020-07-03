import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Icon } from "@ui-kitten/components";

import back from "../assets/icons/back.png";
import home from "../assets/icons/home.png";
import homeFocused from "../assets/icons/home_focused.png";
import find from "../assets/icons/find.png";
import findFocused from "../assets/icons/find_focused.png";
import user from "../assets/icons/user.png";
import userFocused from "../assets/icons/user_focused.png";
import chat from "../assets/icons/chat.png";
import chatFocused from "../assets/icons/chat_focused.png";
import plus from "../assets/icons/plus.png";

import star from "../assets/icons/star.png";
import settings from "../assets/icons/settings.png";
import logOut from "../assets/icons/log_out.png";
import save from "../assets/icons/save.png";
import about from "../assets/icons/about.png";
import contactUs from "../assets/icons/contact_us.png";
import posts from "../assets/icons/posts.png";
import profile from "../assets/icons/profile.png";

import bloodDonation from "../assets/icons/blood-donation.png";
import mark from "../assets/icons/mark.png";
import tag from "../assets/icons/tag.png";
import phone from "../assets/icons/phone.png";
import comment from "../assets/icons/comment.png";
import bookmark from "../assets/icons/bookmark.png";

import right from "../assets/icons/right.png";
import menu from "../assets/icons/menu.png";
import send from "../assets/icons/send.png";
import call from "../assets/icons/call.png";
import edit from "../assets/icons/edit.png";

import request from "../assets/icons/request.png";
import pending from "../assets/icons/pending.png";

import location from "../assets/icons/location.png";
import mail from "../assets/icons/mail.png";

export const ICONS = {
  back,
  home,
  homeFocused,
  find,
  findFocused,
  user,
  userFocused,
  chat,
  chatFocused,
  plus,

  star,
  settings,
  posts,
  logOut,
  save,
  about,
  contactUs,
  profile,

  bloodDonation,
  mark,
  tag,
  phone,
  comment,
  bookmark,

  right,
  menu,
  send,
  call,
  edit,

  request,
  pending,

  location,
  mail,
};

export const IconCollection = ({ props, name, onPress, pack }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Icon {...{ name, pack }} {...props} />
  </TouchableWithoutFeedback>
);
