import { selectUserID } from "./auth";
import * as firebase from "firebase";
import "firebase/firestore";

const SET_CHATS_LISTS = "SET_CHATS_LISTS";

export const MODULE_NAME = "chats";
export const selecteChatsLists = (state) => state[MODULE_NAME].chats;

const initialState = {
  chats: [],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CHATS_LISTS:
      return {
        ...state,
        chats: payload,
      };

    default:
      return state;
  }
}

export const setChatsLists = (payload) => ({
  type: SET_CHATS_LISTS,
  payload,
});

export const getAndListenForChatLists = () => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());

    await firebase
      .firestore()
      .collection("users_chats_lists")
      .doc(userID)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const lists = doc.data();
          const unionIDs = Object.keys(lists);
          const chatListsArr = [];
          unionIDs.forEach((id) => {
            chatListsArr.push({ id, ...lists[id] });
          });

          const sortedChatListsArr = chatListsArr.sort((a, b) => {
            return b.time - a.time;
          });
          dispatch(setChatsLists(sortedChatListsArr));
        }
      });
  } catch (error) {
    console.log("getAndListenForChatLists error =>", error);
  }
};

export const makeReadMessage = (id) => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());
    const lists = selecteChatsLists(getState());
    const selectedChat = lists.find((list) => list.id === id);
    delete selectedChat[id];
    await firebase
      .firestore()
      .collection("users_chats_lists")
      .doc(userID)
      .set(
        {
          [id]: { ...selectedChat, readed: true },
        },
        { merge: true }
      );
  } catch (error) {
    console.log("makeReadMessage error =>", error);
  }
};
