import { combineReducers } from "redux";
import loginWindowReducer from "./loginWindow";
import signupWindowReducer from "./signupWindow";

export default combineReducers({
  loginWindow: loginWindowReducer,
  signupWindow: signupWindowReducer,
});
