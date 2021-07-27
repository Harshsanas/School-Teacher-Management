import axios from "axios";
import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

export const registerRquest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (message) => {
  return {
    type: REGISTER_SUCCESS,
    payload: message,
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    error,
  };
};

export const userRegister = (payload) => async (dispatch) => {
  dispatch(registerRquest());
  console.log(payload);
  try {
    const { data } = await axios.post(
      `http://localhost:3033/user/new`,
      payload,
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    console.log("register", data);
    dispatch(registerSuccess(data.message));
  } catch (error) {
    dispatch(registerFailure(error));
  }
};