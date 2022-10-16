import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  #root, body, html {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
