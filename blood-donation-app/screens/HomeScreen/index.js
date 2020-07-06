import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { CardCover } from "./CardCover";
import { POSTS } from "./../../utils/selectOptions";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={POSTS}
        renderItem={({ item }) => <CardCover item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    backgroundColor: "white",
    padding: 15,
  },
});
