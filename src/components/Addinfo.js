import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//animation
import { motion, AnimatePresence } from "framer-motion";
import {
  pageAnimation,
  cardAnimation1,
  cardAnimation2,
  courseWindow,
} from "./Animation";
//styles
import styled from "styled-components";
import { tertiary, action, secondary } from "../variables/colors";
//images
import addIcon from "../img/addinfo_props/addIcon.svg";
import uploadIcon from "../img/addinfo_props/uploadIcon.svg";
import infoIcon from "../img/addinfo_props/info.svg";
//components
import AcademicInfo from "./add_academicinfo/AcademicInfo";
import AddCourse from "./add_course/AddCourse";
import Infocard from "./dashboard/Infocard";
import SlipUpload from "./add_course/SlipUplod";
//redux
import { useSelector, useDispatch } from "react-redux";
//reducers
import {
  courseWindowToggleTrue,
  courseWindowToggleFalse,
} from "../store/loaders/courseWindow";
import {
  uploadWindowToggleTrue,
  uploadWindowToggleFalse,
} from "../store/loaders/uploadWindow";
import {
  studentInfoWindowToggleTrue,
  studentInfoWindowToggleFalse,
} from "../store/loaders/studentinfoWindow";
//actions
import { getDepartments, getSemesters } from "../store/suggestion";
const Addinfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );
  const suggestionFetched = useSelector(
    (state) => state.entities.suggestions.state
  );
  const courseWindowState = useSelector(
    (state) => state.loader.courseWindow.state
  );
  const uploadWindowState = useSelector(
    (state) => state.loader.uploadWindow.state
  );
  const academicInfoWindowState = useSelector(
    (state) => state.loader.studentInfoWindow.state
  );
  const courseSavedState = useSelector(
    (state) => state.entities.courses.courseSaved
  );

  useEffect(() => {
    if (courseSavedState) {
      dispatch(courseWindowToggleFalse());
      dispatch(uploadWindowToggleFalse());
    }
  }, [courseSavedState]);
  //handlers
  const whiteSpaceClickedHandler = (e) => {
    if (e.target.id === "exit") {
      dispatch(courseWindowToggleFalse());
      dispatch(uploadWindowToggleFalse());
      dispatch(studentInfoWindowToggleFalse());
    }
  };

  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
    if (!suggestionFetched) {
      dispatch(getSemesters());
      dispatch(getDepartments());
    }
  }, []);
  //handlers

  return (
    <AddinfoStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AnimatePresence>
        {courseWindowState || uploadWindowState || academicInfoWindowState ? (
          <motion.div
            variants={courseWindow}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={whiteSpaceClickedHandler}
            id="exit"
            className="courseWindows"
          >
            {courseWindowState ? <AddCourse /> : ""}
            {uploadWindowState ? <SlipUpload /> : ""}
            {academicInfoWindowState ? <AcademicInfo /> : ""}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      <motion.div
        className="heading"
        variants={cardAnimation1}
        initial="hidden"
        animate="show"
      >
        <h1>Welcome to NSU Aide</h1>
      </motion.div>
      <div className="cards">
        <Infocard
          title="Add Courses"
          image={addIcon}
          onClick={() => dispatch(courseWindowToggleTrue())}
        />
        <Infocard
          title="Upload Advising Slip"
          image={uploadIcon}
          onClick={() => dispatch(uploadWindowToggleTrue())}
        />
        <Infocard
          title="Update Academic Information"
          image={infoIcon}
          onClick={() => dispatch(studentInfoWindowToggleTrue())}
        />
      </div>
    </AddinfoStyle>
  );
};

const AddinfoStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 3rem 20rem;
  gap: 6rem;
  background-color: ${secondary};
  .heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    h1 {
      font-size: 3rem;
      color: white;
    }
    p {
      color: white;
      font-size: 1.5rem;
    }
  }
  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
  }
  .courseWindows {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
  }
  @media only screen and (max-width: 680px) {
    padding: 3rem 1rem 1rem 1rem;
    gap: 2rem;
    .heading {
      h1 {
        font-size: 1.6rem;
      }
    }
    .cards {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
export default Addinfo;
