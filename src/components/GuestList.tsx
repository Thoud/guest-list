/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Guest } from '../types';

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

  .attendeesList {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .attendees {
    background-color: #d9d9d9;
    width: 100%;
    border: none;
    margin-bottom: 1.563vw;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .attendees p {
    width: 100%;
    margin-left: 2rem;
    font-size: 1.1rem;
  }

  .attendees input {
    margin: 1rem 2rem;
  }

  .attendees button {
    margin-right: 2rem;
    background-color: #ffffff;
    padding: 0.5rem 1rem;
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
  }
`;

type Props = {
  guestList: Guest[];
};

export default function GuestList(props: Props) {
  return (
    <div css={gridGuestList}>
      <h2>Guest List</h2>

      <div css={guestListStyling}>
        <div className="attendeesList">
          {props.guestList.map((guest: Guest) => {
            return (
              <div key={guest.id} className="attendees">
                <p>
                  {guest.firstName} {guest.lastName}
                </p>

                <div>
                  {guest.attending && (
                    <input id="attending" type="checkbox" disabled checked />
                  )}
                  {!guest.attending && (
                    <input id="attending" type="checkbox" disabled />
                  )}

                  <label htmlFor="attending">Attending</label>
                </div>

                <button>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
