import { css, Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
    color: #4d4545;
  }

  body {
    margin: 0;
    width: 100%;
    background-color: #d9d9d9;
  }

  h1 {
    font-size: 2.667rem;
    font-weight: bold;
    margin: 3.159vw 0 2.135vw 4.792vw;
  }

  h2 {
    font-size: 1.333rem;
    font-weight: 500;
    margin: 0 0 1.354vw 4.792vw;
  }

  input,
  button {
    background-color: #d9d9d9;
    border: none;
  }

  button {
    cursor: pointer;
  }

  @media screen and (max-width: 1425px) {
    * {
      font-size: 20px;
    }

    #root {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1,
    h2 {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 1170px) {
    * {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 1035px) {
    * {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 950px) {
    h1,
    h2 {
      margin-left: 3.125vw;
    }
  }

  @media screen and (max-width: 820px) {
    h2 {
      margin-top: 4vh;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
