import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "signup",
  initialState: { state: false },
  reducers: {
    signupWindowToggle: (togglesignupWindow, action) => {
      togglesignupWindow.state = !togglesignupWindow.state;
    },
    signupWindowToggleTrue: (togglesignupWindow, action) => {
      togglesignupWindow.state = true;
    },
    signupWindowToggleFalse: (togglesignupWindow, action) => {
      togglesignupWindow.state = false;
    },
  },
});

export const {
  signupWindowToggle,
  signupWindowToggleTrue,
  signupWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
