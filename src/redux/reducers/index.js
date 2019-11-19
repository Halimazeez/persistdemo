import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { me } from "./me";

const authPersistConfig = {
  key: "me",
  storage: storage
};

const appReducer = combineReducers({
  me: persistReducer(authPersistConfig, me)
});

export default appReducer;
