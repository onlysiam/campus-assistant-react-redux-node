import { React, useEffect, useState } from "react";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";

const Noteinitial = () => {
  const courses = useSelector((state) => state.entities.courses.data);
  useEffect(() => {});
  const initialHandler = () => {};
  return (
    <Body>
      <div className="initial">
        {/* <button style={{ backgroundColor: "#00c0c0" }} onClick={initialHandler}>
          CSE115
        </button> */}
        {courses &&
          courses.map((course) => {
            return (
              <button onClick={initialHandler}>{course.course_initial}</button>
            );
          })}
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  .initial {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 30vh;
    overflow-x: hidden;
    padding: 5px;
    button {
      font-size: 11px;
      font-weight: 400;
      width: 80px;
      font-size: 15px;
      color: white;
      background-color: #42a5d6;
      border: none;
      border-radius: 10px;
      padding: 5px;
      cursor: pointer;
    }
  }
`;

export default Noteinitial;
