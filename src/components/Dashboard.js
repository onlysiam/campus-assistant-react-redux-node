import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styled components
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";
//vars
import { primary, tertiary } from "../variables/colors";
//components
import AcademicInfo from "./dashboard/AcademicInfo";
import CourseInfo from "./dashboard/CourseInfo";
import Courses from "./dashboard/Courses";
import Profilepicture from "./profile/Profilepicture";
//redux
import { useSelector } from "react-redux";
const Dashboard = () => {
  const navigate = useNavigate();
  const authenticated = useSelector(
    (state) => state.entities.user.authenticated
  );

  useEffect(() => {
    if (!authenticated) navigate("/");
  }, []);
  return (
    <DashboardStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="profilePicSection">
        <Profilepicture />
        <AcademicInfo />
      </div>
      <div className="infoSection">
        <Courses />
        <CourseInfo />
      </div>
    </DashboardStyle>
  );
};

const DashboardStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${primary};
  .profilePicSection {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    height: 45vh;
    padding: 2rem 5rem 0rem 5rem;
    width: 100vw;
    background-color: ${tertiary};
  }
  .infoSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 55vh;
    gap: 1rem;
    padding: 0 5rem;
  }

  @media only screen and (min-width: 1600px) {
  }
  @media only screen and (max-width: 1290px) {
    .profilePicSection {
      padding: 2rem 3rem 0rem 3rem;
    }
    .infoSection {
      padding: 2rem 3rem 0rem 3rem;
    }
  }
  @media only screen and (max-width: 1180px) {
    .profilePicSection {
      padding: 2rem 2rem 0rem 2rem;
    }
    .infoSection {
      padding: 2rem 2rem 0rem 2rem;
    }
  }
  @media only screen and (max-width: 770px) {
    .profilePicSection {
      padding: 2rem 1rem 0rem 1rem;
    }
    .infoSection {
      padding: 2rem 1rem 0rem 1rem;
    }
  }
  @media only screen and (max-width: 680px) {
    justify-content: start;
    overflow: hidden;
    .profilePicSection {
      justify-content: center;
      align-items: center;
      gap: 1rem;
      height: 33vh;
      padding: 3rem 1rem 1rem 1rem;
    }
    .infoSection {
      height: auto;
      flex-direction: column-reverse;
      gap: 2rem;
      padding: 1rem 1rem 1rem 1rem;
    }
  }
`;
export default Dashboard;
