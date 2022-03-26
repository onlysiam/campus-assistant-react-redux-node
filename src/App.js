import { useEffect, useState } from "react";
//router
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
//animation
import Startpage from "./components/Startpage";

//styled
import GlobalStyle from "./components/GlobalStyle";
//animation
import { AnimatePresence } from "framer-motion";
//components
import Addinfo from "./components/Addinfo";
import Alerts from "./components/alerts/Alerts";
import Authentication from "./components/Authentication";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Preloader from "./components/preloaders/Preloader";
import Profile from "./components/Profile";
//redux
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );
  const userLoading = useSelector((state) => state.entities.user.loading);
  const coursesLoading = useSelector((state) => state.entities.courses.loading);
  const [startpage, setStartpage] = useState();

  useEffect(() => {
    setStartpage(true);
    setTimeout(function () {
      setStartpage(false);
      if (authenticated) navigate("/dashboard");
    }, 1100);

    const token = localStorage.getItem("nsuAideJWT");
    if (!authenticated && token) {
      console.log(token);
    }
  }, []);

  return (
    <div className="App">
      {userLoading || coursesLoading ? <Preloader /> : ""}
      <Alerts />
      {startpage ? <Startpage /> : ""}
      {authenticated && location.pathname !== "/" ? <Navbar /> : ""}
      <GlobalStyle />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Authentication />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addinfo" element={<Addinfo />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
