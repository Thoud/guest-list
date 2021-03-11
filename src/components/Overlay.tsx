/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  setOverlay: (value: boolean) => void;
};

const overlayStyling = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(188, 188, 188, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const containerStyling = css`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px #00000040;
  padding: 2rem 4rem;

  p {
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  button {
    padding: 0.4rem 1.2rem;
  }
`;

export default function Overlay(props: Props) {
  return (
    <div css={overlayStyling}>
      <div css={containerStyling}>
        <p>Event Details set!</p>
        <button onClick={() => props.setOverlay(false)}>OK</button>
      </div>
    </div>
  );
}
