import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  error: ""
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      console.log(action);
      return {
        ...state,
        error: "",
        fetchingFriends: true
      };
    default:
      return state;
  }
};
