import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
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
import { authWindowToggleTrue } from "../store/loaders/authWindow";
import { loginWindowToggleTrue } from "../store/loaders/loginWindow";
import {
  nameWindowToggle,
  usernameWindowToggle,
  passwordWindowToggle,
  emailWindowToggle,
} from "../store/loaders/infowindow";
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
        dispatch(authWindowToggleTrue());
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
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex justify-center h-screen w-screen items-center"
    >
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start h-85p sm:h-80p w-95p sm:w-85p gap-20 bg-white rounded-lg py-10 mt-4">
        <Profilepicture />

        <div className="flex flex-col justify-start items-start w-75p h-full">
          <div className="flex justify-start items-center border-b border-black w-85p h-20 px-2">
            <h1 className="text-5xl font">Profile</h1>
          </div>
          <div
            className={
              (infoWindows.name ? "h-35p py-2 bg-gray-100 " : "h-20 ") +
              "flex flex-col justify-evenly items-center border-b border-gray-700 border-opacity-20 w-85p h-20 px-2 duration-300"
            }
          >
            <Infocard
              onClick={editNameHandler}
              body1="Name"
              body2={userInfo.name}
              body3="Edit"
            />
            {infoWindows.name ? (
              <Editinfo
                inputPlaceholder1="First Name"
                inputPlaceholder2="Last Name"
              />
            ) : (
              ""
            )}
          </div>

          <div
            className={
              (infoWindows.username ? "h-35p py-2 bg-gray-100 " : "h-20 ") +
              "flex flex-col justify-evenly items-center border-b border-gray-700 border-opacity-20 w-85p h-20 px-2 duration-300"
            }
          >
            <Infocard
              onClick={editUsernameHandler}
              body1="Username"
              body2={userInfo.username}
              body3="Edit"
            />
            {infoWindows.username ? (
              <Editinfo inputPlaceholder1="Username" />
            ) : (
              ""
            )}
          </div>

          <div
            className={
              (infoWindows.password ? "h-35p py-2 bg-gray-100 " : "h-20 ") +
              "flex flex-col justify-evenly items-center border-b border-gray-700 border-opacity-20 w-85p h-20 px-2 duration-300"
            }
          >
            <Infocard
              onClick={editPasswordHandler}
              body1="Password"
              body2="********"
              body3="Edit"
            />
            {infoWindows.password ? (
              <Editinfo
                inputPlaceholder1="Old Password"
                inputPlaceholder2="New Password"
              />
            ) : (
              ""
            )}
          </div>

          <div
            className={
              (infoWindows.email ? "h-35p py-2 bg-gray-100 " : "h-20 ") +
              "flex flex-col justify-evenly items-center border-b border-gray-700 border-opacity-20 w-85p h-20 px-2 duration-300"
            }
          >
            <Infocard
              onClick={editEmailHandler}
              body1="Email"
              body2={userInfo.email}
              body3="Edit"
            />
            {infoWindows.email ? <Editinfo inputPlaceholder1="Email" /> : ""}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
