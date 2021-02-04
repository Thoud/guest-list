/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const test = css`
  width: 1000px;
  height: 1000px;
  background-color: red;
`;

export default function App() {
  return <div css={test} />;
}
