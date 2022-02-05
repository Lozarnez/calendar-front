import React from 'react';
import { FloatingButton } from './styledComponents';

export default function FavButton(props) {
  return (
    <FloatingButton {...props}>
      {props.text.toUpperCase()}
    </FloatingButton>
  )
}