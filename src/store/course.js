import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import configdata from "./config/config.json";

const courseUrl = configdata.course;
const slice = createSlice({
  name: "course",
  initialState: {
    data: [],
    newCourses: [],
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
  },
});

export const {
  courseRequested,
  courseAdded,
  newCourseAdded,
  addCourseTemplateIncrease,
  courseRequestFailed,
} = slice.actions;
export default slice.reducer;

export const getCourses = (username, password) =>
  apiCallBegan({
    url: courseUrl.courses + "/" + username + "/" + password,
    method: "get",
    onStart: courseRequested.type,
    onSuccess: courseAdded.type,
    onError: courseRequestFailed.type,
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
// export const register = (informations) =>
//   apiCallBegan({
//     url: courseUrl,
//     method: "post",
//     data: informations,
//     onStart: authRequested.type,
//     onSuccess: courseAdded.type,
//     onError: authRequestFailed.type,
//   });

// export const uploadPicture = (file) =>
//   apiCallBegan({
//     url: courseUrl,
//     method: "post",
//     data: file,
//     onStart: uploadRequested.type,
//     onSuccess: courseDpAdded.type,
//     onError: uploadRequestFailed.type,
//   });
