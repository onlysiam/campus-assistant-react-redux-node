import styled from "styled-components";
const Loadingpulse = ({ body }) => {
  return (
    <Pulse>
      <div>
        <h1>{body}</h1>
      </div>
    </Pulse>
  );
};
const Pulse = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(173, 173, 173, 1);
  animation: fade 2s linear infinite;
  h1 {
    color: white;
    font-size: 1.2rem;
  }
  @keyframes fade {
    0% {
      background-color: rgba(173, 173, 173, 0.8);
    }
    50% {
      background-color: rgba(173, 173, 173, 0.5);
    }
    100% {
      background-color: rgba(173, 173, 173, 0.8);
    }
  }
`;
export default Loadingpulse;
