import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ChatsCover } from "./ChatsCover";
import { connect } from "react-redux";
import {
  getAndListenForChatLists,
  selecteChatsLists,
  makeReadMessage,
} from "../../store/chats";
import { COLORS } from "../../styles";

const mapStateToProps = (state) => ({
  lists: selecteChatsLists(state),
});

export const ChatsListScreen = connect(mapStateToProps, {
  getAndListenForChatLists,
  makeReadMessage,
})(({ navigation, getAndListenForChatLists, makeReadMessage, lists }) => {
  useEffect(() => {
    getAndListenForChatLists();
  }, []);

  const gotoChat = (id) => {
    navigation.navigate("SingleChat");
    makeReadMessage(id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ChatsCover chat={item} onPress={() => gotoChat(item.id)} />
        )}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 80,
  },
  list: {},
});
