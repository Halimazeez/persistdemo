import { applyMiddleware, createStore, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const enhancer = composeWithDevTools(applyMiddleware(thunk, promise));

export const store = createStore(rootReducer, enhancer);
