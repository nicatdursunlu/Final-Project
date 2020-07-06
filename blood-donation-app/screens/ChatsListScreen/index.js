import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ChatsCover } from "./ChatsCover";
import { CHATS } from "./../../utils/selectOptions";

export const ChatsListScreen = ({ navigation }) => {
  const moveToSingleChat = ({ item }) => {
    navigation.navigate("SingleChat", { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CHATS}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ChatsCover onPress={() => moveToSingleChat({ item })} chat={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {},
});
