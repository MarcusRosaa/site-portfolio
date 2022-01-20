import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background: rgb(29,30,30);
    background: linear-gradient(90deg, #1d1e1e  0%, #1d1e1e 50%, #020202 100%);
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
