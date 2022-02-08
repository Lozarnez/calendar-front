import React from 'react';
import { SubmitButton } from './styledComponents';

export default function SimpleButton(props) {
  return (
    props.loading ?
      <SubmitButton type={props.type} disabled={true} >
        {'...Cargando'.toUpperCase()}
      </SubmitButton>
    :
      <SubmitButton type={props.type} onClick={() => props.onClick} disabled={props.disabled} >
        {props.text.toUpperCase()}
      </SubmitButton>
  );
}
