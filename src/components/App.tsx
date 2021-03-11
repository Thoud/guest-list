/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Event } from '../types';
import EventDetails from './EventDetails';
import GuestList from './GuestList';
import NewGuest from './NewGuest';

const grid = css`
  display: grid;
  grid-template: 0.95fr 0.95fr / 1.5fr 1fr;

  @media screen and (max-width: 1425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Code to interact with the backend
const baseUrl = 'https://express-guest-list-api.herokuapp.com';

// async function getGuests(url: string) {
//   const response = await fetch(`${url}/`);
//   const allGuests = await response.json();
//   return allGuests;
// }

// async function postNewGuest(
//   url: string,
//   nameFirst: string,
//   nameLast: string,
//   attend: boolean,
// ) {
//   const response = await fetch(`${url}/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstName: nameFirst,
//       lastName: nameLast,
//       attending: attend,
//     }),
//   });
//   const createdGuest = await response.json();
//   return createdGuest;
// }

// async function patchGuest(
//   id: number,
//   url: string,
//   nameFirst: string,
//   nameLast: string,
//   attend: boolean,
// ) {
//   const response = await fetch(`${url}/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstName: nameFirst,
//       lastName: nameLast,
//       attending: attend,
//     }),
//   });
//   const updateGuest = await response.json();
//   return updateGuest;
// }

// async function deleteGuest(id: number, url: string) {
//   const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
//   const deletedGuest = await response.json();
//   return deletedGuest;
// }

export default function App() {
  const [event, setEvent] = useState<Event>();
  // const [guestList, setGuestList] = useState([]);
  // const [newGuest, setNewGuest] = useState({});
  // const [updateGuest, setUpdateGuest] = useState({});
  // const [removeGuest, setRemoveGuest] = useState({});

  useEffect(() => {
    async function getEvent(url: string, setter: (value: Event) => void) {
      const response = await fetch(`${url}/event`);
      const eventDetails = await response.json();
      console.log(eventDetails);
      setter(eventDetails);
    }

    getEvent(baseUrl, setEvent);
  }, []);

  useEffect(() => {
    async function patchEvent(
      url: string,
      name: string,
      eventAddress: string,
      eventDate: string,
      eventTime: string,
      eventMaxGuests: string,
    ) {
      await fetch(`${url}/modEvent`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: name,
          address: eventAddress,
          date: eventDate,
          time: eventTime,
          maxGuests: eventMaxGuests,
        }),
      });
    }

    console.log('sending');

    if (event) {
      patchEvent(
        baseUrl,
        event.eventName,
        event.address,
        event.date,
        event.time,
        event.maxGuests,
      );
    }
  }, [event]);

  return (
    <>
      <h1>Guest List Manager</h1>

      {event && (
        <div css={grid}>
          <EventDetails event={event} setEvent={setEvent} />
          <NewGuest />
          <GuestList />
        </div>
      )}
    </>
  );
}
