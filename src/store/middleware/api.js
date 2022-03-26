import axios from "axios";
import * as actions from "../api";
import { alertToggleTrue } from "../alerts/alert";
const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) {
      return next(action);
    }
    const { url, method, headers, data, onSuccess, onError, onStart } =
      action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);
    try {
      const response = await axios.request({
        baseURL: "http://localhost:3001/api",
        // baseURL: "https://nsuaide.onlysiam.com/api/",
        url,
        method,
        headers,
        data,
      });
      if (response.data) {
        dispatch(actions.apiCallSuccess(response.data));
      }
      if (onSuccess && response.data) {
        if (onSuccess === "user/userAdded") {
          if (response.data.result.length > 0) {
            dispatch({ type: onSuccess, payload: response.data });
          } else if (response.data.err === "ER_DUP_ENTRY") {
            dispatch(
              alertToggleTrue({
                type: "error",
                message: "user already exists",
              })
            );
            dispatch({ type: onError, payload: response });
          } else {
            dispatch(
              alertToggleTrue({
                type: "error",
                message: "Incorrect Username/ password",
              })
            );
            dispatch({ type: onError, payload: "no data found" });
          }
        } else {
          dispatch({ type: onSuccess, payload: response.data });
        }
      }
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(
          alertToggleTrue({
            type: "error",
            message:
              "Course fetch failed, no JWT token provided. Please re-login.",
          })
        );
      }
      if (error.response.status === 400) {
        dispatch(
          alertToggleTrue({
            type: "error",
            message: "Course fetch failed, invalid JWT Token. Please re-login.",
          })
        );
      }
      dispatch(actions.apiCallFailed(error));
      if (onError) dispatch({ type: onError, payload: error });
    }
  };
export default api;
