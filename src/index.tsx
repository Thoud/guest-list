import React from 'react';
import ReactDOM from 'react-dom';
import { css, Global } from '@emotion/react';
import App from './components/App';

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
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
    margin: 4.115vw 0 2.135vw 4.792vw;
  }

  h2 {
    font-size: 1.333rem;
    font-weight: 500;
    margin: 0 0 1.354vw 4.792vw;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
