import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ChatsCover } from "./ChatsCover";

const DUMMY = [
  {
    id: "1",
    userAvatar:
      "https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Juri Json",
    lastMessage: "Thank you for help",
  },
  {
    id: "2",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Dean Hutson",
    lastMessage: "No worries, he will be available",
  },
  {
    id: "3",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Sphie Lenor",
    lastMessage:
      "We are waiting for you We are waiting for you We are waiting for you",
  },
  {
    id: "4",
    userAvatar:
      "https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "Chelsea Kim",
    lastMessage: "Thank you for help",
  },
];

export const ChatsListScreen = ({ navigation }) => {
  const moveToSingleChat = ({ item }) => {
    navigation.navigate("SingleChat", { item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY}
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
