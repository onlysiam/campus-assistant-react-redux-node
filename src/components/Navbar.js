import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styled-components
import styled from "styled-components";
//vars
import { secondary } from "../variables/colors";
//components
import Element from "./nav/Element";
import Hamburgermenu from "./nav/Hamburgermenu";
const Navbar = () => {
  const navigate = useNavigate();
  const [navbarScroll, setNavbarScroll] = useState(false);
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
        <Element body="Profile" target="/profile" />
        <Element logout={true} body="Logout" target="/" />
      </div>
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
  z-index: 20;
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
