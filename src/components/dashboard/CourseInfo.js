//styled components
import styled from "styled-components";
import { primary } from "../../variables/colors";
import Card from "./Card";
//components
const CourseInfo = () => {
  return (
    <InfoStyle>
      <Card
        bg="#31ADD4"
        title="CURRENT CLASS"
        course="MAT116"
        time="11:20 AM"
      />
      <Card
        bg="#7A77BF"
        title="REMINDER"
        course="CSE482"
        note="mid canceled"
        time="2:40 PM"
      />
      <Card
        bg="#995697"
        title="UPCOMING CLASS "
        course="CSE482"
        time="2:40 PM"
      />
      <Card bg="#4F94D3" title="WEEKLY EVENT" note="Class of on sunday" />
    </InfoStyle>
  );
};
const InfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 40rem;
  height: 90%;
  @media only screen and (min-width: 1600px) {
    width: 50rem;
  }
  @media only screen and (max-width: 1290px) {
    width: 35rem;
  }
  @media only screen and (max-width: 1180px) {
    width: 28rem;
  }
  @media only screen and (max-width: 980px) {
    justify-content: center;
    overflow-y: scroll;
    gap: 1rem;
  }
  @media only screen and (max-width: 770px) {
    justify-content: center;
    width: 80vw;
    overflow-y: scroll;
    gap: 2rem;
  }
  @media only screen and (max-width: 680px) {
    background-color: white;
    width: 98vw;
    padding: 10px 0px;
    border-radius: 8px;
    justify-content: flex-start;
    gap: 5px;
    height: 10rem;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
export default CourseInfo;
