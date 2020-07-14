import fbApp from "../firebaseInit";
import { Alert } from "react-native";

// ACTION TYPES
const SET_AUTH_STATUS = "SET_AUTH_STATUS";
const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
const SET_AUTH_LOGOUT = "SET_AUTH_LOGOUT";
const SET_PHOTO = "SET_PHOTO";
const DELETE_PHOTO = "DELETE_PHOTO";
const CHANGE_USERNAME = "CHANGE_USERNAME";
const CHANGE_FULL_NAME = "CHANGE_FULL_NAME";
const RESET_PASSWORD = "RESET_PASSWORD";
const SELECT_BLOOD_TYPE = "SELECT_BLOOD_TYPE";

// SELECTORS
export const MODULE_NAME = "auth";
export const selectAuthStatus = (state) => state[MODULE_NAME].status;
export const selectUserID = (state) => state[MODULE_NAME].userID;
export const selectUsername = (state) => state[MODULE_NAME].username;
export const selectName = (state) => state[MODULE_NAME].fullName;
export const selectPhoto = (state) => state[MODULE_NAME].photo;
export const selectBlood = (state) => state[MODULE_NAME].bloodType;
export const selectMail = (state) => state[MODULE_NAME].email;

// REDUCER
const initialState = {
  status: false,
  userID: null,
  username: null,
  fullName: null,
  bloodType: null,
  email: null,
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
        photo: payload.photo,
        email: payload.email,
      };
    case SET_PHOTO:
      return {
        ...state,
        photo: payload,
      };
    case DELETE_PHOTO:
      return {
        ...state,
        photo: "",
      };
    case CHANGE_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case CHANGE_FULL_NAME:
      return {
        ...state,
        fullName: payload,
      };
    case SELECT_BLOOD_TYPE:
      return {
        ...state,
        bloodType: payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        email: payload,
      };
    case SET_AUTH_LOGOUT:
      return {
        ...state,
        status: false,
        userID: null,
        username: null,
        fullName: null,
        email: null,
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

export const setPhoto = (payload) => ({
  type: SET_PHOTO,
  payload,
});

export const deletePhoto = () => ({
  type: DELETE_PHOTO,
});

export const changeUsername = (payload) => ({
  type: CHANGE_USERNAME,
  payload,
});

export const changeFullname = (payload) => ({
  type: CHANGE_FULL_NAME,
  payload,
});

export const selectBloodType = (payload) => ({
  type: SELECT_BLOOD_TYPE,
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

    dispatch(
      setAuthSuccess({
        userID: uid,
        username,
        fullName,
      })
    );

    fbApp.db.ref(`users/${uid}`).set({
      username,
      fullName,
      email,
      bloodType: "",
      photo: "",
    });
  } catch (error) {
    Alert.alert("Signup failed", error.message);
  }
};

export const logIn = (Email, password) => async (dispatch) => {
  try {
    const {
      user: { uid },
    } = await fbApp.auth.signInWithEmailAndPassword(Email, password);

    const userDataSnapshot = await fbApp.db.ref(`users/${uid}`).once("value");
    const {
      username,
      fullName,
      bloodType,
      photo,
      email,
    } = userDataSnapshot.val();

    dispatch(
      setAuthSuccess({
        userID: uid,
        username,
        fullName,
        bloodType,
        photo,
        email,
      })
    );
  } catch (error) {
    Alert.alert("Login failed", error.message);
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

export const uploadPhoto = (uri) => async (dispatch, getState) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();

    const key = (await fbApp.db.ref("keys").push()).key;
    const snap = await fbApp.storage.ref(key).put(blob);
    const url = await snap.ref.getDownloadURL();

    const userID = selectUserID(getState());
    const result = await fbApp.db.ref(`users/${userID}/photo`).set(url);

    dispatch(setPhoto(url));
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const removeAvatar = () => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());
    await fbApp.db.ref(`users/${userID}/photo`).set("");
    dispatch(deletePhoto());
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

export const verifyEmail = (email) => async (dispatch) => {
  try {
    dispatch(resetPassword({ email }));
  } catch (error) {
    console.log("verification error: ", error);
  }
};

export const editUsername = (username) => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());
    await fbApp.db.ref(`users/${userID}/username`).set(username);
    dispatch(changeUsername(username));
  } catch (error) {
    console.log("editUsername: ", error);
  }
};

export const editFullname = (fullName) => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());
    await fbApp.db.ref(`users/${userID}/fullName`).set(fullName);
    dispatch(changeFullname(fullName));
  } catch (error) {
    console.log("editFullname: ", error);
  }
};

export const addBloodType = (bloodType) => async (dispatch, getState) => {
  try {
    const userID = selectUserID(getState());
    await fbApp.db.ref(`users/${userID}/bloodType`).set(bloodType);
    dispatch(selectBloodType(bloodType));
  } catch (error) {
    console.log("addBloodType: ", error);
  }
};

export const changePassword = () => async (dispatch) => {
  try {
    const user = fbApp.auth.currentUser;
    user.updatePassword("123456789123");
  } catch (error) {}
};
