import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "course",
  initialState: { state: false },
  reducers: {
    courseWindowToggle: (toggleCourseWindow, action) => {
      toggleCourseWindow.state = !toggleCourseWindow.state;
    },
    courseWindowToggleTrue: (toggleCourseWindow, action) => {
      toggleCourseWindow.state = true;
    },
    courseWindowToggleFalse: (toggleCourseWindow, action) => {
      toggleCourseWindow.state = false;
    },
  },
});

export const {
  courseWindowToggle,
  courseWindowToggleTrue,
  courseWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
