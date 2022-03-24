//vars
import { primary, accent, action } from "../../variables/colors";
//styled components
import styled from "styled-components";
const Card = ({ bg, title, course, note, time }) => {
  return (
    <CardStyle bg={bg}>
      <h1>{title}</h1>
      <h2>{course}</h2>
      {note ? <h3>{note}</h3> : ""}
      <p>{time}</p>
      <button>View in Map</button>
    </CardStyle>
  );
};
const CardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 19rem;
  height: 9rem;
  padding: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.bg};
  h1 {
    font-size: 1.6rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.1rem;
  }
  h1,
  h2,
  h3,
  p {
    color: white;
  }
  button {
    position: absolute;
    height: 3rem;
    width: 4rem;
    color: white;
    background-color: ${action};
    border-radius: 5px;
    bottom: 10px;
    right: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: white;
      color: ${action};
    }
  }
  @media only screen and (max-width: 1290px) {
    width: 17rem;
    height: 9rem;
    padding: 10px;
    h1 {
      font-size: 1.4rem;
    }
    h2 {
      font-size: 1.3rem;
    }
    h3 {
      font-size: 0.9rem;
    }
  }
  @media only screen and (max-width: 1180px) {
    width: 13rem;
    height: 7rem;
    padding: 10px;
    h1 {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 1rem;
    }
    h3 {
      font-size: 0.7rem;
    }
  }
  @media only screen and (max-width: 680px) {
    width: 90%;
    min-height: 9rem;
    padding: 10px 20px;
    justify-content: space-evenly;
    h1 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 0.9rem;
    }
  }
`;
export default Card;
