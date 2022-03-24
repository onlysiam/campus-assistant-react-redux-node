import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import configdata from "./config/config.json";
const suggestionUrl = configdata.suggestion;
const slice = createSlice({
  name: "user",
  initialState: {
    semesters: [],
    courses: [],
    faculties: [],
    departments: [],
    coursetime: [],
    fetched: false,
  },
  reducers: {
    suggestionRequested: (suggestion, action) => {
      suggestion.loading = true;
    },
    semestersAdded: (suggestion, action) => {
      suggestion.semesters = action.payload;
    },
    coursesAdded: (suggestion, action) => {
      suggestion.courses = action.payload;
      suggestion.fetched = true;
    },
    facultiesAdded: (suggestion, action) => {
      suggestion.faculties = action.payload;
    },
    departmentsAdded: (suggestion, action) => {
      suggestion.departments = action.payload;
    },
    timeAdded: (suggestion, action) => {
      suggestion.fetched = true;
      suggestion.coursetime = action.payload;
    },
    suggestionRequestFailed: (suggestion, action) => {
      suggestion.loading = true;
    },
  },
});

const {
  suggestionRequested,
  semestersAdded,
  coursesAdded,
  facultiesAdded,
  departmentsAdded,
  timeAdded,
  suggestionRequestFailed,
} = slice.actions;
export default slice.reducer;

export const getSemesters = () =>
  apiCallBegan({
    url: suggestionUrl.semesters,
    method: "get",
    onStart: suggestionRequested.type,
    onSuccess: semestersAdded.type,
    onError: suggestionRequestFailed.type,
  });
export const getCourses = (semesterId) =>
  apiCallBegan({
    url: suggestionUrl.courses + "/" + semesterId,
    method: "get",
    onStart: suggestionRequested.type,
    onSuccess: coursesAdded.type,
    onError: suggestionRequestFailed.type,
  });

export const getFaculties = (semesterId) =>
  apiCallBegan({
    url: suggestionUrl.faculties + "/" + semesterId,
    method: "get",
    onStart: suggestionRequested.type,
    onSuccess: facultiesAdded.type,
    onError: suggestionRequestFailed.type,
  });
export const getDepartments = () =>
  apiCallBegan({
    url: suggestionUrl.departments,
    method: "get",
    onStart: suggestionRequested.type,
    onSuccess: departmentsAdded.type,
    onError: suggestionRequestFailed.type,
  });
export const getTime = (semesterId) =>
  apiCallBegan({
    url: suggestionUrl.coursetime + "/" + semesterId,
    method: "get",
    onStart: suggestionRequested.type,
    onSuccess: timeAdded.type,
    onError: suggestionRequestFailed.type,
  });
