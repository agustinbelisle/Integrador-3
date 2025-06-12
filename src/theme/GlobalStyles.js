// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset margin and padding */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
      font-weight: 400;
      font-size: 1.1rem;
    font-family: 'Segoe UI', sans-serif;
    background-color: #fff;
  }
`;

export default GlobalStyle;
