/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridGuestList = css`
  grid-area: 1 / 2 / span 2 / 2;
`;

const guestListStyling = css`
  background-color: #ffffff;
  width: 20.729vw;
  margin-left: 4.892vw;
  box-shadow: 0px 4px 4px #00000040;
`;

export default function GuestList() {
  return (
    <div css={gridGuestList}>
      <h2>Guest List</h2>

      <div css={guestListStyling}>
        <button>Attending</button>
        <button>Not attending</button>

        <div />
      </div>
    </div>
  );
}
