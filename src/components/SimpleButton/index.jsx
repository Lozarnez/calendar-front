import React from 'react';
import { SubmitButton } from './styledComponents';

export default function SimpleButton(props) {
  return (
    <SubmitButton type={props.type} onClick={() => props.onClick} disabled={props.disabled} >
      {props.text.toUpperCase()}
    </SubmitButton>
  );
}
