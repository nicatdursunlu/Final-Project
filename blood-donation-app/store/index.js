import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";

import { MODULE_NAME as authModuleName, reducer as authReducer } from "./auth";

const config = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [authModuleName]: authReducer,
});

const rootPersistReducer = persistReducer(config, rootReducer);

const store = createStore(
  rootPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
