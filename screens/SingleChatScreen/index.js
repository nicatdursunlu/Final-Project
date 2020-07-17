import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { connect } from "react-redux";
import {
  setMessage,
  getAndListenForSingleChat,
  selecteSingleChat,
  sendMessage,
  initSingleChat,
} from "../../store/chats";

import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatForm } from "./ChatForm";
import { selectUserID } from "../../store/auth";

const mapStateToProps = (state) => ({
  messages: selecteSingleChat(state),
  userID: selectUserID(state),
});

export const SingleChatScreen = connect(mapStateToProps, {
  setMessage,
  getAndListenForSingleChat,
  sendMessage,
  initSingleChat,
})(
  ({
    route,
    navigation,
    setMessage,
    initSingleChat,
    getAndListenForSingleChat,
    messages,
    userID,
    sendMessage,
  }) => {
    useEffect(() => {
      initSingleChat();
      getAndListenForSingleChat(route?.params.chatID);
    }, []);

    const [messageObj, setMessageObj] = useState({
      chatID: route?.params.chatID,
      text: "",
      time: Date.now(),
      companion_name: route?.params.companion_name,
      companion_img: route?.params.companion_img,
      author_id: userID,
    });

    const setMessageText = (val) => {
      setMessageObj((messageObj) => ({
        ...messageObj,
        text: val,
      }));
    };

    const sendMessageHandler = () => {
      sendMessage(messageObj);
      setMessageObj((messageObj) => ({
        ...messageObj,
        text: "",
      }));
    };
    return (
      <View style={styles.body}>
        <ChatHeader route={route} navigation={navigation} />
        <ChatMessages messages={messages} userID={userID} />
        <ChatForm
          onPress={sendMessageHandler}
          value={messageObj.text}
          textChange={(val) => setMessageText(val)}
        />
      </View>
    );
  }
);
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
  },
});
