//vars
import { tertiary, action } from "../../variables/colors";
//styled components
import styled from "styled-components";
const Course = ({ course }) => {
  return (
    <CourseStyle>
      <h1>{course.course_initial}</h1>
      <h1>{course.section}</h1>
      <h1>{course.faculty}</h1>
      <h1 id="time">{course.time}</h1>
      <h1>{course.room}</h1>
    </CourseStyle>
  );
};

const CourseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h1 {
    text-align: center;
    padding: 8px 10px;
    font-size: 1rem;
    width: 5.5rem;
    font-weight: 400;
    border-radius: 8px;
    color: white;
    background-color: ${tertiary};
  }
  #time {
    width: 13rem;
  }

  @media only screen and (max-width: 1290px) {
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

  @media only screen and (max-width: 1030px) {
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
  @media only screen and (max-width: 770px) {
    h1 {
      padding: 8px 4px;
      font-size: 0.7rem;
      width: 3.5rem;
    }
    #time {
      width: 10rem;
      padding: 8px 5px;
    }
  }
  @media only screen and (max-width: 680px) {
    #time {
      width: 9rem;
    }
  }
`;
export default Course;
