import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/eventsReducer';

export default configureStore({
  reducer: {
    events: eventsReducer,
  },
})