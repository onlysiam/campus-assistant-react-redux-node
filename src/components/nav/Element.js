import { Link, useLocation } from "react-router-dom";
//styled-components
import styled from "styled-components";
//vars
import { accent } from "../../variables/colors";
//redux
import { useDispatch } from "react-redux";
//reducer
import { userLogout } from "../../store/user";
const Element = ({ body, target, logout }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const linkHandler = () => {
    if (logout) {
      dispatch(userLogout());
    }
  };
  return (
    <LinkStyle>
      <Link
        onClick={linkHandler}
        className={location.pathname === target ? "link active" : "link"}
        to={target}
      >
        <h1 className={location.pathname === target ? "active" : ""}>{body}</h1>
      </Link>
    </LinkStyle>
  );
};
const LinkStyle = styled.div`
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    cursor: pointer;
    h1 {
      font-size: 1.2rem;
      transition: 0.3s;
      margin-top: 7px;
      color: white;
      padding-bottom: 5px;
      border-bottom: 2px solid transparent;
      &:hover {
        color: ${accent};
        border-color: ${accent};
      }
    }
    .active {
      color: ${accent};
      border-color: ${accent};
    }
  }
  @media only screen and (max-width: 680px) {
    width: 100%;
    height: 10%;
    padding: 0rem 0.5rem;
    .link {
      border-radius: 8px;
      transition: 0.5s;
      h1 {
        &:hover {
          color: white;
          border-color: transparent;
        }
      }
      &:hover {
        background-color: #242552;
      }
      .active {
        color: white;
        border-color: transparent;
      }
    }
    .active {
      background-color: #242552;
      color: white;
      border-color: transparent;
    }
  }
`;
export default Element;
