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
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
