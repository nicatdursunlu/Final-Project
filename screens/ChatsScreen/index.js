import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { connect } from "react-redux";

import { ChatsCover } from "./ChatsCover";
import { CustomText } from "../../components";
import { GLOBAL_STYLES } from "../../styles";
import {
  getAndListenForChatLists,
  selecteChatsLists,
  makeReadMessage,
} from "../../store/chats";

const mapStateToProps = (state) => ({
  lists: selecteChatsLists(state),
});

export const ChatsScreen = connect(mapStateToProps, {
  getAndListenForChatLists,
  makeReadMessage,
})(({ navigation, getAndListenForChatLists, makeReadMessage, lists }) => {
  useEffect(() => {
    getAndListenForChatLists();
  }, []);

  const gotoChat = (id, companion_img, companion_name) => {
    navigation.navigate("SingleChat", { companion_name, companion_img, id });
    makeReadMessage(id);
  };
  const renderItem = ({ item }) => (
    <ChatsCover
      chat={item}
      onPress={() => gotoChat(item.id, item.companion_img, item.companion_name)}
    />
  );
  return (
    <View style={styles.container}>
      <CustomText weight="bold" style={styles.title}>
        Resent Chats
      </CustomText>
      <FlatList
        data={lists}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
      />
    </View>
  );
});

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
