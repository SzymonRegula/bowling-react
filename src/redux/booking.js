import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDay: new Date().toLocaleDateString(),
  booked: [],
  chosen: [],
  contactData: { firstName: '', lastName: '', email: '' },
};

export const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBooked: (state, action) => {
      const booked = Object.values(action.payload).flatMap(
        (bookingsWithContact) => bookingsWithContact.bookings
      );

      console.log(booked);
      state.booked = booked;
    },
    addBooked: (state, action) => {
      state.booked = [...state.booked, ...action.payload];
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },

    toggleChosen: (state, action) => {
      const newChoice = action.payload;
      const index = state.chosen.findIndex(
        (choice) => choice.id === newChoice.id
      );
      if (index === -1) {
        state.chosen.push(newChoice);
      } else {
        state.chosen.splice(index, 1);
      }
    },
    setContactData: (state, action) => {
      state.contactData = {
        ...state.contactData,
        ...action.payload,
      };
    },
  },
});

export const {
  setBooked,
  addBooked,
  setSelectedDay,
  toggleChosen,
  setContactData,
} = bookingSlice.actions;

export default bookingSlice.reducer;
