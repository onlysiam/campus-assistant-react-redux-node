import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//style
import styled from "styled-components";
import { secondary, action } from "../../variables/colors";
//animation
import { motion } from "framer-motion";
//components
import AddSemester from "./AddSemester";
import CourseInfoInputs from "./CourseInfoInputs";
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import * as suggestion from "../../store/suggestion";
import { suggestionWindowToggleFalse } from "../../store/loaders/suggestionWindoows";
import { saveCourses } from "../../store/course";
import { courseWindowToggleFalse } from "../../store/loaders/courseWindow";
import { studentInfoWindowToggleTrue } from "../../store/loaders/studentinfoWindow";
const AddCourse = () => {
  const dispatch = useDispatch();
  const addCourseTemplate = useSelector(
    (state) => state.entities.courses.addCourseTemplate
  );
  const suggestionWindowState = useSelector(
    (state) => state.loader.suggestionWindow
  );
  const username = useSelector((state) => state.entities.user.username);
  const courses = useSelector((state) => state.entities.courses.newCourses);
  const courseSavedState = useSelector(
    (state) => state.entities.courses.courseSaved
  );
  const [semesterId, setSemesterId] = useState("");

  useEffect(() => {
    if (courseSavedState) {
      dispatch(courseWindowToggleFalse());
      dispatch(studentInfoWindowToggleTrue());
    }
  }, [courseSavedState]);
  //handlers
  const courseSaveHandler = () => {
    dispatch(saveCourses({ username, courses }));
  };

  useEffect(() => {
    if (semesterId) {
      dispatch(suggestion.getCourses(semesterId));
      dispatch(suggestion.getFaculties(semesterId));
      dispatch(suggestion.getTime(semesterId));
    }
  }, [semesterId]);

  const detectClickHandler = (e) => {
    if (suggestionWindowState) {
      if (!e.target.id) dispatch(suggestionWindowToggleFalse());
    }
  };
  return (
    <AddcourseStyle onClick={detectClickHandler}>
      <div className="semester">
        {" "}
        <AddSemester setSemesterId={setSemesterId} />
      </div>
      <div className="courseInputs">
        {addCourseTemplate.map((item, index) => {
          return (
            <CourseInfoInputs id={index} key={index} semester={semesterId} />
          );
        })}
      </div>
      <button onClick={courseSaveHandler}>Save</button>
    </AddcourseStyle>
  );
};
const AddcourseStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  height: 75vh;
  width: 60vw;
  gap: 1rem;
  border-radius: 8px;
  padding: 2rem 2rem;
  background-color: ${action};
  button {
    width: 8rem;
    height: 3rem;
    background-color: ${secondary};
    color: white;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: ${secondary};
      background-color: white;
    }
  }
  .semester {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .courseInputs {
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    height: 90%;
    overflow: scroll;
    gap: 0.5rem;
  }
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 680px) {
    height: 75vh;
    width: 90vw;
    button {
      width: 7rem;
      height: 2.5rem;
      font-size: 1rem;
    }
  }
`;
export default AddCourse;
