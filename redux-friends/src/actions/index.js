// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response.data.error));
};

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";
export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get("/friends")
    .then(res => {
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_FRIENDS_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const CREATE_FRIENDS_SUCCESS = "CREATE_FRIENDS_SUCCESS";
export const CREATE_FRIENDS_START = "CREATE_FRIENDS_START";
export const CREATE_FRIENDS_FAILURE = "CREATE_FRIENDS_FAILURE";
export const createFriend = friend => dispatch => {
  dispatch({ type: CREATE_FRIENDS_START });
  return axiosWithAuth()
    .post("/friends", friend)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
