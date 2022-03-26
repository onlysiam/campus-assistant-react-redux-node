import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
//style
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
//components
import Profilepicture from "./profile/Profilepicture";
import Infocard from "./profile/Infocard";
import Editinfo from "./profile/Editinfo";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducer
import { loginWindowToggleTrue } from "../store/loaders/loginWindow";
import {
  nameWindowToggle,
  usernameWindowToggle,
  passwordWindowToggle,
  emailWindowToggle,
} from "../store/loaders/infowindow";
import { primary, secondary, tertiary } from "../variables/colors";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.entities.user);
  const infoWindows = useSelector((state) => state.loader.infoWindow);

  //useEffect
  useEffect(() => {
    if (!userInfo.authenticated) {
      setTimeout(() => {
        dispatch(loginWindowToggleTrue());
      }, 500);
      navigate("/home");
    }
  }, []);

  //handlers
  const editNameHandler = () => {
    dispatch(nameWindowToggle());
  };
  const editUsernameHandler = () => {
    dispatch(usernameWindowToggle());
  };
  const editPasswordHandler = () => {
    dispatch(passwordWindowToggle());
  };
  const editEmailHandler = () => {
    dispatch(emailWindowToggle());
  };

  return (
    <ProfileStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="body">
        <div className="menu">
          <Profilepicture />
          <h1>{userInfo.name}</h1>
          <div className="items">
            <p>General</p>
            <p>Security</p>
            <p>Academic</p>
          </div>
        </div>

        <div className="infos"></div>
      </div>
    </ProfileStyle>
  );
};

const ProfileStyle = styled(motion.div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${tertiary};
  .body {
    height: 80vh;
    width: 80vw;
    background-color: ${primary};
    border-radius: 8px;
    padding: 2rem;
  }
`;
export default Profile;
