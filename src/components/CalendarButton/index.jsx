import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { ButtonCalendar, Content} from './styledComponents'

export default function CalendarButton(props) {
  return (
    <ButtonCalendar {...props}>
      <div>{props.text}</div>
      <FaRegCalendar color='#4A4A4A' />
    </ButtonCalendar>
  );
}
