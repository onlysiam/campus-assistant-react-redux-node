import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styled-components
import styled from "styled-components";
//vars
import { secondary } from "../variables/colors";
//animation
import { AnimatePresence } from "framer-motion";
//components
import Element from "./nav/Element";
import Menu from "./nav/Menu";
import Hamburgermenu from "./nav/Hamburgermenu";
//redux
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );
  const userInfo = useSelector((state) => state.entities.user);
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const [navMenuSlide, setNavMenuSlide] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60 && !navbarScroll) {
        setNavbarScroll(true);
      }
      if (window.scrollY <= 60) {
        setNavbarScroll(false);
      }
    });
  });
  return (
    <NavStyle>
      <h1 onClick={() => navigate("/dashboard")}>NSU Aide</h1>
      <div className="hamburger">
        <Hamburgermenu onClick={() => setNavMenuSlide(!navMenuSlide)} />
      </div>
      <div className={navMenuSlide ? "elements active" : "elements"}>
        <Element body="Home" target="/dashboard" />
        <Element body="Department" target="/department" />
        <Element body="RDS" target="/rds" />
        <Element body="Profile" target="/settings" />
        <Element logout={true} body="Logout" target="/" />
      </div>
      {/* {authenticated ? (
          <div className="relative h-10 w-10 right-8 sm:top-0 sm:right-0 rounded-full cursor-pointer">
            <img
              onClick={() => setMenu(!menu)}
              className="absolute h-full w-full top-0 left-0 object-cover"
              src=""
              alt=""
            />
          </div>
        ) : (
          <div className="mr-8 sm:mr-0">
            <Element
              body="Login"
              target="login"
              url="true"
              setNavMenuSlide={setNavMenuSlide}
            />
          </div>
        )}
        <AnimatePresence>
          {menu ? (
            <div className="absolute w-40 top-16 sm:top-14 right-8 sm:right-28 mt-1 duration-150">
              <Menu key={1} navbarScroll={navbarScroll} setMenu={setMenu} />
            </div>
          ) : (
            ""
          )}
        </AnimatePresence> */}
    </NavStyle>
  );
};
const NavStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5rem;
  width: 100vw;
  height: 3.5rem;
  z-index: 10;
  .hamburger {
    display: none;
  }
  h1 {
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
  .elements {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
  }
  @media only screen and (max-width: 1300px) {
    padding: 0px 3rem;
  }
  @media only screen and (max-width: 1180px) {
    padding: 0px 2rem;
    .elements {
      width: 60%;
    }
  }
  @media only screen and (max-width: 770px) {
    padding: 0px 1rem;
    .elements {
      width: 70%;
    }
  }
  @media only screen and (max-width: 680px) {
    padding: 0px 1rem;
    h1 {
      font-size: 1.3rem;
    }
    .hamburger {
      display: flex;
      z-index: 11;
    }
    .elements {
      position: absolute;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      top: 0;
      right: 0;
      background-color: ${secondary};
      width: 60vw;
      height: 100vh;
      transform: translateX(300px);
      opacity: 0;
      transition: 0.5s ease;
    }
    .active {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
export default Navbar;
