export type Event = {
  eventName: string;
  address: string;
  date: string;
  time: string;
  maxGuests: string;
};

export type Guest = {
  id: string;
  firstName: string;
  lastName: string;
  attending: boolean;
};

export type NewGuestType = {
  firstName: string;
  lastName: string;
  attending: boolean;
};
