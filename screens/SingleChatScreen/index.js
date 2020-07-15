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
      getAndListenForSingleChat(route?.params.id);
    }, []);
    return (
      <View style={styles.body}>
        <ChatHeader route={route} navigation={navigation} />
        <ChatMessages messages={messages} userID={userID} />
        <ChatForm
          sendMessage={sendMessage}
          id={route?.params.id}
          userID={userID}
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
