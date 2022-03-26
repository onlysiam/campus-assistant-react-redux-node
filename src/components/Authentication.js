import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styled components
import styled from "styled-components";
//components
import Circles from "./background_props/Circles";
import Login from "./authentication/Login";
import Qrlogin from "./authentication/Qrlogin";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
import Signup from "./authentication/Signup";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducers
import { alertToggleTrue } from "../store/alerts/alert";
import { getCourses } from "../store/course";
import { placeholder, primary } from "../variables/colors";

const Authentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );
  const username = useSelector((state) => state.entities.user.username);
  const loginState = useSelector((state) => state.loader.loginWindow.state);
  const signupState = useSelector((state) => state.loader.signupWindow.state);

  useEffect(() => {
    if (authenticated) {
      if (signupState) {
        navigate("/addinfo");
        dispatch(
          alertToggleTrue({
            type: "success",
            message: "Successfully Signed Up.",
          })
        );
      }
      if (loginState) {
        const clientToken = localStorage.getItem("nsuaideJWT");
        dispatch(getCourses(clientToken));
        dispatch(
          alertToggleTrue({
            type: "success",
            message: "Successfully Logged In.",
          })
        );
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      }
    }
  }, [authenticated]);

  return (
    <Auth variants={pageAnimation} exit="exit">
      <Circles />
      <div>
        {loginState ? <Login /> : ""}
        {signupState ? <Signup /> : ""}
      </div>
      <p className="orBreak"></p>
      <div className="qrLogin">
        <Qrlogin />
      </div>
    </Auth>
  );
};

const Auth = styled(motion.div)`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f6f6f6;
  .orBreak {
    border-right: 3px solid #237e83;
    height: 80vh;
    color: #f6f6f6;
    transform: translateX(-50%);
  }
  .qrLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    padding: 1rem;
    overflow: hidden;
  }
  @media only screen and (max-width: 1200px) {
    .qrLogin {
      width: auto;
    }
  }
  @media only screen and (max-width: 680px) {
    flex-direction: column;
    .orBreak {
      display: none;
    }
  }
`;
export default Authentication;
