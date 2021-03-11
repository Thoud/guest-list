/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Event, Guest, NewGuestType } from '../types';
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

const baseUrl = 'https://express-guest-list-api.herokuapp.com';

// async function deleteGuest(id: number, url: string) {
//   const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
//   const deletedGuest = await response.json();
//   return deletedGuest;
// }

export default function App() {
  const [event, setEvent] = useState<Event>();
  const [guestList, setGuestList] = useState<Guest[]>();
  const [newGuest, setNewGuest] = useState<NewGuestType>();

  useEffect(() => {
    async function getEvent(url: string, setter: (value: Event) => void) {
      const response = await fetch(`${url}/event`);
      const eventDetails = await response.json();
      setter(eventDetails);
    }

    async function getGuests(url: string, setter: (value: Guest[]) => void) {
      const response = await fetch(`${url}/`);
      const allGuests = await response.json();
      setter(allGuests);
    }

    getEvent(baseUrl, setEvent);
    getGuests(baseUrl, setGuestList);
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

    if (event) {
      console.log('sending new event details');

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

  useEffect(() => {
    async function postNewGuest(
      url: string,
      setter: (value: Guest[]) => void,
      nameFirst: string,
      nameLast: string,
      attend: boolean,
    ) {
      const response = await fetch(`${url}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: nameFirst,
          lastName: nameLast,
          attending: attend,
        }),
      });

      const guest = await response.json();

      if (guestList) {
        const newGuestList = guestList.concat(guest);
        setter(newGuestList);
      }
    }

    if (newGuest) {
      if (newGuest.firstName !== '' && newGuest.lastName !== '') {
        console.log('sending new guest');
        console.log(newGuest);

        postNewGuest(
          baseUrl,
          setGuestList,
          newGuest.firstName,
          newGuest.lastName,
          newGuest.attending,
        );

        setNewGuest({ firstName: '', lastName: '', attending: false });
      }
    }
  }, [newGuest, guestList]);

  return (
    <>
      <h1>Guest List Manager</h1>

      {event && guestList && (
        <div css={grid}>
          <EventDetails event={event} setEvent={setEvent} />
          <NewGuest setNewGuest={setNewGuest} />
          <GuestList guestList={guestList} />
        </div>
      )}
    </>
  );
}
