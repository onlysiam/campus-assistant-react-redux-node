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
  top: -7rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
`;
const Circle2 = styled.div`
  position: absolute;
  top: -3.5rem;
  right: -5rem;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
  background-color: rgba(106, 224, 217, 0.5);
`;
export default Circles;
