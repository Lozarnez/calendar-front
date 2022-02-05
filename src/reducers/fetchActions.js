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
      sessionStorage.setItem("token", data.token);
      return true;
    } else {
      return false;
    }
  }
);

export const fetchCrearEvento = createAsyncThunk(
  'fetchCrearEvento',
  async (event, thunkAPI) => {
    const response = await fetch(`${connection.url}/eventos/crear-evento`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
      body: JSON.stringify(event),
    });
    const data = await response.json();
    if (data.success) {
      return data;
    }
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