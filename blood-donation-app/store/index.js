import { AsyncStorage } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import { MODULE_NAME as authModuleName, reducer as authReducer } from "./auth";

import {
  MODULE_NAME as postsModuleName,
  reducer as postsReducer,
} from "./posts";

const config = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [authModuleName]: authReducer,
  [postsModuleName]: postsReducer,
});

const rootPersistReducer = persistReducer(config, rootReducer);

const store = createStore(
  rootPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
