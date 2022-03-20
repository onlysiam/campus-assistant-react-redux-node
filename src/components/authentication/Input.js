//vars
import { action, placeholder } from "../../variables/colors";
//image
import logo from "../../img/logo.svg";
import userIcon from "../../img/auth_props/user.svg";
import lockIcon from "../../img/auth_props/password.svg";
//styled
import styled from "styled-components";
import { useState } from "react";
const Input = ({ label, icon, type, placeholderTxt, value, onChange }) => {
  const [focused, setFocused] = useState(false);
  return (
    <InputStyle>
      <h1 className={focused ? "active" : ""}>{label}</h1>
      {icon && <img src={icon} alt="" />}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type={type}
        placeholder={placeholderTxt}
        value={value}
        onChange={(e) => onChange(e)}
        required
      />
    </InputStyle>
  );
};
const InputStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: flex-end;
  height: 4.2rem;
  width: 100%;
  h1 {
    position: absolute;
    top: 0;
    left: 10px;
    padding: 0px 5px;
    transform: translateY(50%);
    font-size: 1rem;
    font-weight: 400;
    color: ${placeholder};
    background-color: #f6f6f6;
  }
  img {
    position: absolute;
    right: 10px;
    top: 50%;
    height: 1.2rem;
  }
  .active {
    color: ${action};
    transition: 0.3s;
  }

  input {
    height: 3.2rem;
    width: 100%;
    padding: 15px 10px 10px 30px;
    background-color: transparent;
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
    padding: 14px 9px 9px 29px;
    border: 2px solid ${action};
  }
`;

export default Input;
