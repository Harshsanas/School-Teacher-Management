import { LOGIN_FAILURE, LOGIN_REGISTER, LOGIN_SUCCESS } from "./actionType";

const iniState = {
  token: "",
  username: "",
  isAuth: false,
  isLoading: false,
  isError: false,
  message: "",
};

export const reducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOGIN_REGISTER: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload.token,
        username: payload.username,
        isAuth: true,
        isError: false,
        isLoading: false,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        message: payload.message,
        isError: true,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
