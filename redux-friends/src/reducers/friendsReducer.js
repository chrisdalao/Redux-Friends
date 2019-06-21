import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  CREATE_FRIENDS_START,
  CREATE_FRIENDS_SUCCESS,
  CREATE_FRIENDS_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  fetchingFriends: false,
  creatingFriend: false,
  error: ""
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        error: "",
        fetchingFriends: true
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        fetchingFriends: false,
        friends: action.payload
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        fetchingFriends: false,
        error: action.payload
      };
    case CREATE_FRIENDS_START:
      return {
        ...state,
        error: "",
        creatingFriend: true
      };
    case CREATE_FRIENDS_SUCCESS:
      console.log(action);
      return {
        ...state,
        friends: action.payload,
        creatingFriend: false
      };
    case CREATE_FRIENDS_FAILURE:
      return {
        ...state,
        creatingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};
