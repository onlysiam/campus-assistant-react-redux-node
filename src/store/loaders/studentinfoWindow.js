import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "studentInfo",
  initialState: { state: false },
  reducers: {
    studentInfoWindowToggle: (toggleStudentInfoWindow, action) => {
      toggleStudentInfoWindow.state = !toggleStudentInfoWindow.state;
    },
    studentInfoWindowToggleTrue: (toggleStudentInfoWindow, action) => {
      toggleStudentInfoWindow.state = true;
    },
    studentInfoWindowToggleFalse: (toggleStudentInfoWindow, action) => {
      toggleStudentInfoWindow.state = false;
    },
  },
});

export const {
  studentInfoWindowToggle,
  studentInfoWindowToggleTrue,
  studentInfoWindowToggleFalse,
} = slice.actions;
export default slice.reducer;
