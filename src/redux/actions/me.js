import * as types from "../constants/me";
import axios from "axios";

export const loginUser = (email, password) => dispatch =>
  dispatch({
    type: types.LOGIN,
    payload: axios.post(`https://dev.propel.live/api/v1/auth/login`, {
      email,
      password
    })
  }).then(res => dispatch(getMe(res.value.data.access_token)));

export const getMe = () => dispatch =>
  dispatch({
    type: types.GET_ME,
    payload: axios.get("https://dev.propel.live/api/v1/users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
  }).catch(err => {
    console.log(err.response);
    if (!err.response) {
      console.log("no network");
      return null;
    }
    if (err.response.status === 401) {
      return localStorage.removeItem("accessToken");
    }
  });

export const logout = () => ({
  type: types.LOGOUT,
  payload: false
});
