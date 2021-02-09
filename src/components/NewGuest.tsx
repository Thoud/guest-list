/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridNewGuest = css`
  grid-area: 2 / 1;
`;

const newGuestStyling = css`
  background-color: #ffffff;
  width: 55.25vw;
  height: 15vw;
  margin-left: 4.792vw;
  box-shadow: 0px 4px 4px #00000040;
  padding: 1.563vw;
  display: grid;
  grid-template:
    21.86% 19.07% 18.14% 21.86% 19.07% /
    repeat(2, 6.1%) 36.3% 3% 18.06% repeat(2, 3% 12.22%);

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
    margin-top: 0.5vw;
  }

  #attending {
    grid-area: 5 / 1;
    margin: 0.8vw 0 0 0;
  }

  button {
    grid-area: 5 / 7 / 5 / 10;
  }

  @media screen and (max-width: 1425px) {
    width: 81.563vw;
    height: 22vw;
    padding: 3.125vw;
    margin: 0 0 4.583vw 0;
  }

  @media screen and (max-width: 950px) {
    width: 93vw;
    height: 40vw;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40vh;

    label {
      margin-bottom: 1vw;
    }

    input {
      margin-bottom: 4vw;
    }

    button {
      margin-top: 4vw;
    }

    input,
    button {
      height: 4vh;
    }

    #attending {
      margin: 0;
      height: auto;
    }
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
