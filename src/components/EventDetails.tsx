/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const gridEventDetails = css`
  grid-area: 1 / 1;
`;

const eventDetailsStyling = css`
  background-color: #ffffff;
  width: 39.896vw;
  margin: 0 0 4.583vw 4.792vw;
  box-shadow: 0px 4px 4px #00000040;
`;

export default function EventDetails() {
  return (
    <div css={gridEventDetails}>
      <h2>Event Details</h2>

      <div css={eventDetailsStyling}>
        <label htmlFor="eventName">Event Name</label>
        <input id="eventName" type="text" />

        <label htmlFor="date">Date</label>
        <input id="date" type="date" />

        <label htmlFor="time">Time</label>
        <input id="time" type="time" />

        <label htmlFor="maxGuests">Max Guests</label>
        <input id="maxGuests" type="number" />

        <label htmlFor="address">Address</label>
        <input id="address" type="text" />

        <button>Set Event Details</button>
      </div>
    </div>
  );
}
