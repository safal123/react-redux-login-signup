import { combineReducers } from "redux";
import users from "./users";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  users,
  errors,
  messages
});
