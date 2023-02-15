import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userTypes";
import axios from "axios";

export const userRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const userSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};
export const userFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log("data - ", response.data);
        dispatch(userSuccess(response.data));
      })
      .catch((error) => {
        // console.log("error - ", error.message);
        dispatch(userFailure(error.message));
      });
  };
};
