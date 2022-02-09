import React, { Fragment, useState } from "react";
import { TextField } from "../index";
import {
  Overlay,
  ContenedorModal,
  Encabezado,
  BotonCerrar,
  BotonContinuar,
  BotonCancelar,
  ContenedorBotones,
  CheckboxLabel,
  TituloHora,
  ContenedorTimeModal,
  ContenedorInputs,
  SeparadorHora,
  ContenedorHora,
  ContenedorCheckbox,
} from "./styledComponents";
import { FaTimes } from "react-icons/fa";
import Loading from "./loading";

export default function Modal({
  children,
  closeButton,
  isOpen,
  setIsOpen,
  title,
  loading,
  timeModal,
  timeInput,
  getTimeValues,
}) {
  const [time, setTime] = useState({
    horas: "",
    minutos: "",
    amPm: "",
    timeInput,
  });

  // Función para detectar click fuera del modal y cerrarlo
  document.addEventListener("click", function (event) {
    if (event.target.matches(".overlay")) {
      setIsOpen();
    }
  });

  const handleChange = (e) => {
    setTime({
      ...time,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    getTimeValues(time);
    setIsOpen();
    setTime({
      horas: "",
      minutos: "",
      amPm: "",
      timeInput: "",
    });
  };

  const hanldeCancel = () => {
    setIsOpen();
  };

  const isDisabled = () => {
    if (!time.horas || !time.minutos || !time.amPm) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      {isOpen && (
        <Overlay className="overlay">
          <ContenedorModal id="modal">
            {title && (
              <Encabezado>
                <h3>Titulo</h3>
              </Encabezado>
            )}
            {closeButton && (
              <BotonCerrar onClick={() => setIsOpen(false)}>
                <FaTimes
                  color="#691B33"
                  style={{ width: "100%", height: "100%" }}
                />
              </BotonCerrar>
            )}
            {children}
            {loading && <Loading />}
            {timeModal && (
              <ContenedorTimeModal>
                <TituloHora>Escribe la hora</TituloHora>
                <ContenedorInputs className="contenedorInputs">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: "60%",
                    }}
                  >
                    <ContenedorHora>
                      <TextField
                        flat
                        onChange={handleChange}
                        value={time.horas}
                        name="horas"
                        type="text"
                        parttern="\d*"
                        min="1"
                        max="12"
                        maxLength="2"
                        autoFocus
                      />
                      <span style={{ fontSize: "14px" }}>Horas</span>
                    </ContenedorHora>
                    <SeparadorHora>:</SeparadorHora>
                    <ContenedorHora>
                      <TextField
                        flat
                        type="text"
                        parttern="\d*"
                        min="1"
                        max="12"
                        maxLength="2"
                        onChange={handleChange}
                        value={time.minutos}
                        name="minutos"
                      />
                      <span style={{ fontSize: "14px" }}>Minutos</span>
                    </ContenedorHora>
                  </div>
                  <div
                    style={{
                      width: "30%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <ContenedorCheckbox>
                      <input
                        type="radio"
                        id="am"
                        name="amPm"
                        onChange={handleChange}
                        value="AM"
                      />
                      <CheckboxLabel htmlFor="am">AM</CheckboxLabel>
                    </ContenedorCheckbox>
                    <ContenedorCheckbox>
                      <input
                        type="radio"
                        id="pm"
                        name="amPm"
                        onChange={handleChange}
                        value="PM"
                      />
                      <CheckboxLabel htmlFor="pm">PM</CheckboxLabel>
                    </ContenedorCheckbox>
                  </div>
                </ContenedorInputs>
                <ContenedorBotones>
                  <BotonCancelar onClick={hanldeCancel}>
                    {"Cancelar".toUpperCase()}
                  </BotonCancelar>
                  <BotonContinuar
                    onClick={handleContinue}
                    disabled={isDisabled()}
                  >
                    {"Continuar".toUpperCase()}
                  </BotonContinuar>
                </ContenedorBotones>
              </ContenedorTimeModal>
            )}
          </ContenedorModal>
        </Overlay>
      )}
    </Fragment>
  );
}
