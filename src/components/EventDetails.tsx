/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Event } from '../types';
import Overlay from './Overlay';

const gridEventDetails = css`
  grid-area: 1 / 1;
`;

const eventDetailsStyling = css`
  background-color: #ffffff;
  width: 55.25vw;
  height: 15vw;
  margin: 0 0 4.583vw 4.792vw;
  box-shadow: 0px 4px 4px #00000040;
  padding: 1.563vw;
  display: grid;
  grid-template:
    21.86% 19.07% 18.14% 21.86% 19.07% /
    48.5% 3% 18.06% repeat(2, 3% 12.22%);

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

  @media screen and (max-width: 1425px) {
    width: 81.563vw;
    height: 22vw;
    padding: 3.125vw;
    margin-left: 0;
  }

  @media screen and (max-width: 950px) {
    width: 93vw;
    height: 40vw;
  }

  @media screen and (max-width: 820px) {
    display: flex;
    flex-wrap: wrap;
    height: 70vh;

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

    label,
    input,
    button {
      flex: 1 0 100%;
    }
  }
`;

type Props = {
  event: Event;
  setEvent: (value: Event) => void;
};

export default function EventDetails(props: Props) {
  const [userInput, setUserInput] = useState(props.event);
  const [overlay, setOverlay] = useState(false);

  return (
    <div css={gridEventDetails}>
      <h2>Event Details</h2>

      <div css={eventDetailsStyling}>
        <label id="labelEventName" htmlFor="eventName">
          Event Name
        </label>
        <input
          id="eventName"
          type="text"
          value={userInput.eventName}
          onChange={({ target }) => {
            setUserInput({ ...userInput, eventName: target.value });
          }}
        />

        <label id="labelDate" htmlFor="date">
          Date
        </label>
        <input
          id="date"
          type="date"
          value={userInput.date}
          onChange={({ target }) => {
            setUserInput({ ...userInput, date: target.value });
          }}
        />

        <label id="labelTime" htmlFor="time">
          Time
        </label>
        <input
          id="time"
          type="time"
          value={userInput.time}
          onChange={({ target }) => {
            setUserInput({ ...userInput, time: target.value });
          }}
        />

        <label id="labelMaxGuests" htmlFor="maxGuests">
          Max Guests
        </label>
        <input
          id="maxGuests"
          type="number"
          min="0"
          value={userInput.maxGuests}
          onChange={({ target }) => {
            setUserInput({ ...userInput, maxGuests: target.value });
          }}
        />

        <label id="labelAdress" htmlFor="adress">
          Address
        </label>
        <input
          id="adress"
          type="text"
          value={userInput.address}
          onChange={({ target }) => {
            setUserInput({ ...userInput, address: target.value });
          }}
        />

        <button
          onClick={() => {
            setOverlay(true);
            props.setEvent(userInput);
          }}
        >
          Set Event Details
        </button>

        {overlay && <Overlay setOverlay={setOverlay} />}
      </div>
    </div>
  );
}
