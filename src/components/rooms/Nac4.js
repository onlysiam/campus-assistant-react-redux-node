import { React, useEffect } from "react";

import bl from "../../img/bl.png";
import tl from "../../img/tl.png";
import br from "../../img/br.png";
import tr from "../../img/tr.png";

import lift from "../../img/lift.png";
import lift2 from "../../img/lift2.png";
import washroomm from "../../img/washroomm.png";
import washroomf from "../../img/washroomf.png";

//styled
import styled from "styled-components";
const Nac4 = ({ setpreloader }) => {
  useEffect(() => {
    setTimeout(function () {
      setpreloader(false);
    }, 500);
  });
  return (
    <Body>
      <div className="largeSection">
        <div className="roomRowLeft">
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="room">
            <h1>NAC417</h1>
            <img src={br} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift} alt="" />
          </div>
          <div className="room">
            <h1>NAC417</h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1>NAC416</h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1>NAC415</h1>
            <img src={br} alt="" />
          </div>

          <div className="lift">
            <h1>LIFT & STAIRS</h1>
            <img src={lift2} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomm} alt="" />
          </div>
          <div className="washroom">
            <h1>WASHROOM</h1>
            <img src={washroomf} alt="" />
          </div>
          <div className="room">
            <h1>NAC414</h1>
            <img src={br} alt="" />
          </div>
          <div className="room">
            <h1>NAC413</h1>
            <img src={tr} alt="" />
          </div>
          <div className="room">
            <h1>NAC412</h1>
            <img src={tr} alt="" />
          </div>
        </div>

        <div className="corridor">
          <h1>NAC 4th FLOOR</h1>
        </div>

        <div className="roomRowRight">
          <div className="room">
            <h1>NAC401</h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1>NAC402</h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1>NAC403</h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1>NAC404</h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1>NAC405</h1>
            <img src={bl} alt="" />
          </div>

          <div className="room">
            <h1>NAC406</h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1>NAC407</h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1>NAC408</h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1>NAC409</h1>
            <img src={bl} alt="" />
          </div>
          <div className="room">
            <h1>NAC410</h1>
            <img src={tl} alt="" />
          </div>
          <div className="room">
            <h1>NAC411</h1>
            <img src={tl} alt="" />
          </div>
        </div>
      </div>
      <div className="smallSection"></div>
    </Body>
  );
};

const Body = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 0;
  overflow: scroll;
  background-color: black;
  .largeSection {
    overflow: visible;
    display: flex;
    justify-content: space-evenly;
    height: 150%;
    border: 5px solid #9c9c9c;
    .roomRowLeft {
      display: flex;
      flex-direction: column;
      width: 150px;
      h1 {
        font-size: 15px;
      }
      h2 {
        font-size: 15px;
      }
      .washroom {
        height: 82.5px;

        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      .empty {
        background-color: transparent;
        height: 70vh;
      }
      .room {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
        h2 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      .lift {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      img {
        height: 165px;
      }
    }
    .corridor {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15vw;
      background-color: #18191a;
      h1 {
        color: wheat;
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }
    }
    .roomRowRight {
      display: flex;
      flex-direction: column;
      width: 150px;
      h1 {
        font-size: 15px;
      }
      h2 {
        font-size: 15px;
      }
      .door {
      }
      .room {
        height: 165px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          position: absolute;
          color: wheat;
          padding: 5px;
          background-color: #00000086;
        }
      }
      img {
        height: 165px;
        width: 150px;
      }
    }
  }

  @media (min-width: 800px) {
    height: 250%;
    .largeSection {
      display: flex;
      justify-content: space-evenly;
      height: 180%;
      border: 5px solid #9c9c9c;
      .roomRowLeft {
        display: flex;
        flex-direction: column;
        width: 220px;
        h1 {
          font-size: 20px;
        }
        h2 {
          font-size: 20px;
        }
        .door {
        }
        .room {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
        }
        img {
          height: 30vh;
          width: 220px;
        }
      }
      .corridor {
        width: 10vw;
        background-color: #18191a;
      }
      .roomRowRight {
        display: flex;
        flex-direction: column;
        width: 220px;
        h1 {
          font-size: 20px;
        }
        h2 {
          font-size: 20px;
        }
        .washroom {
          height: 15vh;

          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
        }
        .empty {
          background-color: transparent;
          height: 90vh;
        }
        .room {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
          h2 {
            position: absolute;
            color: wheat;
            font-size: 2vw;
            padding: 5px;
            background-color: #00000086;
          }
        }
        .lift {
          height: 30vh;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            position: absolute;
            color: wheat;
            padding: 5px;
            background-color: #00000086;
          }
        }
        img {
          height: 30vh;
          width: 220px;
        }
      }
    }
  }
`;

export default Nac4;
