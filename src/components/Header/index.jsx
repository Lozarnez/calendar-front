import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Calendar } from '../index';
import {Container, Title, DropDownCalendar} from './styledComponents';

export default function Header({ title }) {
  const [calendar, setCalendar] = useState(false);

  return (
    <Container>
      <Title>{title ? title : "Aquí va la fecha"}</Title>
      <FaCaretDown
        onClick={() => setCalendar(!calendar)}
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
          fill: "#fff",
        }}
      />
      {calendar && (
        <DropDownCalendar>
          <Calendar isRoot={false} />
        </DropDownCalendar>
      )}
    </Container>
  );
}
