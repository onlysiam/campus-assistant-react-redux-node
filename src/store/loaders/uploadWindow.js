import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "upload",
  initialState: { state: false },
  reducers: {
    uploadWindowToggle: (toggleUploadWindow, action) => {
      toggleUploadWindow.state = !toggleUploadWindow.state;
    },
    uploadWindowToggleTrue: (toggleUploadWindow, action) => {
      toggleUploadWindow.state = true;
    },
    uploadWindowToggleFalse: (toggleUploadWindow, action) => {
      toggleUploadWindow.state = false;
    },
  },
});

export const {
  uploadWindowToggle,
  uploadWindowToggleTrue,
  uploadWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
