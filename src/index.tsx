import React from 'react';
import ReactDOM from 'react-dom';
import { css, Global } from '@emotion/react';
import App from './components/App';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    width: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
