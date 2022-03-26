//vars
import { secondary } from "../../variables/colors";
//styled components
import styled from "styled-components";
//components
import Course from "./Course";
//redux
import { useSelector } from "react-redux";
const Courses = () => {
  const courses = useSelector((state) => state.entities.courses.data);
  return (
    <CoursesStyle>
      <div className="heading">
        <h1>Initial</h1>
        <h1>Section</h1>
        <h1>Faculty</h1>
        <h1 id="time">Time</h1>
        <h1>Room</h1>
      </div>
      <div className="courses">
        {courses.map((course) => {
          return <Course course={course} />;
        })}
      </div>
    </CoursesStyle>
  );
};

const CoursesStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  max-height: 90%;
  border-radius: 8px;
  gap: 1rem;
  background-color: white;
  .heading {
    display: flex;
    justify-content: center;
    padding-right: 5px;
    align-items: flex-start;
    width: 39rem;
    gap: 10px;
    h1 {
      text-align: center;
      padding: 8px 10px;
      width: 5.5rem;
      font-size: 1rem;
      border-radius: 8px;
      color: white;
      background-color: ${secondary};
    }
    #time {
      width: 13rem;
    }
  }
  .courses {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 39rem;

    height: 100%;
    overflow-y: scroll;
  }
  @media only screen and (min-width: 1600px) {
    max-height: 90%;
    width: 45%;
    gap: 1.5rem;
    .heading {
      width: 100%;
      gap: 5px;
      h1 {
        padding: 8px 8px;
        font-size: 1.2rem;
        width: 7rem;
      }
      #time {
        width: 16rem;
        padding: 8px 5px;
      }
    }
    .courses {
      gap: 20px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 1290px) {
    padding: 10px 10px;
    max-height: 90%;
    .heading {
      width: 100%;
      gap: 5px;
      h1 {
        padding: 8px 8px;
        font-size: 0.9rem;
        width: 4.5rem;
      }
      #time {
        width: 12rem;
        padding: 8px 5px;
      }
    }
    .courses {
      gap: 10px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 1030px) {
    .heading {
      width: 100%;
      gap: 5px;
      h1 {
        padding: 8px 6px;
        font-size: 0.8rem;
        width: 4rem;
      }
      #time {
        width: 11rem;
        padding: 8px 5px;
      }
    }
    .courses {
      gap: 10px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 770px) {
    width: 80vw;
    .heading {
      h1 {
        padding: 8px 6px;
        font-size: 0.9rem;
        width: 6rem;
      }
      #time {
        width: 11rem;
        padding: 8px 5px;
      }
    }
    .courses {
      gap: 10px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 680px) {
    margin-top: 1.5rem;
    padding: 10px 6px;
    .heading {
      h1 {
        padding: 8px 5px;
        font-size: 0.7rem;
        width: 3.5rem;
      }
      #time {
        width: 9rem;
      }
    }
    .courses {
      gap: 10px;
      width: 100%;
    }
  }
`;
export default Courses;
