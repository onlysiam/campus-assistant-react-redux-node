//style
import styled from "styled-components";
import { tertiary, action } from "../../variables/colors";
//animation
import { motion } from "framer-motion";
import { cardAnimation2 } from "../Animation";
const Infocard = ({ title, onClick, image }) => {
  return (
    <InfocardStyles variants={cardAnimation2} initial="hidden" animate="show">
      <h1>{title}</h1>
      <button onClick={() => onClick()}>
        <img src={image} alt="" />
      </button>
    </InfocardStyles>
  );
};

const InfocardStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 10px;
  width: 24rem;
  height: 20rem;
  padding: 1rem;
  background: linear-gradient(to top, ${tertiary} 0%, ${action} 70%);
  h1 {
    font-size: 1.5rem;
    color: white;
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
  img {
    height: 14rem;
    width: 14rem;
    border: 2px solid white;
    border-radius: 20px;
    padding: 2rem;
    transition: 0.5s ease;
    cursor: pointer;
    &:hover {
      transform: perspective(500px) translate3d(-5px, -5px, 5px);
    }
  }
  @media only screen and (max-width: 680px) {
    width: 13rem;
    height: 10rem;
    gap: 1rem;
    h1 {
      font-size: 1rem;
    }
    img {
      height: 6rem;
      width: 6rem;
      padding: 1rem;
      transition: 0.5s ease;
      cursor: pointer;
      &:hover {
        transform: perspective(500px) translate3d(-5px, -5px, 5px);
      }
    }
  }
`;
export default Infocard;
