import { combineReducers } from "redux";
import auth from "./auth.js";
import message from "./message";

const rootReducer = combineReducers({
  auth,
  message,
});

export default rootReducer