import { useEffect, useState } from "react";
//style
import styled from "styled-components";
import {
  primary,
  secondary,
  action,
  placeholder,
} from "../../variables/colors";
//redux
import { useDispatch, useSelector } from "react-redux";
//actionns
import { getSelectedCourse } from "../../store/course";
//components
import InputField from "./InputField";
const CourseInputs = ({ id, semester }) => {
  const dispatch = useDispatch();
  const suggestionsArray = useSelector((state) => state.entities.suggestions);
  const suggestions = useSelector((state) => state.entities.suggestions);
  const courses = useSelector((state) => state.entities.courses.newCourses);

  const [course, setCourse] = useState("");
  const [courseSuggestions, setCourseSuggestions] = useState([]);
  const [section, setSection] = useState("");
  const [faculty, setFaculty] = useState("");
  const [facultySuggestions, setFacultySuggestions] = useState([]);
  const [time, setTime] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    if (suggestionsArray) {
      setFacultySuggestions(suggestionsArray.courses);
      setFacultySuggestions(suggestionsArray.faculties);
    }
  }, [suggestionsArray, course, section, courses]);

  useEffect(() => {
    if (courses.length > 0) {
      courses.forEach((item) => {
        if (item.course_initial === course && item.section == section) {
          setFaculty(item.faculty);
          setTime(item.time);
          setRoom(item.room);
        }
      });
    }
  }, [courses]);
  //handlers
  const courseHandler = (e) => {
    setCourse(e.target.value.toUpperCase());
    setCourseSuggestions(
      suggestionsArray.courses.filter((state) => {
        const regex = new RegExp(`^${e.target.value}`, "gi");
        return state.initial.match(regex);
      })
    );
    if (e.target.value.length === 0)
      setCourseSuggestions(suggestionsArray.courses);
  };
  const sectionHandler = (e) => {
    setSection(e.target.value);
    if (course && e.target.value && semester)
      dispatch(getSelectedCourse(course, e.target.value, semester));
  };
  const facultyHandler = (e) => {
    setFaculty(e.target.value);
    setFacultySuggestions(
      suggestionsArray.faculties.filter((state) => {
        const regex = new RegExp(`^${e.target.value}`, "gi");
        return state.initial.match(regex);
      })
    );
    if (e.target.value.length === 0)
      setCourseSuggestions(suggestionsArray.courses);
  };
  const timeeHandler = (e) => {
    setTime(e.target.value);
  };
  const roomHandler = (e) => {
    setRoom(e.target.value);
  };
  return (
    <InputStyle>
      <h1>Course {id + 1}:</h1>
      <div className="inputs">
        <InputField
          type="text"
          placeholder="Course Initial"
          suggestions={courseSuggestions}
          onChange={courseHandler}
          value={course}
          setInput={setCourse}
          disabledState={!suggestions.fetched}
        />
        <InputField
          type="number"
          placeholder="Section"
          setInput={setSection}
          onChange={sectionHandler}
          value={section}
          suggestions={false}
          disabledState={!suggestions.fetched}
        />
        <InputField
          type="text"
          placeholder="Faculty"
          suggestions={facultySuggestions}
          onChange={facultyHandler}
          value={faculty}
          setInput={setFaculty}
          disabledState={!suggestions.fetched}
        />
        <div className="select">
          <input
            className={!suggestions.fetched ? "input" : ""}
            onChange={timeeHandler}
            type="text"
            placeholder="Time And Day"
            value={time}
            disabled
          />
          <div className="options">
            <h1></h1>
          </div>
        </div>
        <input
          className={!suggestions.fetched ? "input" : ""}
          type="text"
          placeholder="Room Number"
          onChange={roomHandler}
          value={room}
          disabled
        />
      </div>
    </InputStyle>
  );
};

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  h1 {
    font-size: 1.3rem;
    color: ${secondary};
  }
  .inputs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    input {
      height: 2rem;
      width: 100%;
      padding: 10px;
      background-color: white;
      color: black;
      font-size: 0.9rem;
      outline: none;
      border-radius: 5px;
      border: 1px solid #d1d1d1;
      transition: 0.3s;
    }
    input::placeholder {
      color: ${placeholder};
    }
    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
      border-color: ${secondary};
    }
    input[class="input"][disabled] {
      background-color: ${placeholder};
    }
    .select {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 3rem;
      h1 {
        position: absolute;
        font-size: 1.4rem;
        font-weight: 400;
        right: 5px;
        color: ${secondary};
        transform: translatey(-20%) rotate(180deg);
        cursor: pointer;
      }
    }
  }
  @media only screen and (max-width: 680px) {
    width: 75vw;
    gap: 0.6rem;
    .inputs {
      width: 100%;
      flex-direction: column;
      gap: 0.4rem;
    }
  }
`;
export default CourseInputs;
