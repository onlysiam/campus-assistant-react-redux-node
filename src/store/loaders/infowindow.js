import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "infoWindow",
  initialState: { name: false, username: false, password: false, email: false },
  reducers: {
    nameWindowToggle: (toggleInfoWindow, action) => {
      toggleInfoWindow.name = !toggleInfoWindow.name;
      toggleInfoWindow.username = false;
      toggleInfoWindow.password = false;
      toggleInfoWindow.email = false;
    },
    usernameWindowToggle: (toggleInfoWindow, action) => {
      toggleInfoWindow.username = !toggleInfoWindow.username;
      toggleInfoWindow.name = false;
      toggleInfoWindow.password = false;
      toggleInfoWindow.email = false;
    },
    passwordWindowToggle: (toggleInfoWindow, action) => {
      toggleInfoWindow.password = !toggleInfoWindow.password;
      toggleInfoWindow.username = false;
      toggleInfoWindow.name = false;
      toggleInfoWindow.email = false;
    },
    emailWindowToggle: (toggleInfoWindow, action) => {
      toggleInfoWindow.email = !toggleInfoWindow.email;
      toggleInfoWindow.username = false;
      toggleInfoWindow.password = false;
      toggleInfoWindow.name = false;
    },
  },
});

export const {
  nameWindowToggle,
  usernameWindowToggle,
  passwordWindowToggle,
  emailWindowToggle,
} = slice.actions;
export default slice.reducer;
