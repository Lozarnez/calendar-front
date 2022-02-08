import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, CalendarDayEvents, FavButton} from '../components';
import { fetchLogIn } from '../reducers/fetchActions';

export default function EventosMes() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log('En Eventos Mes');

useEffect(() => {
  const token = sessionStorage.getItem('token');
  if (!token) {
    navigate('/login');
  }
}, []);

  return (
    <Fragment>
      <Calendar />
      <CalendarDayEvents bgColor={"#13322b"} location={location} />
      <FavButton text="Agregar Evento" onClick={() => navigate('/crear-evento')} />
    </Fragment>
  );
}
