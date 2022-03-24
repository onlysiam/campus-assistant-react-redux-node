import { combineReducers } from "redux";
import loginWindowReducer from "./loginWindow";
import signupWindowReducer from "./signupWindow";
import courseWindowReducer from "./courseWindow";
import studentInfoWindowReducer from "./studentinfoWindow";
import uploadWindowReducer from "./uploadWindow";
import suggestionWindowReducer from "./suggestionWindoows";

export default combineReducers({
  loginWindow: loginWindowReducer,
  signupWindow: signupWindowReducer,
  courseWindow: courseWindowReducer,
  studentInfoWindow: studentInfoWindowReducer,
  uploadWindow: uploadWindowReducer,
  suggestionWindow: suggestionWindowReducer,
});
