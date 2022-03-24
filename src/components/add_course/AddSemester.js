import { useState, useRef } from "react";
//styles
import styled from "styled-components";
import { secondary, action, placeholder } from "../../variables/colors";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { addCourseTemplateIncrease } from "../../store/course";
import { courseWindowToggleFalse } from "../../store/loaders/courseWindow";
//components
import SuggestionElement from "./SuggestionElement";
const AddSemester = ({ setSemesterId }) => {
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const suggestionWindow = useSelector(
    (state) => state.loader.suggestionWindow.state
  );
  const semesters = useSelector(
    (state) => state.entities.suggestions.semesters
  );

  const [suggestion, setSuggestion] = useState(false);
  const [semester, setSemester] = useState("");

  //handlers
  const semesterHandler = (e) => {
    setSemester(e.target.value);
  };
  const suggestionHandler = () => {
    if (semester) {
      setSuggestion(false);
    }
  };
  return (
    <SemesterStyle>
      <div
        ref={wrapperRef}
        onFocus={() => setSuggestion(true)}
        onBlur={suggestionHandler}
        className="input"
      >
        {semester.length === 0 ? <p>Please add a semester first</p> : ""}
        <input
          onChange={semesterHandler}
          value={semester}
          type="text"
          placeholder="Semester"
        />
        {suggestion ? (
          <div className="suggestion">
            {semesters.map((semester) => {
              return (
                <SuggestionElement
                  key={semester.semester_id}
                  setSuggestion={setSuggestion}
                  semester={semester}
                  setInput={setSemester}
                  setSemesterId={setSemesterId}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <button onClick={() => dispatch(addCourseTemplateIncrease())}>
        Add Course
      </button>
    </SemesterStyle>
  );
};

const SemesterStyle = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  .input {
    position: relative;
    display: flex;
    width: 11rem;
    p {
      position: absolute;
      color: red;
      width: 15rem;
      font-size: 1rem;
      top: -1.5rem;
    }
  }
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
  .suggestion {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width: 11rem;
    height: 10rem;
    margin-top: 2rem;
    border-radius: 5px;
    overflow: scroll;
    padding: 5px 5px 0px 5px;
    background-color: white;
    cursor: pointer;
    z-index: 1;
  }
`;
export default AddSemester;
