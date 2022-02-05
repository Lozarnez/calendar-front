import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Calendar, CalendarDayEvents} from '../components';
import { fetchLogIn } from '../reducers/fetchActions';

export default function EventosMes() {
  const location = useLocation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const data = {
  //     email: 'juan.loaiza@sinaloa.gob.mx',
  //     password: 'Contrasena',
  //   }
  //   dispatch(fetchLogIn(data))
  // }, []);

  return (
    <Fragment>
      <Calendar />
      <CalendarDayEvents bgColor={"#13322b"} location={location} />
    </Fragment>
  );
}
