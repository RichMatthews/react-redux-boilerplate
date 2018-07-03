import { combineReducers } from "redux";
import users from "./users";
import selectedUser from "./selectedUser";

const rootReducer = combineReducers({
  users,
  selectedUser
});

export default rootReducer;
