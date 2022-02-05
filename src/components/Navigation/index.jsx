import React from "react";
import { NavLink } from "react-router-dom";
import { Contenedor, Titulo } from "./styledComponents";

export default function Navigation() {

  let activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#691b33'
  },
    inactiveStyle = {
      textDecoration: 'none',
    };

  return (
    <Contenedor>
      <NavLink
        to={"/eventos-dia"}
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        <Titulo>Día</Titulo>
      </NavLink>
      <NavLink
        to={"/eventos-semana"}
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        <Titulo>Semana</Titulo>
      </NavLink>
      <NavLink
        to={"/"}
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        <Titulo>Mes</Titulo>
      </NavLink>
    </Contenedor>
  );
}
