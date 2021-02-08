/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridEventDetails = css`
  grid-area: 1 / 1;
`;

const eventDetailsStyling = css`
  background-color: #ffffff;
  width: 55.25vw;
  margin: 0 0 4.583vw 4.792vw;
  box-shadow: 0px 4px 4px #00000040;
  padding: 1.563vw;
  display: grid;
  grid-template:
    2.448vw 2.135vw 2.031vw 2.448vw 2.135vw /
    25.281vw 1.563vw 9.411vw repeat(2, 1.563vw 6.372vw);
  /* First Breackpoint: 1425 */

  #labelEventName {
    grid-area: 1 / 1;
  }

  #eventName {
    grid-area: 2 / 1;
  }

  #labelDate {
    grid-area: 1 / 3;
  }

  #date {
    grid-area: 2 / 3;
  }

  #labelTime {
    grid-area: 1 / 5;
  }

  #time {
    grid-area: 2 / 5;
  }

  #labelMaxGuests {
    grid-area: 1 / 7;
  }

  #maxGuests {
    grid-area: 2 / 7;
  }

  #labelAdress {
    grid-area: 4 / 1;
  }

  #adress {
    grid-area: 5 / 1;
  }

  button {
    grid-area: 5 / 5 / 6 / 8;
  }
`;

export default function EventDetails() {
  return (
    <div css={gridEventDetails}>
      <h2>Event Details</h2>

      <div css={eventDetailsStyling}>
        <label id="labelEventName" htmlFor="eventName">
          Event Name
        </label>
        <input id="eventName" type="text" />

        <label id="labelDate" htmlFor="date">
          Date
        </label>
        <input id="date" type="date" />

        <label id="labelTime" htmlFor="time">
          Time
        </label>
        <input id="time" type="time" />

        <label id="labelMaxGuests" htmlFor="maxGuests">
          Max Guests
        </label>
        <input id="maxGuests" type="number" />

        <label id="labelAdress" htmlFor="adress">
          Address
        </label>
        <input id="adress" type="text" />

        <button>Set Event Details</button>
      </div>
    </div>
  );
}
