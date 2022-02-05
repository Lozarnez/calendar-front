import React from 'react';
import { SimpleCard } from './styledComponents';

export default function Card(props) {
  return <SimpleCard width={props.width}>{ props.children }</SimpleCard>;
}
