//vars
import { primary, action } from "../../variables/colors";
//styled components
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { preloaderAnimation } from "../Animation";

const Preloader = () => {
  return (
    <Loader
      variants={preloaderAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="lds-ring"
    >
      <div className="spinner-box">
        <div className="circle-border">
          <div className="circle-core"></div>
        </div>
      </div>
    </Loader>
  );
};
const Loader = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${primary};
  z-index: 20;

  .circle-border {
    width: 150px;
    height: 150px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${action};
    background: linear-gradient(
      0deg,
      rgba(80, 195, 201, 0) 33%,
      ${action} 100%
    );
    animation: spin 0.8s linear 0s infinite;
  }

  .circle-core {
    width: 100%;
    height: 100%;
    background-color: ${primary};
    border-radius: 50%;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
export default Preloader;
