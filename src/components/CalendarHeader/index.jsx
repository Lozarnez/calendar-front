import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Header } from './styledComponents';
import "./styles.css";
import { capitalizeFirstLetter } from "../../utils";

export default function CalendarHeader({
  currentMonth,
  currentYear,
  prevMonth,
  nextMonth,
  isRoot,
}) {
  return (
    <Header isRoot={isRoot}>
      <div className="headerNav" onClick={() => prevMonth()}>
        <FaAngleLeft className="iconoBlanco" />
      </div>
      <div className="headerTitle">
        {`${capitalizeFirstLetter(currentMonth)} ${currentYear}`}
      </div>
      <div className="headerNav" onClick={() => nextMonth()}>
        <FaAngleRight className="iconoBlanco" />
      </div>
    </Header>
  );
}
