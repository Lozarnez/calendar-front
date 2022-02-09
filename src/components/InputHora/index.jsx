import React from 'react';
import { Contenedor, Titulo, Horario, ContenedorHora } from './styledComponents';

export default function InputHora(props) {
  return (
    <Contenedor onClick={props.onClick}>
      <Titulo>{props.text}</Titulo>
      <ContenedorHora>{props.hour}</ContenedorHora>
      <Horario>{props.time}</Horario>
    </Contenedor>
  );
}
