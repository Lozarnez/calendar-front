import { createAsyncThunk } from '@reduxjs/toolkit';
import { connection } from '../connection';

export const fetchLogIn = createAsyncThunk(
  'fetchLogIn',
  async (credentials, thunkAPI) => {
    const response = await fetch(`${connection.url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      return data;
    }
    return response.json();
  }
);

export const fetchEventosPorPeriodo = createAsyncThunk(
  'events/fetchEvents',
  async (dateRange, thunkAPI) => {
    const response = await fetch(`${connection.url}/EventosPorPeriodo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Bearer': connection.token
      },
      body: JSON.stringify(dateRange),
    });
    return response;
  }
);