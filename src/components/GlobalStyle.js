//styled
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
  cursor: pointer;
}
::-webkit-scrollbar-thumb {
  background: #313131;
  border-radius: 50px;
  cursor: pointer;
}
`;

export default GlobalStyle;
