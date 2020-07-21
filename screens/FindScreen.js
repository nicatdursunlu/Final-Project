import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

import { Container } from "./../commons";
import { BLOOD_TYPES } from "./../utils/dummy";
import { selectUserID } from "./../store/auth";
import { CardCover } from "./HomeScreen/CardCover";
import { selectPostLists } from "./../store/posts";
import { SelectGroup, Field } from "./../components";
import { getSearchLocationList, getSearchBloodList } from "./../utils";

const mapStateToProps = (state) => ({
  posts: selectPostLists(state),
  userID: selectUserID(state),
});

export const FindScreen = connect(mapStateToProps)(
  ({ posts, navigation, userID }) => {
    const [status, setStatus] = useState("list");
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");
    const [bloodType, setBloodType] = useState();

    return (
      <Container>
        <Field
          value={search}
          placeholder="Search by location"
          accessoryRight={() => (
            <Icon
              name="md-search"
              pack="ion"
              style={styles.icon}
              onPress={() => {
                setList(getSearchLocationList(posts, search));
                setStatus(true);
              }}
            />
          )}
          onChangeText={(val) => setSearch(val)}
        />
        <SelectGroup
          options={BLOOD_TYPES}
          initial="Find People by blood type"
          onChangeOption={(val) => {
            setBloodType(val);
            setList(getSearchBloodList(posts, val));
            setStatus("blood");
          }}
        />
        {status !== "list" && (
          <View style={styles.list}>
            {list.map((item) => (
              <CardCover
                key={item.id.toString()}
                item={item}
                navigation={navigation}
                userID={userID}
              />
            ))}
          </View>
        )}
      </Container>
    );
  }
);

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    marginBottom: 100,
  },
  icon: {
    height: 20,
    color: "#999999",
    marginRight: 8,
  },
});
