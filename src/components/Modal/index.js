import React, { Fragment } from 'react';
import { Overlay, ContenedorModal, Encabezado, BotonCerrar } from './styledComponents';
import {FaTimes} from 'react-icons/fa';
import Loading from './loading';

export default function Modal({
  children,
  closeButton,
  isOpen,
  setIsOpen,
  title,
  loading,
}) {
  return (
    <Fragment>
      {isOpen &&
        <Overlay onClick={() => setIsOpen(false)}>
          <ContenedorModal loading>
            {title &&
              <Encabezado>
                <h3>Titulo</h3>
              </Encabezado>
            }
            {closeButton &&
              <BotonCerrar onClick={() => setIsOpen(false)}><FaTimes color='#691B33' style={{width: '100%', height: '100%'}} /></BotonCerrar>
            }
            {children}
            {loading && <Loading />}
          </ContenedorModal>
        </Overlay>
      }
    </Fragment>
  );
}
