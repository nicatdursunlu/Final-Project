import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";

import { ChatsCover } from "./ChatsCover";
import { connect } from "react-redux";
import { CustomText } from "../../components";
import {
  getAndListenForChatLists,
  selecteChatsLists,
  makeReadMessage,
  initChatList,
} from "../../store/chats";

const mapStateToProps = (state) => ({
  lists: selecteChatsLists(state),
});

export const ChatsScreen = connect(mapStateToProps, {
  getAndListenForChatLists,
  makeReadMessage,
  initChatList,
})(
  ({
    navigation,
    getAndListenForChatLists,
    makeReadMessage,
    initChatList,
    lists,
  }) => {
    useEffect(() => {
      getAndListenForChatLists();
      return initChatList;
    }, []);
    const gotoChat = ({ id, companion_img, companion_name }) => {
      navigation.navigate("SingleChat", {
        companion_name,
        companion_img,
        chatID: id,
      });
      makeReadMessage(id);
    };
    const renderItem = ({ item }) => (
      <ChatsCover chat={item} onPress={() => gotoChat(item)} />
    );
    const { colors } = useTheme();
    return (
      <View style={styles.container}>
        <CustomText style={{ ...styles.title, ...{ color: colors.link } }}>
          Recent Chats
        </CustomText>
        <FlatList
          data={lists}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    marginVertical: 10,
    fontSize: 14,
  },
});
