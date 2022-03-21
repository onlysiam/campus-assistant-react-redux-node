import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import configdata from "./config/config.json";

const userUrl = configdata.user.userUrl;
const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    email: "",
    profilepic: "",
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
        user.name = action.payload[0].name;
        user.username = action.payload[0].username;
        user.email = action.payload[0].email;
        user.profilepic = action.payload[0].profilepic;
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
      user.name = "";
      user.username = "";
      user.email = "";
      user.profilepic = "";
      user.verified = "";
      user.authenticated = false;
      localStorage.removeItem("weatherClosetUserInfo");
    },
    userRemoved: (user, action) => {
      user.list.filter((user) => user.id !== action.payload.id);
    },
    uploadRequested: (user, action) => {
      user.uploading = true;
    },
    userDpAdded: (user, action) => {
      if (action.payload.url) user.profilepic = action.payload.url;
      user.uploading = false;
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
  userRemoved,
  userLogout,
  userValidationError,
  userValidationErrorReset,
} = slice.actions;
export default slice.reducer;

export const login = (username, password) =>
  apiCallBegan({
    url: userUrl + "/" + username + "/" + password,
    method: "get",
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });
export const register = (informations) =>
  apiCallBegan({
    url: userUrl,
    method: "post",
    data: informations,
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });

// export const uploadPicture = (file) =>
//   apiCallBegan({
//     url: uploadPictureUrl,
//     method: "post",
//     data: file,
//     onStart: uploadRequested.type,
//     onSuccess: userDpAdded.type,
//     onError: uploadRequestFailed.type,
//   });
