import { applyMiddleware, createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const enhancer = composeWithDevTools(applyMiddleware(thunk, promise));

// const persistConfig = {
//   key: "root",
//   storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, enhancer);
export const persistor = persistStore(store);
