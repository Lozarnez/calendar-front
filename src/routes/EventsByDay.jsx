import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation, CalendarDayEvents, Header } from '../components';

const eventosArr = [
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
  { titulo: "Reunião", horaInicio: "10:00", horaFinal: "11:00" },
];

export default function EventsByDay() {
  const location = useLocation();
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <Navigation />
      <CalendarDayEvents events={eventosArr} location={location} />
    </div>
  );
}
