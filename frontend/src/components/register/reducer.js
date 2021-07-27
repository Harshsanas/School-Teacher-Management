import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

const iniState = {
  message: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const reducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        message: payload,
        isError: false,
      };
    }

    case REGISTER_FAILURE: {
      return {
        ...state,
        isSuccess: false,
        isError: true,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
