/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  setWarning: (value: boolean) => void;
};

const warningOverlayStyling = css`
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

export default function WarningOverlay(props: Props) {
  return (
    <div css={warningOverlayStyling}>
      <div css={containerStyling}>
        <p>Please insert a first and last name to your new Guest!</p>
        <button onClick={() => props.setWarning(false)}>OK</button>
      </div>
    </div>
  );
}
