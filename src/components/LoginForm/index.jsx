import React from "react";
import { useDispatch } from "react-redux";
import { fetchLogIn } from '../../reducers/fetchActions';
import { Formik } from "formik";
import { Container } from "./styledComponents";
import { TextField, SimpleButton } from "../index";

export default function LoginForm(props) {
  const dispatch = useDispatch();

  const isDisabled = (values, errors) => {
    if (!values.email || !values.password || errors.email || errors.password) {
      return true;
    }

    return false;
  }

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Usuario es requerido";
          }
          if (!values.password) {
            errors.password = "Contraseña es requerida";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(fetchLogIn(values));
          resetForm();
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              id="email"
              name="email"
              placeholder="Usuario"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />
            <TextField
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && errors.password}
            />
            <SimpleButton type="submit" text="Iniciar sesión" disabled={isDisabled(values, errors)} />
          </form>
        )}
      </Formik>
    </Container>
  );
}
