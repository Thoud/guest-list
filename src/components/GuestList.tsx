/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridGuestList = css`
  grid-area: 1 / 2 / span 2 / 2;

  h2 {
    margin-left: 4.892vw;
  }
`;

const guestListStyling = css`
  background-color: #ffffff;
  width: 29.375vw;
  height: 36.118vw;
  margin-left: 4.892vw;
  box-shadow: 0px 4px 4px #00000040;
  padding: 1.563vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .filter {
    width: 26.272vw;
    margin-bottom: 1.563vw;
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 0.514vw;
  }

  .container {
    width: 26.272vw;
    height: 100%;
    overflow: scroll;
  }

  .attendees {
    background-color: #d9d9d9;
    width: 100%;
    height: 5vw;
    border: none;
    margin-bottom: 1.563vw;
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

        <div className="container">
          <div className="attendees" />
        </div>
      </div>
    </div>
  );
}
