import { combineReducers } from "redux";
import userReducer from "./user";
import courseReducer from "./course";
import suggestionReducer from "./suggestion";

const appReducer = combineReducers({
  user: userReducer,
  courses: courseReducer,
  suggestions: suggestionReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "users/userLogout") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
