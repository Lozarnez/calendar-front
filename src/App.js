import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LogIn,
  EventosMes,
  EventsByDay
} from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>ruta no existe</div>} />
        <Route path="/" element={<EventosMes />} />
        <Route path="/eventos-dia" element={<EventsByDay />} />
        <Route path="/eventos-semana" element={<div>Eventos semana</div>} />
        <Route path="/crear-evento" element={<div>Crear Evento</div>} />
        <Route path="/evento/:id" element={<div>Ver Evento</div>} />
        <Route path="/crear-orden" element={<div>Crear orden</div>} />
        <Route path="/orden/:id" element={<div>Ver Orden</div>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/recuperar-contraseña" element={<div>Recuperar contraseña</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
