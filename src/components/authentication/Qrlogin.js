import { useNavigate } from "react-router-dom";
//image
import cam from "../../img/cam.svg";
import phone from "../../img/phone.svg";
import qr from "../../img/qr.png";

//styled
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { action } from "../../variables/colors";
const Qrlogin = () => {
  const navigate = useNavigate();
  return (
    <ButtonStyle className="camImg" onClick={() => navigate("/qrlogin")}>
      <div className="qrlogin">
        <h1>Scan QR Code</h1>
        <img className="desktopHoverScape" src={cam} alt="cam" />
        <img className="desktopHoverQR" src={qr} alt="" />
        <img className="desktopHover" src={phone} alt="" />
      </div>
    </ButtonStyle>
  );
};

//styled Components
const ButtonStyle = styled(motion.div)`
  .btn {
    display: none;
  }
  .qrlogin {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 28rem;
    height: 22rem;
    background-color: #50c2c9;
    border: none;
    border-radius: 10px;
    padding: 0px 50px 0px 50px;
    transition: 1s;
    cursor: pointer;
    .desktopHover {
      position: absolute;
      opacity: 0;
      height: 35vh;
      transform: translateX(300%);
      transition: 0.5s;
    }
    .desktopHoverScape {
      height: 10vh;
      transition: 1s;
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
      color: white;
      font-size: 4vh;
      font-weight: 400;
      transition: 1s;
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
  }
  @media only screen and (max-width: 1000px) {
    .qrlogin {
      width: 20rem;
      height: 18rem;
    }
  }
  @media only screen and (max-width: 680px) {
    .qrlogin {
      display: none;
    }
  }
`;

export default Qrlogin;
