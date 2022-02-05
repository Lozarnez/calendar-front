import React from 'react';
import './styles.css';
import { EventRow } from '../index';
import {Contenedor} from './styledComponents';

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

export default function CalendarDayEvents({ bgColor, location }) {
  const path = location.pathname;
  return (
    <Contenedor bgColor={bgColor}>
      {path === "/" &&
        <div className='contenedorTitulo'>
          <span className='tituloDia'>Eventos programados para hoy</span>
        </div>
      }
      <EventRow events={eventosArr} location={location} />
    </Contenedor>
  );
}
