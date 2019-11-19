import * as types from "../constants/me";

const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false,
  loggedIn: false,
  message: ""
};

export const me = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_ME}_PENDING`:
      return { ...state, loading: true };

    case `${types.LOGIN}_FULFILLED`:
      localStorage.setItem("accessToken", action.payload.data.access_token);
      return { ...state };

    case `${types.GET_ME}_FULFILLED`:
      return {
        ...state,
        loading: false,
        data: action.payload.data.user,
        fetched: true,
        loggedIn: true
      };

    case `${types.GET_ME}_REJECTED`:
      return { ...state, loading: false, error: true, message: action.payload };

    case types.LOGOUT:
      localStorage.removeItem("accessToken");
      return { ...state, loggedIn: false };

    default:
      return state;
  }
};
