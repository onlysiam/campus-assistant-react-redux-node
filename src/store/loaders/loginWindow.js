import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "login",
  initialState: { state: true },
  reducers: {
    loginWindowToggle: (toggleLoginWindow, action) => {
      toggleLoginWindow.state = !toggleLoginWindow.state;
    },
    loginWindowToggleTrue: (toggleLoginWindow, action) => {
      toggleLoginWindow.state = true;
    },
    loginWindowToggleFalse: (toggleLoginWindow, action) => {
      toggleLoginWindow.state = false;
    },
  },
});

export const {
  loginWindowToggle,
  loginWindowToggleTrue,
  loginWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
