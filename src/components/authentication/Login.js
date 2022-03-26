import { useEffect, useState } from "react";
//vars
import { action, placeholder, primary } from "../../variables/colors";
import * as catagories from "../../variables/inputsCatagories";
//image
import logo from "../../img/logo.svg";
import userIcon from "../../img/auth_props/user.svg";
import lockIcon from "../../img/auth_props/password.svg";
//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { loginSignupPageAnimation } from "../Animation";
//components
import Input from "./Input";
//function
import { validateUserLogin } from "../../functions/validators";
//redux
import { useDispatch } from "react-redux";
//reducers
import {
  login,
  userValidationError,
  userValidationErrorReset,
} from "../../store/user";
import { loginWindowToggle } from "../../store/loaders/loginWindow";
import { signupWindowToggle } from "../../store/loaders/signupWindow";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(1610861042);
  const [password, setPassword] = useState("siam07");

  useEffect(() => {
    dispatch(userValidationErrorReset());
  }, []);

  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  const resetHandler = () => {};
  const logInHandler = (e) => {
    e.preventDefault();
    dispatch(userValidationErrorReset());
    const validation = validateUserLogin({ username, password });
    if (validation !== true) {
      dispatch(userValidationError(validation));
    } else if (validation) {
      dispatch(userValidationErrorReset());
      const clientToken = localStorage.getItem("nsuaideJWT");
      dispatch(login(username, password, clientToken));
      localStorage.setItem("nsuaideUserUsername", username);
    }
  };

  const signupWindowHandler = () => {
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
          <Input
            label="NSU Id"
            icon={userIcon}
            type="number"
            placeholderTxt="10 digit nsu id"
            value={username}
            onChange={usernameInputHandler}
            catagory={catagories.username}
          />
          <Input
            label="Password"
            icon={lockIcon}
            type="password"
            placeholderTxt="6+ strong character"
            value={password}
            onChange={passwordInputHandler}
            catagory={catagories.password}
          />
        </div>
        <button onClick={logInHandler} className="loginBtn">
          Login
        </button>
        <div className="qrloginSection">
          <div className="or">
            <p>or</p>
          </div>
          <button className="btn">QR Login</button>
        </div>
        <div className="atags">
          <p onClick={resetHandler} to="">
            Forgot Password? <span>Reset</span>
          </p>
          <p onClick={signupWindowHandler} to="">
            Don't have an account? <span>Signup</span>
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
      margin-top: 3vh;
      height: 10rem;
      margin-bottom: 10px;
    }
    .inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      gap: 1rem;
      margin-top: 2rem;
      overflow: visible;
    }

    .loginBtn {
      width: 80%;
      height: 2.8rem;
      background-color: ${action};
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
    .qrloginSection {
      display: none;
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
        cursor: pointer;
        color: ${placeholder};
        span {
          color: ${action};
          transition: 0.5s ease;
          &:hover {
            color: #5088c9;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    width: 40vw;
  }
  @media only screen and (max-width: 800px) {
    width: 50vw;
    .formStyle {
      padding: 0rem;
    }
  }
  @media only screen and (max-width: 680px) {
    width: 80vw;
    height: 70vh;
    z-index: 1;
    .formStyle {
      .logoImg {
        margin-top: 0vh;
        height: 8rem;
        margin-bottom: 0px;
      }
      .inputs {
        gap: 0.5rem;
        margin-top: 1.3rem;
      }

      .qrloginSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        width: 100%;
        .or {
          width: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #bfbfbf;
          p {
            color: ${placeholder};
            text-align: center;
            width: 2rem;
            font-size: 1.3rem;
            transform: translateY(-60%);
            background-color: ${primary};
          }
        }
        button {
          width: 80%;
          height: 2.8rem;
          background-color: ${action};
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          border-radius: 5px;
          transition: 0.5s;
          cursor: pointer;
          &:hover {
            transform: scale(1.03);
          }
        }
      }
    }
  }
`;

export default Login;
