import fbApp from "../firebaseInit";
import { Alert } from "react-native";

// ACTION TYPES
const SET_AUTH_STATUS = "SET_AUTH_STATUS";
const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_AUTH_LOGOUT = "SET_AUTH_LOGOUT";
const SET_AUTH_PHOTO = "SET_AUTH_PHOTO";
const DELETE_AUTH_PHOTO = "DELETE_AUTH_PHOTO";
const CHANGE_USERNAME = "CHANGE_USERNAME";
const RESET_PASSWORD = "RESET_PASSWORD";

// SELECTORS
export const MODULE_NAME = "auth";
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
export const selectAuthUserID = (state) => state[MODULE_NAME].userID;
export const selectAuthUsername = (state) => state[MODULE_NAME].username;
export const selectAuthFullname = (state) => state[MODULE_NAME].fullName;
export const selectAuthPhoto = (state) => state[MODULE_NAME].photo;
export const selectAuthBloodType = (state) => state[MODULE_NAME].bloodType;
export const selectAuthEmail = (state) => state[MODULE_NAME].email;

// REDUCER
const initialState = {
  status: false,
  userID: null,
  username: null,
  fullName: null,
  bloodType: null,
  email: null,
  gender: null,
  photo: null,
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        status: payload,
      };
    case SET_AUTH_SUCCESS:
      return {
        ...state,
        status: true,
        userID: payload.userID,
        username: payload.username,
        fullName: payload.fullName,
        bloodType: payload.bloodType,
        gender: payload.gender,
        photo: payload.photo,
        email: payload.email,
      };
    case SET_AUTH_PHOTO:
      return {
        ...state,
        photo: payload,
      };
    case DELETE_AUTH_PHOTO:
      return {
        ...state,
        photo: "",
      };
    case CHANGE_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case SET_AUTH_LOGOUT:
      return {
        ...state,
        status: false,
        userID: null,
        username: null,
        fullName: null,
        email: null,
        // bloodType: null,
        // gender: null,
      };

    default:
      return state;
  }
}

// ACTION CREATORS
export const setAuthStatus = (payload) => ({
  type: SET_AUTH_STATUS,
  payload,
});

export const setAuthSuccess = (payload) => ({
  type: SET_AUTH_SUCCESS,
  payload,
});

export const setAuthPhoto = (payload) => ({
  type: SET_AUTH_PHOTO,
  payload,
});

export const deleteAuthPhoto = () => ({
  type: DELETE_AUTH_PHOTO,
});

export const changeUsername = (payload) => ({
  type: CHANGE_USERNAME,
  payload,
});

export const resetPassword = (payload) => ({
  type: RESET_PASSWORD,
  payload,
});

export const setAuthLogout = () => ({
  type: SET_AUTH_LOGOUT,
});

// MIDDLEWARES

export const signUp = (email, password, username, fullName) => async (
  dispatch
) => {
  try {
    const {
      user: { uid },
    } = await fbApp.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        Alert.alert(error.code, error.message);
        console.log(error.code, error.message);
      });

    fbApp.db.ref(`users/${uid}`).set({
      username,
      fullName,
      email,
      bloodType: "",
      gender: "",
      photo: "",
    });

    dispatch(
      setAuthSuccess({
        userID: uid,
        username,
        fullName,
      })
    );
  } catch (error) {
    console.log("signUp error: ", error);
    Alert.alert("Failed", error.message);
  }
};

export const logIn = (Email, password) => async (dispatch) => {
  try {
    const {
      user: { uid },
    } = await fbApp.auth.signInWithEmailAndPassword(Email, password);

    const userDataSnapshot = await fbApp.db.ref(`users/${uid}`).once("value");
    console.log("userDataSnapshot: ", userDataSnapshot);
    const {
      username,
      fullName,
      bloodType,
      gender,
      photo,
      email,
    } = userDataSnapshot.val();

    dispatch(
      setAuthSuccess({
        userID: uid,
        username,
        fullName,
        bloodType,
        gender,
        photo,
        email,
      })
    );
  } catch (error) {
    console.log("logIn error", error);
    Alert.alert("Authentication failed", error.message);
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await fbApp.auth.signOut();
    dispatch(setAuthLogout());
  } catch (error) {
    console.log("logOut error", error);
  }
};

export const uploadAuthPhoto = (uri) => async (dispatch, getState) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const key = (await fbApp.db.ref("keys").push()).key;
    const snap = await fbApp.storage.ref(key).put(blob);
    const url = await snap.ref.getDownloadURL();

    const userID = selectAuthUserID(getState());
    const result = await fbApp.db.ref(`users/${userID}/photo`).set(url);

    dispatch(setAuthPhoto(url));
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const deleteUserAvatar = () => async (dispatch, getState) => {
  try {
    const userID = selectAuthUserID(getState());
    await fbApp.db.ref(`users/${userID}/photo`).set("");
    dispatch(deleteAuthPhoto());
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const sendEmail = (email) => async (dispatch) => {
  try {
    await fbApp.auth.sendPasswordResetEmail(email);
    dispatch(resetPassword({ email }));
  } catch (error) {
    console.log("sendEmail error: ", error);
  }
};

export const editUsername = (username) => async (dispatch, getState) => {
  try {
    const userID = selectAuthUserID(getState());
    await fbApp.db.ref(`users/${userID}/username`).set(username);
    dispatch(changeUsername(username));
  } catch (error) {
    console.log("editUsername: ", error);
  }
};
