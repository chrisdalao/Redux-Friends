import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/index";

const initialState = {
  friends: [],
  error: "",
  loggingIn: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: "",
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    default:
      return state;
  }
};
