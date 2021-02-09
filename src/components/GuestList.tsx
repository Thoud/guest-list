/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridGuestList = css`
  grid-area: 1 / 2 / span 2 / 2;

  h2 {
    margin-left: 4.892vw;
  }

  @media screen and (max-width: 1425px) {
    margin-bottom: 8.913vw;

    h2 {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 950px) {
    h2 {
      margin-left: 3.125vw;
    }
  }
`;

const guestListStyling = css`
  background-color: #ffffff;
  width: 29.375vw;
  height: 37.5vw;
  margin-left: 4.892vw;
  box-shadow: 0px 4px 4px #00000040;
  padding: 1.563vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .filter {
    width: 100%;
    margin-bottom: 1.563vw;
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 0.514vw;
  }

  .attendeesList {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .attendees {
    background-color: #d9d9d9;
    width: 100%;
    height: 5vw;
    border: none;
    margin-bottom: 1.563vw;
  }

  @media screen and (max-width: 1425px) {
    width: 81.563vw;
    padding: 3.125vw;
    margin-left: 0;
    height: 100%;

    .attendeesList {
      overflow: visible;
    }
  }

  @media screen and (max-width: 950px) {
    width: 93vw;

    .filter {
      margin-bottom: 3.222vw;
    }

    button {
      padding: 2.15vw;
    }

    .attendees {
      height: 5vh;
    }
  }
`;

export default function GuestList() {
  return (
    <div css={gridGuestList}>
      <h2>Guest List</h2>

      <div css={guestListStyling}>
        <div className="filter">
          <button>Attending</button>
          <button>Not attending</button>
          <button>Clear list</button>
        </div>

        <div className="attendeesList">
          <div className="attendees" />
        </div>
      </div>
    </div>
  );
}
