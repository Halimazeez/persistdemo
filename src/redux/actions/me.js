import * as types from "../constants/me";
import axios from "axios";

export const LoginUser = (userId, password) => ({
  type: types.LOGIN,
  payload: null
});

export const getMe = () => ({
  type: types.GET_ME,
  payload: null
});
