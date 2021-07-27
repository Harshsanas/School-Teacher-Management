import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REGISTER, LOGIN_SUCCESS } from "./actionType";

export const loginRequest = () => {
  return {
    type: LOGIN_REGISTER,
  };
};
export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};
export const loginFailure = (message) => {
  return {
    type: LOGIN_FAILURE,
    payload: message,
  };
};

export const userLogin = (payload) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post(
      "http://localhost:3033/user/login",
      payload
    );
    dispatch(loginSuccess({ token: data.token, username: payload.username }));
    console.log(data);
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
