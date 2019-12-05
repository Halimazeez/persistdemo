import * as types from "../constants/me";
import axios from "axios";
import { persistor } from "../store";

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
    if (err.response && err.response.status === 401) {
      dispatch(refreshToken());
    }
  });

export const refreshToken = () => dispatch =>
  dispatch({
    type: types.REFRESH_TOKEN,
    payload: axios.post(
      "https://dev.propel.live/api/v1/auth/refresh",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("refreshToken")}`
        }
      }
    )
  })
    .then(res => dispatch(getMe()))
    .catch(err => {
      persistor.purge();
      return dispatch(logout());
    });

export const logout = () => ({
  type: types.LOGOUT,
  payload: Promise.resolve(false)
});
