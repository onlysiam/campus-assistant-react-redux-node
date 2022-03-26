import { useEffect, useState } from "react";
//styles
import styled from "styled-components";
import { placeholder, primary, secondary } from "../../variables/colors";
//components
import SuggestionElement from "./SuggestionElement";
//redux
import { useDispatch, useSelector } from "react-redux";
//reducers
import {
  suggestionWindowToggleTrue,
  suggestionWindowToggleFalse,
} from "../../store/loaders/suggestionWindoows";
const InputField = ({
  placeholder,
  type,
  suggestions,
  onChange,
  value,
  setInput,
  disabledState,
}) => {
  const dispatch = useDispatch();
  const suggestionWindow = useSelector(
    (state) => state.loader.suggestionWindow.state
  );
  const [suggestion, setSuggestion] = useState(false);
  useEffect(() => {
    if (!suggestionWindow) setSuggestion(false);
  }, [suggestionWindow]);
  const inputFoucusHandler = (e) => {
    if (suggestionWindow) dispatch(suggestionWindowToggleFalse());
    dispatch(suggestionWindowToggleTrue());
    setSuggestion(true);
  };
  return (
    <InputStyles onFocus={inputFoucusHandler}>
      <input
        id="input"
        className={disabledState ? "input" : ""}
        onChange={(e) => onChange(e)}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        disabled={disabledState}
      />

      {suggestionWindow && suggestion && suggestions.length ? (
        <div className="suggestion">
          {suggestions.map((suggestion, index) => {
            return (
              <SuggestionElement
                key={index}
                setSuggestion={setSuggestion}
                suggestion={suggestion}
                setInput={setInput}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </InputStyles>
  );
};

const InputStyles = styled.div`
  position: relative;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
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
  input[class="input"][disabled] {
    background-color: ${primary};
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
    width: 100%;
    height: 10rem;
    margin-top: 12rem;
    border-radius: 5px;
    overflow: scroll;
    overflow-x: hidden;
    padding: 5px 5px 0px 5px;
    background-color: white;
    cursor: pointer;
    z-index: 1;
  }
  @media only screen and (max-width: 680px) {
    width: 100%;

    .suggestion {
      margin-top: 6rem;
    }
  }
`;
export default InputField;
