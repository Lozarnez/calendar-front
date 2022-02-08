import React from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import {FaUserPlus, FaListUl} from 'react-icons/fa';
import {TextField, Calendar, FavButton} from '../index';
import ESTADOS from '../../constants/Estados';

export default function EventForm () {

  let date = moment().format('DD/MM/YYYY');
  const municipios = (estado) => {
    return ESTADOS.find(e => e.nombre === estado).municipios;
  }

  return (
      <Formik
        initialValues={{
          titulo: '',
          fecha: date,
          horaInicio: '',
          horaFin: '',
          estado: '',
          municipio: '',
          direccion: '',
          invitados: [],
        }}
        validate={(values) => {
          const errors = {};
          if (!values.titulo) {
            errors.titulo = 'Titulo es requerido';
          }
          if (!values.fecha) {
            errors.fecha = 'Fecha es requerida';
          }
          if (!values.horaInicio) {
            errors.horaInicio = 'Hora de inicio es requerida';
          }
          if (!values.horaFin) {
            errors.horaFin = 'Hora de fin es requerida';
          }
          if (!values.estado) {
            errors.estado = 'Estado es requerido';
          }
          if (!values.municipio) {
            errors.municipio = 'Municipio es requerido';
          }
          if (!values.direccion) {
            errors.direccion = 'Direccion es requerida';
          }
          if (!values.invitados) {
            errors.invitados = 'Invitados es requerido';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form>
            <TextField
              flat
              placeholder='Agregar título'
              id='titulo'
              name='titulo'
              value={values.titulo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.titulo && errors.titulo}
            />
            <div style={{width: '50%'}}>
              <TextField
                flat
                placeholder={date}
                id='fecha'
                name='fecha'
                value={values.fecha}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fecha && errors.fecha}
              />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{width: '45%'}}>
                <span>Inicio</span>
                <TextField
                  flat
                  placeholder={date}
                  id='fecha'
                  name='fecha'
                  value={values.fecha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.fecha && errors.fecha}
                />
              </div>
              <div style={{width: '45%'}}>
              <span>Final</span>
                <TextField
                  flat
                  placeholder={date}
                  id='fecha'
                  name='fecha'
                  value={values.fecha}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.fecha && errors.fecha}
                />
              </div>
            </div>
            <div>
              <select
                placeholder='Estado'
                id='estado'
                name='estado'
                value={values.estado}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.estado && errors.estado}
              >
                {ESTADOS.map((estado, index) => (
                  <option key={index} value={estado.nombre}>{estado.nombre}</option>
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
                {values.estado && municipios(values.estado).map((municipio, index) => (
                  <option key={index} value={municipio}>{municipio}</option>
                ))}
              </select>
            </div>
            <TextField
              flat
              placeholder='Dirección'
              id='direccion'
              name='direccion'
              value={values.direccion}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.direccion && errors.direccion}
            />
            <div>
              <button><FaUserPlus /></button><span>Invitar personas</span>
            </div>
            <div>
              <button><FaListUl /></button><span>Agregar orden del día</span>
            </div>
            <FavButton text='Guardar' />
          </form>
        )}
      </Formik>
  );
};
