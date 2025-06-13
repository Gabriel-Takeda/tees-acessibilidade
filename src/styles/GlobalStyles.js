import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; 
  }
  body {
    font-family: 'Lora', serif;    
    background-color: #ffffff;
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    --primary: #e67e22; 
    --secondary: #333333;
    --bg: #ffffff;       
    --accent: #f39c12;   
    --text: #222222;  
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style: none;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }
  img {
    display: block;
    max-width: 100%;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 4px;
  }
`;

export default GlobalStyle;
