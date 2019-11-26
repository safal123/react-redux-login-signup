import axios from "axios";
import { createMessage } from "./messages";

import { GET_USERS, DELETE_USER, ADD_USER, GET_ERRORS } from "../actions/types";

// Get all users from server
export const getUsers = () => dispatch => {
  axios
    .get("http://localhost:8000/api/userLists")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(error => {
      const errors = {
        msg: error.response.statusText,
        status: error.response.status
      };
      //   console.log(errors);
      returnErrors(dispatch, errors);
    });
};

// Delete a single user
export const deleteUser = id => dispatch => {
  axios
    .delete(`http://localhost:8000/api/userLists/${id}`)
    .then(res => {
      dispatch(createMessage({ userDeleted: "User deleted successfully" }));
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(error => {
      const errors = {
        msg: error.response.data.errors,
        status: error.response.status
      };
      returnErrors(dispatch, errors);
    });
};

// Add a new user
export const addUser = user => dispatch => {
  axios
    .post("http://localhost:8000/api/userLists", user)
    .then(res => {
      dispatch(createMessage({ userAdded: "User added successfully" }));
      dispatch({
        type: ADD_USER,
        payload: res.data.user
      });
    })
    .catch(error => {
      const errors = {
        msg: error.response.data.errors,
        status: error.response.status
      };
      returnErrors(dispatch, errors);
    });
};
function returnErrors(dispatch, errors) {
  dispatch({
    type: GET_ERRORS,
    payload: errors
  });
}
