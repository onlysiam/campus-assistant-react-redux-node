//style
import styled from "styled-components";
import { action } from "../../variables/colors";
//redux
import { useDispatch } from "react-redux";
//reducers
import { suggestionWindowToggleFalse } from "../../store/loaders/suggestionWindoows";

const SemesterSuggestions = ({
  semester,
  setSemesterId,
  setInput,
  suggestion,
  setSuggestion,
}) => {
  const dispatch = useDispatch();
  //handlers
  const semesterHandler = () => {
    setSemesterId(semester.semester_id);
    setInput(semester.semester_name);
    setSuggestion(false);
  };
  const suggestionHandler = () => {
    setInput(suggestion.initial);
    dispatch(suggestionWindowToggleFalse());
    setSuggestion(false);
  };
  return (
    <ElementStyle>
      {semester && (
        <h1 id="suggestionElement" onClick={semesterHandler}>
          {semester.semester_name}
        </h1>
      )}
      {suggestion && (
        <h2 id="suggestionElement" onClick={suggestionHandler}>
          {suggestion.initial}
        </h2>
      )}
    </ElementStyle>
  );
};
const ElementStyle = styled.div`
  width: 100%;
  h1,
  h2 {
    color: gray;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    transition: 0.3s;
    &:hover {
      color: white;
      background-color: ${action};
    }
  }
`;
export default SemesterSuggestions;
