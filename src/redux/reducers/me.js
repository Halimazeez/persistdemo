import * as types from "../constants/me";

const initialState = {
  data: {},
  loading: false,
  fetched: false,
  error: false,
  message: ""
};

export const me = (state = initialState, action) => {
  switch (action.type) {
    case `${types.LOGIN}_PENDING`:
    case `${types.GET_ME}_PENDING`:
      return { ...state, loading: true };

    case `${types.LOGIN}_REJECTED`:
    case `${types.GET_ME}_REJECTED`:
      console.log(action.payload);
      return { ...state, loading: false, data: action.payload.data };

    case `${types.LOGIN}_REJECTED`:
    case `${types.GET_ME}_REJECTED`:
      return { ...state, loading: false, error: true, message: action.payload };

    default:
      return state;
  }
};
