import { React, useEffect, useState } from "react";
//router
import { Routes, Route, useLocation } from "react-router-dom";
//animation

import Startpage from "./components/Startpage";
import Login from "./components/authentication/Login";

//data

//styled
import GlobalStyle from "./components/GlobalStyle";
//animation
import { AnimatePresence } from "framer-motion";
import SlipUplod from "./components/courses/SlipUplod";

function App() {
  const location = useLocation();

  const [startpage, setStartpage] = useState();

  const [windowheight, setWindowheght] = useState();
  const [windowwidth, setWindowwidth] = useState();

  useEffect(() => {
    setWindowheght(window.innerHeight);
    setWindowwidth(window.innerWidth);
    setStartpage(true);
    setTimeout(function () {
      setStartpage(false);
    }, 1100);
  }, []);

  const windowSizer = () => {
    setWindowheght(window.innerHeight);
    setWindowwidth(window.innerWidth);
  };
  window.addEventListener("resize", windowSizer);

  return (
    <div className="App">
      {startpage ? <Startpage windowheight={windowheight} /> : ""}
      <GlobalStyle />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
