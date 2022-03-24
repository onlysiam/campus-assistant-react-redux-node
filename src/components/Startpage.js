import { React, useEffect } from "react";

//image
import logo from "../img/logo.svg";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

const Startpage = ({ windowheight }) => {
  useEffect(() => {});

  return (
    <Body height={windowheight} variants={pageAnimation} exit="exit">
      <img className="logoImg" src={logo} alt="hey" />
      <h1>NSU Aide</h1>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f6f6f6;
  z-index: 100;
  .logoImg {
    height: 25vh;
    margin-bottom: 10px;
  }
`;

export default Startpage;
