import styled from "styled-components";
const Hamburgermenu = ({ onClick }) => {
  return (
    <Hamburger onClick={() => onClick()}>
      <div class="menu-button"></div>
    </Hamburger>
  );
};

const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 2rem;
  cursor: pointer;
  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }
`;
export default Hamburgermenu;
