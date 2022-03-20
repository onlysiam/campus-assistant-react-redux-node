import { useNavigate } from "react-router-dom";
//image
import cam from "../../img/cam.svg";
import phone from "../../img/phone.svg";
import qr from "../../img/qr.png";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
const Qrlogin = () => {
  const navigate = useNavigate();
  return (
    <ButtonStyle className="camImg" onClick={() => navigate("/qrlogin")}>
      <h1>Scan QR Code</h1>
      <img className="desktopHoverScape" src={cam} alt="cam" />
      <img className="desktopHoverQR" src={qr} alt="" />
      <img className="desktopHover" src={phone} alt="" />
    </ButtonStyle>
  );
};

//styled Components
const ButtonStyle = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    height: 50vh;
    background-color: #50c2c9;
    border: none;
    border-radius: 10px;
    padding: 0px 50px 0px 50px;
    cursor: pointer;
  .desktopHover {
    position: absolute;
    opacity: 0;
    height: 35vh;
    transform: translateX(300%);
    transition: 0.5s;
  }
  .desktopHoverQR {
    position: absolute;
    opacity: 0;
    height: 12vh;
    transition: 0.5s;
  }
  h1 {
    text-align: center;
    width: 35vw;
    font-size: 2vh;
    color: white;
  }
  img {
    height: 5vh;
  }
  .camIcon {
  }
  
  &:hover {
    h1 {
      transform: translateY(-500%);
    }
    .desktopHoverScape {
      transform: translateY(-500%);
    }
    .desktopHover {
      display: flex;
      transform: translateY(0%);
      opacity: 1;
    }
    .desktopHoverQR {
      opacity: 1;
    }
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 1s;

    h1 {
      font-size: 4vh;
      font-weight: 400;
      color: white;
      transition: 1s;
    }
    .desktopHoverScape {
      height: 10vh;
      transition: 1s;
    }
  }}
  }
`;

export default Qrlogin;
