import { React, useEffect, useState } from "react";
//router
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
//animation
import Startpage from "./components/Startpage";

//styled
import GlobalStyle from "./components/GlobalStyle";
//animation
import { AnimatePresence } from "framer-motion";
//components
import Alerts from "./components/alerts/Alerts";
import Authentication from "./components/Authentication";
import Preloader from "./components/preloaders/Preloader";
//redux
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );
  const userLoading = useSelector((state) => state.entities.user.loading);
  // const coursesLoading = useSelector(
  //   (state) => state.entities.courses.loading
  // );
  const [startpage, setStartpage] = useState();

  useEffect(() => {
    setStartpage(true);
    setTimeout(function () {
      setStartpage(false);
      if (authenticated) navigate("/dashboard");
    }, 1100);
  }, []);

  return (
    <div className="App">
      {userLoading ? <Preloader /> : ""}
      <Alerts />
      {startpage ? <Startpage /> : ""}
      <GlobalStyle />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Authentication />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
