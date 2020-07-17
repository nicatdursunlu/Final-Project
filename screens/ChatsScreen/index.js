import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ChatsCover } from "./ChatsCover";
import { connect } from "react-redux";
import {
  getAndListenForChatLists,
  selecteChatsLists,
  makeReadMessage,
  initChatList,
} from "../../store/chats";
import { CustomText } from "../../components";
import { GLOBAL_STYLES } from "../../styles";

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
      initChatList();
      getAndListenForChatLists();
      console.log("list", lists);
    }, []);

    const gotoChat = (id, companion_img, companion_name) => {
      navigation.navigate("SingleChat", {
        companion_name,
        companion_img,
        chatID: id,
      });
      makeReadMessage(id);
    };

    return (
      <View style={styles.container}>
        <CustomText weight="bold" style={styles.title}>
          Resent Chats
        </CustomText>
        <FlatList
          data={lists}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ChatsCover
              chat={item}
              onPress={() =>
                gotoChat(item.id, item.companion_img, item.companion_name)
              }
            />
          )}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    marginLeft: GLOBAL_STYLES.HORIZONTAL,
    marginVertical: 10,
    color: "#859bde",
    fontSize: 13,
  },
});
