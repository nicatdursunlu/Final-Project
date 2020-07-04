import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Icon } from "@ui-kitten/components";

import bloodDonation from "./../assets/icons/blood-donation.png";
import mark from "./../assets/icons/mark.png";
import tag from "./../assets/icons/tag.png";
import phone from "./../assets/icons/phone.png";
import comment from "./../assets/icons/comment.png";
import bookmark from "./../assets/icons/bookmark.png";
import back from "./../assets/icons/back.png";
import right from "./../assets/icons/right.png";
import menu from "./../assets/icons/menu.png";
import send from "./../assets/icons/send.png";
import call from "./../assets/icons/call.png";
import edit from "./../assets/icons/edit.png";
import request from "./../assets/icons/request.png";
import pending from "./../assets/icons/pending.png";
import location from "./../assets/icons/location.png";

export const ICONS = {
  bloodDonation,
  mark,
  tag,
  phone,
  comment,
  bookmark,
  back,
  right,
  menu,
  send,
  call,
  edit,
  request,
  pending,
  location,
};

export const IconCollection = ({ props, name, onPress, pack }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon {...props} name={name} pack={pack} />
    </TouchableWithoutFeedback>
  );
};
