import React from 'react';
import { Card, Titulo, Hora } from './styledComponents';

export default function EventCard({ event, isGreen }) {
  return (
    <Card green={isGreen}>
      <Titulo green={isGreen}>{event.titulo}</Titulo>
      <Hora
        green={isGreen}
      >{`${event.horaInicio} - ${event.horaFinal}`}</Hora>
    </Card>
  );
}
