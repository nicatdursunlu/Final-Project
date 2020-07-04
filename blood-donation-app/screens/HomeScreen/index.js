import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { CardCover } from "./CardCover";

const DUMMY = [
  {
    id: "1",
    userAvatar:
      "https://images.unsplash.com/photo-1504911539020-cfb0f7887a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    location: "Baku, Absheron Rayon",
    time: Date.now() - 12345456,
    bloodType: "A+",
    name: "Juri Json",
    desc: "Qana ehtiyacim var xais edirem komek edin",
    requestType: "request",
  },
  {
    id: "2",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    location: "Baku, Iceri seher, 24 a",
    time: Date.now() - 1223344,
    bloodType: "A-",
    name: "Michel Ancela",
    desc:
      "Qana ehtiyacim var xais edirem komek edin, komeye cox ehtiyacim var nezere alin",
    requestType: "pending",
  },
  {
    id: "3",
    userAvatar:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    location: "Baku, Iceri seher, 24 a",
    time: Date.now() - 1223344,
    bloodType: "A-",
    name: "Something Nothing",
    desc:
      "Qana ehtiyacim var xais edirem komek edin, komeye cox ehtiyacim var nezere alin ozumde kasibam ehtiyaicm var",
    requestType: "request",
  },
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={DUMMY}
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
