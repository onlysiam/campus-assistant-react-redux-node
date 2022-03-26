import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import configdata from "./config/config.json";

const courseUrl = configdata.course;
const slice = createSlice({
  name: "course",
  initialState: {
    data: [],
    newCourses: [],
    notes: [],
    addCourseTemplate: [1, 1, 1, 1],
    courseSaved: false,
    newCourseFetched: false,
    loading: false,
  },
  reducers: {
    courseRequested: (course, action) => {
      course.loading = true;
    },
    courseAdded: (course, action) => {
      course.data = action.payload;
      course.courseSaved = true;
      course.loading = false;
    },
    newCourseAdded: (course, action) => {
      if (course.newCourses.length === 0) {
        course.newCourses.push(action.payload[0]);
        course.newCourseFetched = true;
        course.loading = false;
      } else {
        const newcoursrearr = course.newCourses.filter(
          (item) => item.course_initial !== action.payload[0].course_initial
        );
        course.newCourses = newcoursrearr;
        course.newCourses.push(action.payload[0]);
        course.newCourseFetched = true;
        course.loading = false;
      }
    },
    addCourseTemplateIncrease: (course, action) => {
      course.addCourseTemplate.push(1);
      course.loading = false;
    },
    courseRequestFailed: (course, action) => {
      course.loading = false;
    },
    notesRequested: (note, action) => {
      note.loading = false;
    },
    notesAdded: (note, action) => {
      note.notes = action.payload;
    },
    notesRequestFailed: (note, action) => {
      note.loading = false;
    },
  },
});

export const {
  courseRequested,
  courseAdded,
  newCourseAdded,
  addCourseTemplateIncrease,
  courseRequestFailed,
  notesRequested,
  notesAdded,
  notesRequestFailed,
} = slice.actions;
export default slice.reducer;

export const getCourses = (clientToken) =>
  apiCallBegan({
    url: courseUrl.courses,
    method: "get",
    headers: {
      "x-auth-token": clientToken,
    },
    onStart: courseRequested.type,
    onSuccess: courseAdded.type,
    onError: courseRequestFailed.type,
  });

export const getNotes = (clientToken) =>
  apiCallBegan({
    url: courseUrl.notes,
    method: "get",
    headers: {
      "x-auth-token": clientToken,
    },
    onStart: notesRequested.type,
    onSuccess: notesAdded.type,
    onError: notesRequestFailed.type,
  });

export const saveCourses = (data) =>
  apiCallBegan({
    url: courseUrl.courses,
    method: "post",
    data: data,
    onStart: courseRequested.type,
    onSuccess: courseAdded.type,
    onError: courseRequestFailed.type,
  });

export const getSelectedCourse = (course, section, semester) =>
  apiCallBegan({
    url:
      courseUrl.semestersCourses +
      "/" +
      course +
      "/" +
      section +
      "/" +
      semester,
    method: "get",
    onStart: courseRequested.type,
    onSuccess: newCourseAdded.type,
    onError: courseRequestFailed.type,
  });
