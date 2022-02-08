import { createSlice } from '@reduxjs/toolkit';
import { fetchLogIn } from './fetchActions';

export const eventsReducer = createSlice({
  name: "events",
  initialState: {
    user: {
      isLogged: false,
    },
    events: [],
    currentEvent: {},
    currentOrder: {},
    currentDate: "",
    loading: false,
  },
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setCurrentEvent: (state, action) => {
      state.currentEvent = action.payload;
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogIn.fulfilled, (state, action) => {
      state.user.isLogged = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchLogIn.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { setEvents, setCurrentEvent, setCurrentOrder, setCurrentDate, setLoading } = eventsReducer.actions;

export default eventsReducer.reducer;