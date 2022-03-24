import { useEffect, useState } from "react";
//image
import hat from "../../img/dashboard_props/hat.svg";
//styled components
import styled from "styled-components";
//components
import CircleProp from "./CircleProp";
//functions
import {
  cgpaStrokeWidth,
  creditStrokeWidth,
  usersSemester,
} from "../../functions/academicInfoCalculation";
//redux
import { useSelector } from "react-redux";
const AcademicInfo = () => {
  const userinfo = useSelector((state) => state.entities.user.userinfo);

  const [cgpaStroke, setCgpaStroke] = useState("");
  const [creditStroke, setCreditStroke] = useState("");
  const [semesterStroke, setSemesterStroke] = useState("");

  useEffect(() => {
    usersSemester(userinfo.username);
    setCgpaStroke(cgpaStrokeWidth(userinfo.cgpa));
    setCreditStroke(creditStrokeWidth(userinfo.credit, userinfo.total_credit));
    setSemesterStroke(usersSemester(userinfo.username));
  }, [userinfo]);
  return (
    <AcademicStyle>
      <div className="name-degree">
        <h1>{userinfo.name}</h1>
        <p>
          <img src={hat} alt="" />
          {userinfo.degree_name}
        </p>
      </div>
      <div className="info">
        <CircleProp
          strokeValue={cgpaStroke}
          value={userinfo.cgpa}
          label="CGPA"
          startLimit="0"
          endLimit="4"
        />
        <CircleProp
          strokeValue={creditStroke}
          value={userinfo.credit}
          label="Credits"
          startLimit="0"
          endLimit={userinfo.total_credit}
        />
        <CircleProp
          strokeValue={cgpaStroke}
          value={usersSemester(userinfo.username) + "th"}
          label="Semester"
          startLimit="0"
          endLimit="12"
        />
      </div>
    </AcademicStyle>
  );
};
const AcademicStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  .name-degree {
    h1 {
      color: white;
      font-size: 2rem;
    }

    p {
      display: flex;
      align-items: center;
      margin-top: 10px;
      color: white;
      font-size: 1.5rem;
      gap: 5px;
      img {
        height: 25px;
      }
    }
  }
  .info {
    display: flex;
    gap: 1rem;
  }
  @media only screen and (max-width: 1030px) {
    .name-degree {
      h1 {
        font-size: 1.6rem;
      }
      p {
        img {
          height: 18px;
        }
        font-size: 1.2rem;
      }
    }
  }
  @media only screen and (max-width: 680px) {
    justify-content: center;
    .name-degree {
      h1 {
        font-size: 1.1rem;
      }
      p {
        img {
          height: 14px;
        }
        font-size: 0.9rem;
      }
    }
  }
`;
export default AcademicInfo;
