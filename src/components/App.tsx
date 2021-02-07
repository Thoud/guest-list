/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GuestList from './GuestList';
import NewGuest from './NewGuest';
import EventDetails from './EventDetails';

const grid = css`
  display: grid;
  grid-template: 1fr 1fr / 1.5fr 1fr;
`;

export default function App() {
  return (
    <>
      <h1>Guest List Manager</h1>

      <div css={grid}>
        <EventDetails />
        <NewGuest />
        <GuestList />
      </div>
    </>
  );
}
