import { selectUserID } from "./auth";
import * as firebase from "firebase";
import "firebase/firestore";

const SET_CHATS_LISTS = "SET_CHATS_LISTS";
const SET_SINGLE_CHAT = "SET_SINGLE_CHAT";
const INIT_SINGLE_CHAT = "INIT_SINGLE_CHAT";

export const MODULE_NAME = "chats";
export const selecteChatsLists = (state) => state[MODULE_NAME].chats;
export const selecteSingleChat = (state) => state[MODULE_NAME].singleChat;

const initialState = {
  chats: [],
  singleChat: [],
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CHATS_LISTS:
      return {
        ...state,
        chats: payload,
      };
    case SET_SINGLE_CHAT:
      return {
        ...state,
        singleChat: payload,
      };

    case INIT_SINGLE_CHAT:
      return {
        ...state,
        singleChat: [],
      };
    default:
      return state;
  }
}

export const setChatsLists = (payload) => ({
  type: SET_CHATS_LISTS,
  payload,
});
export const setSingleChat = (payload) => ({
  type: SET_SINGLE_CHAT,
  payload,
});
export const initSingleChat = () => ({
  type: INIT_SINGLE_CHAT,
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

export const setMessage = () => async (dispatch) => {
  try {
    firebase
      .firestore()
      .collection("messages")
      .doc("yCfsEKPhXYNtcXs5rdAPjZ9Kp2G2_KLwjxxOrXmN8qdOedfYjVLUQWdT2")
      .set({
        messages: [
          {
            author_id: "yCfsEKPhXYNtcXs5rdAPjZ9Kp2G2",
            text: "salam necesen?",
            time: 1594588984928,
          },
          {
            author_id: "KLwjxxOrXmN8qdOedfYjVLUQWdT2",
            text: "sukur sen necesen?",
            time: 1594593181379,
          },
          {
            author_id: "yCfsEKPhXYNtcXs5rdAPjZ9Kp2G2",
            text: "mende yaxsiyam yaxsi olasan coxdandi gorunmursen?",
            time: 1594593222797,
          },
        ],
      });
  } catch (error) {
    console.log("setMessage error", error);
  }
};

export const getAndListenForSingleChat = (id) => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());

    await firebase
      .firestore()
      .collection("messages")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const data = doc.data();
          const sortedMessages = data.messages.sort((a, b) => {
            return b.time - a.time;
          });

          dispatch(setSingleChat(sortedMessages));
        }
      });
  } catch (error) {
    console.log("getAndListenForSingleChat error => ", error);
  }
};

export const sendMessage = (id, message) => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());
    const companion_id = id.split("_").find((id) => id !== userID);

    await firebase
      .firestore()
      .collection("messages")
      .doc(id)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion(message),
      });

    const lists = selecteChatsLists(getState());
    const selectedChat = lists.find((list) => list.id === id);
    delete selectedChat[id];

    await firebase
      .firestore()
      .collection("users_chats_lists")
      .doc(userID)
      .set(
        {
          [id]: {
            ...selectedChat,
            last_msg: message.text,
            time: Date.now(),
          },
        },
        { merge: true }
      );
  } catch (error) {
    console.log("sendMessage error => ", error);
  }
};
//////
// import { selectUserID } from "./auth";
// import * as firebase from "firebase";
// import "firebase/firestore";

// const SET_CHATS_LISTS = "SET_CHATS_LISTS";
// const SET_SINGLE_CHAT = "SET_SINGLE_CHAT";
// const INIT_SINGLE_CHAT = "INIT_SINGLE_CHAT";

// export const MODULE_NAME = "chats";
// export const selecteChatsLists = (state) => state[MODULE_NAME].chats;
// export const selecteSingleChat = (state) => state[MODULE_NAME].singleChat;

// const initialState = {
//   chats: [],
//   singleChat: [],
// };

// export function reducer(state = initialState, { type, payload }) {
//   switch (type) {
//     case SET_CHATS_LISTS:
//       return {
//         ...state,
//         chats: payload,
//       };

//     case SET_SINGLE_CHAT:
//       return {
//         ...state,
//         singleChat: payload,
//       };

//     case INIT_SINGLE_CHAT:
//       return {
//         ...state,
//         singleChat: [],
//       };

//     default:
//       return state;
//   }
// }

// export const setChatsLists = (payload) => ({
//   type: SET_CHATS_LISTS,
//   payload,
// });
// export const setSingleChat = (payload) => ({
//   type: SET_SINGLE_CHAT,
//   payload,
// });
// export const initSingleChat = () => ({
//   type: INIT_SINGLE_CHAT,
// });

// export const getAndListenForChatLists = () => async (dispatch, getState) => {
//   try {
//     const userID = selectUserID(getState());

//     await firebase
//       .firestore()
//       .collection("users_chats_lists")
//       .doc(userID)
//       .onSnapshot((doc) => {
//         if (doc.exists) {
//           const lists = doc.data();
//           const unionIDs = Object.keys(lists);
//           const chatListsArr = [];
//           unionIDs.forEach((id) => {
//             chatListsArr.push({ id, ...lists[id] });
//           });

//           const sortedChatListsArr = chatListsArr.sort((a, b) => {
//             return b.time - a.time;
//           });
//           dispatch(setChatsLists(sortedChatListsArr));
//         }
//       });
//   } catch (error) {
//     console.log("getAndListenForChatLists error =>", error);
//   }
// };

// export const makeReadMessage = (id) => async (dispatch, getState) => {
//   try {
//     const userID = selectUserID(getState());
//     const lists = selecteChatsLists(getState());
//     const selectedChat = lists.find((list) => list.id === id);
//     delete selectedChat[id];
//     await firebase
//       .firestore()
//       .collection("users_chats_lists")
//       .doc(userID)
//       .set(
//         {
//           [id]: { ...selectedChat, readed: true },
//         },
//         { merge: true }
//       );
//   } catch (error) {
//     console.log("makeReadMessage error =>", error);
//   }
// };

// export const setMessage = () => async (dispatch) => {
//   try {
//     firebase
//       .firestore()
//       .collection("messages")
//       .doc("yCfsEKPhXYNtcXs5rdAPjZ9Kp2G2_KLwjxxOrXmN8qdOedfYjVLUQWdT2")
//       .set({
//         messages: [
//           {
//             author_id: "yCfsEKPhXYNtcXs5rdAPjZ9Kp2G2",
//             text: "salam necesen?",
//             time: 1594588984928,
//           },
//           {
//             author_id: "KLwjxxOrXmN8qdOedfYjVLUQWdT2",
//             text: "sukur sen necesen?",
//             time: 1594593181379,
//           },
//           {
//             author_id: "yCfsEKPhXYNtcXs5rdAPjZ9Kp2G2",
//             text: "mende yaxsiyam yaxsi olasan coxdandi gorunmursen?",
//             time: 1594593222797,
//           },
//         ],
//       });
//   } catch (error) {
//     console.log("setMessage error", error);
//   }
// };

// export const getAndListenForSingleChat = (id) => async (dispatch, getState) => {
//   try {
//     const userID = selectUserID(getState());

//     await firebase
//       .firestore()
//       .collection("messages")
//       .doc(id)
//       .onSnapshot((doc) => {
//         if (doc.exists) {
//           const data = doc.data();
//           const sortedMessages = data.messages.sort((a, b) => {
//             return b.time - a.time;
//           });

//           dispatch(setSingleChat(sortedMessages));
//         }
//       });
//   } catch (error) {
//     console.log("getAndListenForSingleChat error => ", error);
//   }
// };

// export const sendMessage = (id, message) => async (dispatch, getState) => {
//   try {
//     const userID = selectUserID(getState());
//     const companion_id = id.split("_").find((id) => id !== userID);

//     await firebase
//       .firestore()
//       .collection("messages")
//       .doc(id)
//       .update({
//         messages: firebase.firestore.FieldValue.arrayUnion(message),
//       });

//     const lists = selecteChatsLists(getState());
//     const selectedChat = lists.find((list) => list.id === id);
//     delete selectedChat[id];

//     await firebase
//       .firestore()
//       .collection("users_chats_lists")
//       .doc(userID)
//       .set(
//         {
//           [id]: {
//             ...selectedChat,
//             last_msg: message.text,
//             time: Date.now(),
//           },
//         },
//         { merge: true }
//       );
//   } catch (error) {
//     console.log("sendMessage error => ", error);
//   }
// };
