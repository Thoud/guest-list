/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
