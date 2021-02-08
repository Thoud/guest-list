/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridNewGuest = css`
  grid-area: 2 / 1;
`;

const newGuestStyling = css`
  background-color: #ffffff;
  width: 55.25vw;
  margin-left: 4.792vw;
  box-shadow: 0px 4px 4px #00000040;
  padding: 1.563vw;
  display: grid;
  grid-template:
    2.448vw 2.135vw 2.031vw 2.448vw 2.135vw /
    repeat(2, 3.177vw) 18.927vw 1.563vw 9.411vw repeat(2, 1.563vw 6.372vw);

  input,
  button {
    background-color: #d9d9d9;
    border: none;
  }

  #labelFirstName {
    grid-area: 1 / 1 / 1 / 4;
  }

  #firstName {
    grid-area: 2 / 1 / 2 / 4;
  }

  #labelLastName {
    grid-area: 1 / 5 / 1 / 10;
  }

  #lastName {
    grid-area: 2 / 5 / 2 / 10;
  }

  #labelAttending {
    grid-area: 5 / 2;
  }

  #attending {
    grid-area: 5 / 1;
    margin: 6.5px 0 0 0;
  }

  button {
    grid-area: 5 / 7 / 5 / 10;
  }
`;

export default function NewGuest() {
  return (
    <div css={gridNewGuest}>
      <h2>New Guest</h2>

      <div css={newGuestStyling}>
        <label id="labelFirstName" htmlFor="firstName">
          First Name
        </label>
        <input id="firstName" type="text" />

        <label id="labelLastName" htmlFor="lastName">
          Last Name
        </label>
        <input id="lastName" type="text" />

        <label id="labelAttending" htmlFor="attending">
          Attending
        </label>
        <input id="attending" type="checkbox" />

        <button>Add Guest</button>
      </div>
    </div>
  );
}
