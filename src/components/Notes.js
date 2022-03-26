import { React, useEffect, useState } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

//styled
import styled from "styled-components";
import Note from "./notes/Note";
import notes from "../img/note.svg";
import Noteinitial from "./notes/Noteinitial";
//Animations
import { motion } from "framer-motion";
import { action } from "../variables/colors";

const Notes = () => {
  const [notesActive, setNotesActive] = useState(false);

  useEffect(() => {});

  const noteshandler = () => {};

  const setNotes = (e) => {};
  const dateHandler = (e) => {};
  const noteUpdateHandler = () => {};
  return (
    <Body>
      <div className={notesActive ? "notesdiv active" : "notesdiv"}>
        <div onClick={() => setNotesActive(!notesActive)} className="title">
          <ul>
            <li>N</li>
            <li>O</li>
            <li>T</li>
            <li>E</li>
            <li>S</li>
          </ul>
        </div>
        <div className="notescontainer">
          <div className="initialcontainer">
            <div className="coursesinitial">
              <Noteinitial />
            </div>
          </div>
          <div className="notes">
            <textarea
              name=""
              id="txt"
              cols="30"
              rows="10"
              onChange={setNotes}
            ></textarea>
            <div className="texareaother">
              <div className="date">
                <p>Any Date?</p>
                <input type="date" />
              </div>
              <button onClick={noteUpdateHandler}>SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

//styled Components
const Body = styled(motion.div)`
  .notesdiv {
    position: fixed;
    display: flex;
    align-items: center;
    width: 30vw;
    height: 35vh;
    top: 5rem;
    right: 1rem;
    overflow: hidden;
    transition: 0.5s ease-in;
    z-index: 100;
    transform: translateX(97%);
    transition: 0.5s ease;
    .title {
      height: 100%;
      cursor: pointer;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        width: 2em;
        height: 100%;
        border-radius: 10px 0px 0px 10px;
        background-color: ${action};
        li {
          list-style: none;
          color: white;
          font-size: 1.8rem;
        }
      }
    }
    .notescontainer {
      display: flex;
      padding: 5px 5px;
      height: 100%;
      overflow-x: hidden;
      border-radius: 0px 10px 10px 0px;
      background-color: #4988b1;
      .initialcontainer {
        padding: 5px 5px 0px;

        ::-webkit-scrollbar-track {
          background-color: #4988b1;
        }

        ::-webkit-scrollbar {
          height: 3px;
          background-color: #4988b1;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 100px;
          background-color: rgba(53, 53, 53, 0.81);
        }
      }
      .notes {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
        textarea {
          width: 100%;
          height: 100%;
          border: none;
          resize: none;
          font-size: 16px;
          border-radius: 5px;
          background-color: #feffc2;
          padding: 5px;
        }
        .texareaother {
          display: flex;
          width: 100%;
          justify-content: space-between;
          button {
            height: 30px;
            width: 60px;
            float: right;
            background-color: ${action};
            color: white;
            font-size: 15px;
            font-weight: 600;
            outline: none;
            border: none;
            border-radius: 3px;
            cursor: pointer;
          }
          .date {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            p {
              color: white;
              margin-left: 5px;
            }
            input {
              border: none;
              padding: 5px;
              width: 5rem;
              border-radius: 10px;
              margin-left: 10px;
              background-color: #8cfbff;
              cursor: pointer;
            }
          }
        }
        textarea:focus {
          outline: none;
        }
        #txt {
          overflow: auto;
          overflow-x: hidden;
        }

        #txt::-webkit-scrollbar-track {
          background-color: white;
        }

        #txt::-webkit-scrollbar {
          width: 6px;
          background-color: #f5f5f5;
        }

        #txt::-webkit-scrollbar-thumb {
          border-radius: 100px;
          box-shadow: 3px 0px 12px 4px grey;
          background-color: rgba(53, 53, 53, 0.81);
        }
      }
    }
  }
  .active {
    transform: translateX(0%);
  }
`;

export default Notes;
