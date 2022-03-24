import React from "react";
//components
//animation
import { motion } from "framer-motion";
import { cgpaCircleAnimation } from "../Animation";
//redux
import { useSelector } from "react-redux";
import styled from "styled-components";
const CircleProp = ({ strokeValue, value, label, startLimit, endLimit }) => {
  return (
    <CirclePropStyle className="cgpa">
      <motion.div
        variants={cgpaCircleAnimation}
        initial="hidden"
        animate="show"
        className="circle"
      >
        <motion.div
          variants={cgpaCircleAnimation}
          initial="hidden"
          animate="show"
          className="semesterCgpa"
        >
          <h1>{value}</h1>
          <p>{label}</p>
          <div className="cgpaLimit">
            <p>{startLimit}</p>
            <p>{endLimit}</p>
          </div>
        </motion.div>
        <motion.svg
          id="svg"
          variants={cgpaCircleAnimation}
          initial="hidden"
          animate="show"
          viewBox="0 0 122 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circle"
            d="M2.75 61C2.75 93.1706 28.8294 119.25 61 119.25C93.1706 119.25 119.25 93.1706 119.25 61C119.25 28.8294 93.1706 2.75 61 2.75C28.8294 2.75 2.75 28.8294 2.75 61Z"
            stroke="#e6e6e6"
            strokeWidth="8"
            strokeDasharray="366"
            strokeDashoffset="91.5"
          />
        </motion.svg>
        <motion.svg
          id="svg2"
          variants={cgpaCircleAnimation}
          initial="hidden"
          animate="show"
          viewBox="0 0 122 122"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circle"
            d="M2.75 61C2.75 93.1706 28.8294 119.25 61 119.25C93.1706 119.25 119.25 93.1706 119.25 61C119.25 28.8294 93.1706 2.75 61 2.75C28.8294 2.75 2.75 28.8294 2.75 61Z"
            stroke="#995697"
            strokeWidth="8"
            strokeDasharray="366"
            strokeDashoffset={strokeValue}
          />
        </motion.svg>
      </motion.div>
    </CirclePropStyle>
  );
};

const CirclePropStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  z-index: 1;
  .circle {
    position: relative;
    .semesterCgpa {
      display: flex;
      justify-content: stretch;
      align-items: center;
      flex-direction: column;
      width: 6rem;
      height: 6rem;
      border-radius: 60%;
      background: white;
      z-index: 10;
      h1 {
        padding-top: 1.6rem;
        font-size: 1.1rem;
      }
      p {
        text-align: center;
        width: 5.5rem;
        font-size: 0.8rem;
      }
      .cgpaLimit {
        display: flex;
        width: 4rem;
        p {
          padding-top: 0.8rem;
          font-size: 0.7rem;
        }
      }
    }
    svg {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      height: 7rem;
      padding: 1rem;
      z-index: 10;
      overflow: visible;
      transform-box: fill-box;
      transform-origin: center;
      transform: rotate(135deg) scaleX(-1);
      transition: 2s;
      #circle {
        transition: 2s;
      }
    }
  }
  @media only screen and (max-width: 1030px) {
    .circle {
      .semesterCgpa {
        width: 4.5rem;
        height: 4.5rem;
        h1 {
          padding-top: 1rem;
          font-size: 0.9rem;
        }
        p {
          font-size: 0.7rem;
        }
        .cgpaLimit {
          width: 3rem;
          p {
            padding-top: 0.6rem;
            font-size: 0.6rem;
          }
        }
      }
      svg {
        height: 5.5rem;
        padding: 0.8rem;
      }
    }
  }
  @media only screen and (max-width: 680px) {
    .circle {
      .semesterCgpa {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          padding-top: 0rem;
          font-size: 0.8rem;
        }
        p {
          font-size: 0.5rem;
        }
        .cgpaLimit {
          display: none;
        }
      }
      svg {
        height: 4rem;
        padding: 0.5rem;
      }
    }
  }
`;
export default CircleProp;
