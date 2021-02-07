/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridNewGuest = css`
  grid-area: 2 / 1;
`;

const newGuestStyling = css`
  background-color: #ffffff;
  width: 39.896vw;
  margin-left: 4.792vw;
  box-shadow: 0px 4px 4px #00000040;
`;

export default function NewGuest() {
  return (
    <div css={gridNewGuest}>
      <h2>New Guest</h2>

      <div css={newGuestStyling}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" />

        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" />

        <label htmlFor="attending">Attending</label>
        <input id="attending" type="checkbox" />

        <button>Add Guest</button>
      </div>
    </div>
  );
}
