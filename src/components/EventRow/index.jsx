import React from 'react';
import { EventCard } from '../index';
import './styles.css';

export default function EventRow({ events, location }) {

  const isRoot = location.pathname === "/";

  return (
      events.map(event => (
      <div key={event.id} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0'}}>
          <span style={{ width: '10vh', fontSize: '1.5rem', fontWeight: 'bold', color: `${isRoot ? "#FFF" : "#4A4A4A"}` }}>{event.horaInicio}</span>
        <EventCard event={event} isGreen={isRoot} />
      </div>
    ))
  );
}
