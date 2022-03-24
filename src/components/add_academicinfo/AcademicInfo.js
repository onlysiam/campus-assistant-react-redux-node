import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//style
import styled from "styled-components";
import { placeholder, secondary, action } from "../../variables/colors";
//animation
import { motion } from "framer-motion";
//components
//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import { getDegree } from "../../store/user";
import { infoUpdate } from "../../store/user";
import Profilepicture from "../profile/Profilepicture";
const AcademicInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.entities.user);
  const departments = useSelector(
    (state) => state.entities.suggestions.departments
  );
  const username = user.username;
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [deptId, setDeptId] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [department, setDepartment] = useState("");
  const [major, setMajor] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [completedCredit, setCompletedCredit] = useState("");
  const [totalCredit, setTotalCredit] = useState("");

  useEffect(() => {
    if (user.name) setName(user.name);
    if (user.degree) {
      dispatch(getDegree(user.degree));
    }
    if (user.degreeInfo.degree) {
      setDegree(user.degreeInfo.degree);
      setMajor(user.degreeInfo.degree.split(" ")[2]);
      setTotalCredit(user.degreeInfo.credit);
    }
  }, [user.degree, user.degreeInfo.degree]);

  //handlers
  const infoSaveHandler = () => {
    dispatch(
      infoUpdate({
        username,
        name,
        degree,
        major,
        cgpa,
        completedCredit,
        totalCredit,
        deptId,
        schoolId,
      })
    );
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const departmentHandler = (e) => {
    setDepartment(e.target.value);
    setDeptId(0);
    setSchoolId(0);
  };
  const deptIdhandler = () => {
    departments.forEach((dept) => {
      if (dept.dept_initial === department.toUpperCase()) {
        setDepartment(dept.dept_initial);
        setDeptId(dept.dept_id);
        setSchoolId(dept.school_id);
      }
    });
  };
  const degreeHandler = (e) => {
    setDegree(e.target.value);
  };
  const majorHandler = (e) => {
    setMajor(e.target.value);
  };
  const cgpaHandler = (e) => {
    setCgpa(e.target.value);
  };
  const completedCreditHandler = (e) => {
    setCompletedCredit(e.target.value);
  };
  const totalCreditHandler = (e) => {
    setTotalCredit(e.target.value);
  };

  return (
    <AcademicInfoStyle>
      <Profilepicture />
      <div className="info">
        <div className="name">
          <input
            onChange={nameHandler}
            type="text"
            placeholder="Name"
            value={name}
          />
        </div>
        <div className="degree inputs">
          <input
            onBlur={deptIdhandler}
            onChange={departmentHandler}
            type="text"
            placeholder="Department"
            value={department}
          />
          <input
            onChange={degreeHandler}
            type="text"
            placeholder="Degree"
            value={degree}
          />
          <input
            onChange={majorHandler}
            type="text"
            placeholder="Major"
            value={major}
          />
        </div>
        <div className="cgpaCredit inputs">
          <input
            onChange={cgpaHandler}
            type="text"
            placeholder="CGPA"
            value={cgpa}
          />
          <input
            onChange={completedCreditHandler}
            type="text"
            placeholder="Credit Completed"
            value={completedCredit}
          />
          <input
            onChange={totalCreditHandler}
            type="text"
            placeholder="Total Credit"
            value={totalCredit}
          />
        </div>
        <div className="desclaimer">
          <h1>
            <span>***</span> Your Information will not be publicly visible.
          </h1>
          <h1>
            <span>***</span> Informations like cgpa and credit hours are
            necessary for synchronize interactions.
          </h1>
        </div>
      </div>
      <button onClick={infoSaveHandler}>Save</button>
    </AcademicInfoStyle>
  );
};
const AcademicInfoStyle = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 75vh;
  width: 60vw;
  gap: 1rem;
  border-radius: 8px;
  padding: 4rem 4rem;
  background-color: ${action};
  button {
    position: absolute;
    width: 8rem;
    height: 3rem;
    background-color: ${secondary};
    color: white;
    font-size: 1rem;
    font-weight: 600;
    bottom: 4rem;
    right: 4rem;
    border: none;
    border-radius: 5px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: ${secondary};
      background-color: white;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 70%;
    gap: 1rem;
    justify-content: center;
    .desclaimer {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      width: 80%;
      gap: 1rem;
      h1 {
        span {
          color: red;
        }
        display: flex;
        gap: 0.5rem;
        color: white;
        font-weight: 400;
        font-size: 1rem;
      }
    }
    .name {
      width: 11rem;
    }

    input {
      height: 2.5rem;
      width: 100%;
      padding: 10px;
      background-color: white;
      color: black;
      font-size: 0.9rem;
      outline: none;
      border-radius: 5px;
      border: 1px solid #d1d1d1;
      transition: 0.3s;
    }
    input::placeholder {
      color: ${placeholder};
    }
    input:focus,
    textarea:focus,
    select:focus {
      outline: none;
      border-color: ${secondary};
    }
    input[class="input"][disabled] {
      background-color: ${placeholder};
    }
    .inputs {
      display: flex;
      gap: 1rem;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 1rem 1rem;
    height: 60vh;
    button {
      bottom: 1rem;
      right: 1rem;
    }
    .info {
      width: 100%;
      .desclaimer {
        margin-top: 1rem;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 680px) {
    padding: 1rem 1rem;
    height: 75vh;
    width: 90vw;
    justify-content: start;
    flex-direction: column;
    button {
      bottom: 1rem;
      right: 1rem;
    }

    .info {
      width: 100%;
      .desclaimer {
        margin-top: 1rem;
        width: 100%;
      }
    }
  }
`;
export default AcademicInfo;
