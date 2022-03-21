import { useEffect, useState } from "react";
//vars
import { action, placeholder } from "../../variables/colors";
import * as catagories from "../../variables/inputsCatagories";
//image
import logo from "../../img/logo.svg";
import userIcon from "../../img/auth_props/user.svg";
import lockIcon from "../../img/auth_props/password.svg";
import mailIcon from "../../img/auth_props/mail.svg";
//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { loginSignupPageAnimation } from "../Animation";
//components
import Input from "./Input";
//function
import { validateUserSignup } from "../../functions/validators";
//redux
import { useDispatch } from "react-redux";
//reducers
import {
  register,
  userValidationError,
  userValidationErrorReset,
} from "../../store/user";
import { loginWindowToggle } from "../../store/loaders/loginWindow";
import { signupWindowToggle } from "../../store/loaders/signupWindow";

const Signup = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(userValidationErrorReset());
  }, []);

  //handlers
  const fnameHandler = (e) => {
    setFname(e.target.value);
  };
  const lnameHandler = (e) => {
    setLname(e.target.value);
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(userValidationErrorReset());
    const validation = validateUserSignup({
      fname,
      lname,
      username,
      password,
      email,
    });
    if (validation !== true) {
      dispatch(userValidationError(validation));
    } else if (validation) {
      dispatch(userValidationErrorReset());
      dispatch(register({ fname, lname, username, password, email }));
    }
  };

  const loginWindowHandler = () => {
    dispatch(loginWindowToggle());
    dispatch(signupWindowToggle());
  };
  return (
    <Body
      variants={loginSignupPageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <form className="formStyle">
        <img className="logoImg" src={logo} alt="hey" />
        <div className="inputs">
          <div className="nameInputs">
            <Input
              label="First Name"
              type="text"
              placeholderTxt="John"
              value={fname}
              onChange={fnameHandler}
              catagory={catagories.name}
            />
            <Input
              label="Last Name"
              type="text"
              placeholderTxt="Doe"
              value={lname}
              onChange={lnameHandler}
              catagory={catagories.name}
            />
          </div>
          <Input
            label="NSU Id"
            icon={userIcon}
            type="number"
            placeholderTxt="10 digit nsu id"
            value={username}
            onChange={usernameHandler}
            catagory={catagories.username}
          />
          <Input
            label="Password"
            icon={lockIcon}
            type="password"
            placeholderTxt="6+ strong character"
            value={password}
            onChange={passwordHandler}
            catagory={catagories.password}
          />
          <Input
            label="E-mail"
            icon={mailIcon}
            type="text"
            placeholderTxt="example@northsouth.edu"
            value={email}
            onChange={emailHandler}
            catagory={catagories.email}
          />
        </div>
        <button onClick={signupHandler} className="loginBtn">
          Signup
        </button>
        <div className="atags">
          <p onClick={loginWindowHandler} to="">
            Have an Account? <span>Login</span>
          </p>
        </div>
      </form>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  height: 100vh;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .formStyle {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .logoImg {
      height: 10rem;
      margin-bottom: 10px;
    }
    .inputs {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      gap: 1rem;
      margin-top: 2rem;

      .nameInputs {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2%;
      }
    }

    .loginBtn {
      height: 2.8rem;
      width: 80%;
      background-color: #50c2c9;
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
      border: none;
      border-radius: 5px;
      margin-top: 2rem;
      transition: 0.5s;
      cursor: pointer;
    }
    .loginBtn:hover {
      transform: scale(1.03);
    }
    .atags {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 1rem;
      gap: 0.5rem;
      p {
        font-size: 1rem;
        font-weight: 400;
        height: 2rem;
        cursor: pointer;
        color: ${placeholder};
        span {
          color: #50c2c9;
          &:hover {
            transition: 0.5s ease;
            color: #5088c9;
          }
        }
      }
    }
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    .formStyle {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .logoImg {
      }

      .loginBtn:hover {
        transform: scale(1.03);
      }
      .atags {
        font-weight: 400;
        font-size: 2vh;
        cursor: pointer;
        color: #50c2c9;
      }
    }
  }
`;

export default Signup;
