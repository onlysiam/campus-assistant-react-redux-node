//styled
import styled from "styled-components";

const Circles = () => {
  return (
    <div>
      <Circle1 className="circle1"></Circle1>
      <Circle2 className="circle2"></Circle2>
    </div>
  );
};

const Circle1 = styled.div`
  position: absolute;
  right: 1rem;
  bottom: -4rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  @media only screen and (max-width: 680px) {
    left: -1rem;
    top: -6rem;
  }
`;
const Circle2 = styled.div`
  position: absolute;
  bottom: -1rem;
  right: -5rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
  @media only screen and (max-width: 680px) {
    left: -6rem;
    top: -3rem;
  }
`;
export default Circles;
