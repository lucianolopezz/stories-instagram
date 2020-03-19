import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;    
  }

  body {
    background-color: #fafafa;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
  }

  input {
    width: 100%;
    height: 48px;
    background-color: white;
    color: #262626;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    padding-left: 10px;

    ::placeholder {
      color: #dbdbdb;
    }
  }

  button {
    color: white;
    background-color: #3897f0;
    width: 100%;
    height: 48px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

`;

export default GlobalStyle;