import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { uploadPictureUrl } from "./urls";

const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    authenticated: false,
    loading: false,
    uploading: false,
    lastFetch: null,
  },
  reducers: {
    authRequested: (authentication, action) => {
      authentication.loading = true;
    },
    userAdded: (users, action) => {},

    userLogout: (users, action) => {},

    authRequestFailed: (authentication, action) => {
      authentication.loading = false;
    },

    uploadRequested: (users, action) => {
      users.uploading = true;
    },
    userDpAdded: (users, action) => {
      if (action.payload.url) users.profilepic = action.payload.url;
      users.uploading = false;
    },
    uploadRequestFailed: (users, action) => {
      users.uploading = false;
    },
  },
});

export const {
  uploadRequested,
  userDpAdded,
  uploadRequestFailed,
  userAdded,
  userRemoved,
  userLogout,
} = slice.actions;
export default slice.reducer;

export const login = (username, password) =>
  apiCallBegan({
    url: loginUrl + "/" + username + "/" + password,
    method: "get",
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });
export const register = (informations) =>
  apiCallBegan({
    url: registerUrl,
    method: "post",
    data: informations,
    onStart: authRequested.type,
    onSuccess: userAdded.type,
    onError: authRequestFailed.type,
  });

export const uploadPicture = (file) =>
  apiCallBegan({
    url: uploadPictureUrl,
    method: "post",
    data: file,
    onStart: uploadRequested.type,
    onSuccess: userDpAdded.type,
    onError: uploadRequestFailed.type,
  });
