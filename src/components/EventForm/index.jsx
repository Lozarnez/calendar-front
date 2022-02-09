import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import {FaUserPlus, FaListUl} from 'react-icons/fa';
import {TextField, Calendar, FavButton, Header, CalendarButton, Modal, InputHora} from '../index';
import ESTADOS from '../../constants/Estados';

export default function EventForm() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeInput, setTimeInput] = useState('');
  const [stateValues, setStateValues] = useState({
    titulo: "",
    fecha: moment().format("DD/MM/YYYY"),
    horaInicio: "00:00",
    horaFin: "00:00",
    estado: "",
    municipio: "",
    direccion: "",
    invitados: [],
  });

  const municipios = (estado) => {
    return ESTADOS.find(e => e.nombre === estado).municipios;
  }

  const getDateFromCalendar = (date) => {
    setStateValues({ ...stateValues, fecha: date.format("DD/MM/YYYY") });
    setShowCalendar(false);
  }

  const handleChange = (e) => {
    setStateValues({
      ...stateValues,
      [e.target.name]: e.target.value,
    });
  }

  const handleOpenTimeModal = (value) => {
    setTimeInput(value);
    setIsOpen(true);
  }

  const handleGetTimeValues = (time) => {
    if (time.timeInput === 'inicio') {
      setStateValues({
        ...stateValues,
        horaInicio: `${time.horas}:${time.minutos}`,
      });
      setTimeInput('');
    } else {
      setStateValues({
        ...stateValues,
        horaFin: `${time.horas}:${time.minutos}`,
      });
      setTimeInput("");
    }
  }


  return (
    <>
      {timeInput &&
        <Modal
          timeModal
          timeInput={timeInput}
          isOpen={isOpen}
          setIsOpen={() => setIsOpen(false)}
          getTimeValues={time => handleGetTimeValues(time)}
        />}
      <Header title="Agregar evento" />
      {showCalendar && (
        <div
          style={{
            position: "absolute",
            top: "7%",
            width: "100%",
            height: "45%",
            backgroundColor: "#F7F5F1",
          }}
        >
          <Calendar onDayClick={(day) => getDateFromCalendar(day)} />
        </div>
      )}
      <div style={{ width: "85%" }}>
        <Formik
          enableReinitialize
          initialValues={{
            titulo: stateValues.titulo,
            fecha: stateValues.fecha,
            horaInicio: stateValues.horaInicio,
            horaFin: stateValues.horaFin,
            estado: stateValues.estado,
            municipio: stateValues.municipio,
            direccion: stateValues.direccion,
            invitados: stateValues.invitados,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.titulo) {
              errors.titulo = "Titulo es requerido";
            }
            if (!values.fecha) {
              errors.fecha = "Fecha es requerida";
            }
            if (!values.horaInicio) {
              errors.horaInicio = "Hora de inicio es requerida";
            }
            if (!values.horaFin) {
              errors.horaFin = "Hora de fin es requerida";
            }
            if (!values.estado) {
              errors.estado = "Estado es requerido";
            }
            if (!values.municipio) {
              errors.municipio = "Municipio es requerido";
            }
            if (!values.direccion) {
              errors.direccion = "Direccion es requerida";
            }
            if (!values.invitados) {
              errors.invitados = "Invitados es requerido";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
          }}
        >
          {({ values, errors, touched, handleBlur, handleSubmit }) => (
            <form>
              <TextField
                flat
                placeholder="Agregar título"
                id="titulo"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.titulo && errors.titulo}
              />
              <div style={{ width: "50%" }}>
                <CalendarButton
                  type="button"
                  text={values.fecha}
                  onClick={() => setShowCalendar(true)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "18px 0",
                }}
              >
                <div style={{ width: "45%" }}>
                  <InputHora
                    text="Inicio"
                    hour={values.horaInicio}
                    time=" "
                    onClick={() => handleOpenTimeModal('inicio')}
                  />
                </div>
                <div style={{ width: "45%" }}>
                  <InputHora
                    text="Final"
                    hour={values.horaFin}
                    time=" "
                    onClick={() => handleOpenTimeModal('final')}
                  />
                </div>
              </div>
              <div>
                <select
                  placeholder="Estado"
                  id="estado"
                  name="estado"
                  value={values.estado}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.estado && errors.estado}
                >
                  {ESTADOS.map((estado, index) => (
                    <option key={index} value={estado.nombre}>
                      {estado.nombre}
                    </option>
                  ))}
                </select>
                <select
                  name="municipio"
                  id="municipio"
                  value={values.municipio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.municipio && errors.municipio}
                >
                  {values.estado &&
                    municipios(values.estado).map((municipio, index) => (
                      <option key={index} value={municipio}>
                        {municipio}
                      </option>
                    ))}
                </select>
              </div>
              <TextField
                flat
                placeholder="Dirección"
                id="direccion"
                name="direccion"
                value={values.direccion}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.direccion && errors.direccion}
              />
              <div>
                <button>
                  <FaUserPlus />
                </button>
                <span>Invitar personas</span>
              </div>
              <div>
                <button>
                  <FaListUl />
                </button>
                <span>Agregar orden del día</span>
              </div>
              <FavButton text="Guardar" />
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
