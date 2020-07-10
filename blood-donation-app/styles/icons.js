import React from "react";
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
import saved from "./../assets/icons/saved.png";

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
  saved,
};

export const editIcon = (props) => <Icon {...props} name={name} pack={pack} />;
export const chatIcon = (props) => <Icon {...props} name={name} pack={pack} />;
export const saveIcon = (props) => <Icon {...props} name={name} pack={pack} />;
export const callIcon = (props) => <Icon {...props} name={name} pack={pack} />;
export const savedIcon = (props) => <Icon {...props} name={name} pack={pack} />;
export const phoneIcon = (props) => <Icon {...props} name={name} pack={pack} />;
export const donateIcon = (props) => (
  <Icon {...props} name={name} pack={pack} />
);
export const pendingIcon = (props) => (
  <Icon {...props} name={name} pack={pack} />
);
export const locationIcon = (props) => (
  <Icon {...props} name={name} pack={pack} />
);
export const downIcon = (props) => (
  <Icon {...props} name="chevron-down" pack="feather" />
);
export const menuIcon = (props) => (
  <Icon {...props} name="menu" pack="feather" />
);
export const mailIcon = (props) => (
  <Icon {...props} name="mail" pack="feather" />
);
export const eyeIcon = (props) => <Icon {...props} name="eye" />;
export const eyeoffIcon = (props) => <Icon {...props} name="eye-off" />;

export const bellIcon = (props) => (
  <Icon {...props} name="bell" pack="feather" />
);
export const leftIcon = (props) => (
  <Icon {...props} name="arrow-left" pack="feather" />
);
export const rightIcon = (props) => (
  <Icon {...props} name="arrow-right" pack="feather" />
);
export const userIcon = (props) => (
  <Icon {...props} name="user" pack="feather" />
);
export const captionIcon = (props) => (
  <Icon {...props} name="alert-circle-outline" />
);
