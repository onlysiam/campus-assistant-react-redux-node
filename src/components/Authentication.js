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
import { useSelector } from "react-redux";

const Authentication = () => {
  const loginState = useSelector((state) => state.loader.loginWindow.state);
  const signupState = useSelector((state) => state.loader.signupWindow.state);
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
    font-size: 3vh;
    margin: 1.2vh 0;
    font-weight: 600;
  }
  .qrLogin {
    width: 40vw;
  }
  @media (min-width: 800px) {
    .orBreak {
      border-right: 3px solid #237e83;
      height: 80vh;
      color: #f6f6f6;
      transform: translateX(-50%);
    }
  }
`;
export default Authentication;
