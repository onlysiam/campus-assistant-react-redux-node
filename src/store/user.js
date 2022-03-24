import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import configdata from "./config/config.json";

const user = configdata.user;
const slice = createSlice({
  name: "user",
  initialState: {
    userinfo: [],
    name: "",
    username: "",
    email: "",
    profilepic: "",
    degree: 42,
    degreeInfo: [],
    authenticated: false,
    loading: false,
    uploading: false,
    lastFetch: null,
    error: { state: false, catagory: "", message: "" },
  },
  reducers: {
    authRequested: (authentication, action) => {
      authentication.loading = true;
    },
    userAdded: (user, action) => {
      if (action.payload.length > 0) {
        user.userinfo = action.payload[0];
        user.name = action.payload[0].name;
        user.username = action.payload[0].username;
        user.email = action.payload[0].email;
        user.profilepic = action.payload[0].profilepic;
        user.degree = parseInt(action.payload[0].username.toString().slice(-3));
        user.authenticated = true;
        //user object into storage
        localStorage.setItem("nsuAideUserInfo", JSON.stringify(action.payload));
        // var retrievedObject = JSON.parse(
        //   localStorage.getItem("weatherClosetUserInfo")
        // );
        user.loading = false;
      } else {
        user.error.type = "error";
        user.error.message = "incorrect username or password";
      }
    },

    userLogout: (user, action) => {
      user.userinfo = [];
      user.name = "";
      user.username = "";
      user.email = "";
      user.profilepic = "";
      user.verified = "";
      user.authenticated = false;
      localStorage.removeItem("nsuaideUsername");
      localStorage.removeItem("nsuaidePassword");
    },
    userRemoved: (user, action) => {
      user.list.filter((user) => user.id !== action.payload.id);
    },
    degreeAdded: (user, action) => {
      user.degreeInfo = action.payload[0];
    },
    uploadRequested: (user, action) => {
      user.uploading = true;
    },
    userDpAdded: (user, action) => {
      if (action.payload.url) user.profilepic = action.payload.url;
      user.uploading = false;
    },
    infoAdded: (user, action) => {
      user.userinfo = action.payload[0];
      user.loading = false;
    },
    uploadRequestFailed: (user, action) => {
      user.uploading = false;
    },
    authRequestFailed: (authentication, action) => {
      authentication.loading = false;
    },
    userValidationError: (user, action) => {
      user.error.state = true;
      user.error.catagory = action.payload.catagory;
      user.error.message = action.payload.message;
    },
    userValidationErrorReset: (user, action) => {
      user.error.state = false;
      user.error.catagory = "";
      user.error.message = "";
    },
  },
});

export const {
  authRequested,
  authRequestFailed,
  uploadRequested,
  uploadRequestFailed,
  userDpAdded,
  userAdded,
  degreeAdded,
  infoAdded,
  userRemoved,
  userLogout,
  userValidationError,
  userValidationErrorReset,
} = slice.actions;
export default slice.reducer;

export const login = (username, password) =>
  apiCallBegan({
    url: user.users + "/" + username + "/" + password,
    method: "get",
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });

export const register = (informations) =>
  apiCallBegan({
    url: user.users,
    method: "post",
    data: informations,
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });

export const infoUpdate = (informations) =>
  apiCallBegan({
    url: user.userinfo,
    method: "post",
    data: informations,
    onStart: authRequested.type,
    onSuccess: infoAdded.type,
    onError: authRequestFailed.type,
  });
export const uploadPicture = (file) =>
  apiCallBegan({
    url: user.dp,
    method: "post",
    data: file,
    onStart: uploadRequested.type,
    onSuccess: userDpAdded.type,
    onError: uploadRequestFailed.type,
  });

export const getDegree = (degreeId) =>
  apiCallBegan({
    url: user.degree + "/" + degreeId,
    method: "get",
    onSuccess: degreeAdded.type,
  });
