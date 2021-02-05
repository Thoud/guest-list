/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GuestList from './GuestList';
import NewGuest from './NewGuest';
import EventDetails from './EventDetails';

const headingStyle = css`
  font-size: 2.667rem;
  margin: 4.115vw 0 2.135vw 4.792vw;
`;

export default function App() {
  return (
    <>
      <h1 css={headingStyle}>Guest List Manager</h1>
      <EventDetails />
      <NewGuest />
      <GuestList />
    </>
  );
}
