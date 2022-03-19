import { React, useEffect, useState } from "react";

//image
import logo from "../../img/logo.svg";
import cam from "../../img/cam.svg";
import phone from "../../img/phone.svg";
import qr from "../../img/qr.png";
import ath from "../../img/ath.svg";
import menu from "../../img/menu.svg";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import Circles from "../background_props/Circles";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [windowheight, setWindowheght] = useState();
  useEffect(() => {
    setWindowheght(window.innerHeight);
  }, []);
  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  const camScannerHandler = () => {};
  const resetHandler = () => {};
  const login = (e) => {};

  return (
    <Body height={windowheight} variants={pageAnimation} exit="exit">
      <Circles />

      <Form className="formStyle" onSubmit={login}>
        <img className="logoImg" src={logo} alt="hey" />
        <div className="idInput">
          <input
            type="number"
            placeholder="Nsu Id"
            value={username}
            onChange={usernameInputHandler}
            required
          />
        </div>
        <div className="passwordInput">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordInputHandler}
            required
          />
        </div>
        <div className="atags">
          <p onClick={resetHandler} to="">
            Forgot Password?
          </p>
        </div>
        <button className="loginBtn">Login</button>
      </Form>
      <p className="orBreak">OR</p>
      <button className="camImg" onClick={camScannerHandler}>
        <h1>Scan QR Code</h1>
        <img className="desktopHoverScape" src={cam} alt="cam" />
        <img className="desktopHoverQR" src={qr} alt="" />
        <img className="desktopHover" src={phone} alt="" />
      </button>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  width: 100vw;
  height: ${(props) => props.height}px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;

  .preloader {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff94;
    z-index: 100;
  }
  .orBreak {
    font-size: 3vh;
    margin: 1.2vh 0;
    font-weight: 600;
  }
  .camImg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 78vw;
    height: 9.5vh;
    background-color: #50c2c9;
    border: none;
    border-radius: 10px;
    padding: 0px 50px 0px 50px;
    cursor: pointer;
    .desktopHover {
      position: absolute;
      opacity: 0;
      height: 35vh;
      transform: translateX(300%);
      transition: 1s;
    }
    .desktopHoverQR {
      position: absolute;
      opacity: 0;
      height: 12vh;
      transition: 1s;
    }
    h1 {
      text-align: center;
      width: 35vw;
      font-size: 2vh;
      color: white;
    }
    img {
      height: 5vh;
    }
    .camIcon {
    }
  }
  .incorrectPass {
    text-align: center;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
  }
  .Toastify__close-button {
    display: none;
  }
  .resetpass {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #000000b0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 800px) {
    display: flex;
    width: 100vw;
    flex-direction: row;
    justify-content: space-evenly;
    padding-right: 10vw;

    .preloader {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 10vw;
      height: 100vh;
      width: 100vw;
      background-color: #ffffff94;
      z-index: 100;
    }

    .orBreak {
      border-right: 3px solid #237e83;
      height: 80vh;
      color: #f6f6f6;
      transform: translateX(-50%);
    }
    .camImg {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 30vw;
      height: 50vh;
      transition: 1s;

      h1 {
        font-size: 4vh;
        font-weight: 400;
        color: white;
        transition: 1s;
      }
      .desktopHoverScape {
        height: 10vh;
        transition: 1s;
      }
    }
    .camImg:hover {
      h1 {
        transform: translateY(-500%);
      }
      .desktopHoverScape {
        transform: translateY(-500%);
      }
      .desktopHover {
        display: flex;
        transform: translateY(0%);
        opacity: 1;
      }
      .desktopHoverQR {
        opacity: 1;
      }
    }
    .formStyle {
      width: 35vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .logoImg {
        margin-top: 3vh;
        height: 27vh;
        margin-bottom: 10px;
      }
      input {
        height: 6vh;
        width: 30vw;
        padding: 10px;
        background-color: white;
        color: black;
        padding-left: 30px;
        font-size: 2vh;
        border-radius: 10rem;
        margin-top: 25px;
        border: 0.5px solid #d1d1d1;
        border-top: none;
      }
      input::placeholder {
        color: rgba(0, 0, 0, 0.452);
      }

      .loginBtn {
        width: 30vw;
        height: 7.5vh;
        background-color: #50c2c9;
        color: white;
        font-size: 2.2vh;
        font-weight: 600;
        border: none;
        border-radius: 5px;
        transition: 1s ease;
      }
      .loginBtn:hover {
        transform: scale(1.1);
      }
    }
    .resetpass {
      position: absolute;
      width: 100vw;
      height: 100vh;
      margin-left: 10vw;
      background-color: #000000b0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Form = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logoImg {
    margin-top: 10vh;
    height: 25vh;
    margin-bottom: 10px;
  }
  input {
    height: 6vh;
    width: 80vw;
    padding: 10px;
    background-color: white;
    color: black;
    padding-left: 30px;
    font-size: 2vh;
    border-radius: 10rem;
    margin-top: 25px;
    border: 0.5px solid #d1d1d1;
    border-top: none;
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.452);
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border-bottom: 1px solid #50c2c9;
  }
  .atags {
    font-weight: 400;
    font-size: 2vh;
    margin: 2vh 20px;
    cursor: pointer;
    color: #50c2c9;
  }

  .loginBtn {
    width: 78vw;
    height: 7.5vh;
    background-color: #50c2c9;
    color: white;
    font-size: 2.2vh;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Login;
