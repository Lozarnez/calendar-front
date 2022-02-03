import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import "./styles.css";
import { capitalizeFirstLetter } from "../../utils";

export default function CalendarHeader({
  currentMonth,
  currentYear,
  prevMonth,
  nextMonth,
}) {
  return (
    <div className="header">
      <div className="headerNav" onClick={() => prevMonth()}>
        <FaAngleLeft />
      </div>
      <div className="headerTitle">
        {`${capitalizeFirstLetter(
        currentMonth
      )} del ${currentYear}`}</div>
      <div className="headerNav" onClick={() => nextMonth()}>
        <FaAngleRight />
      </div>
    </div>
  );
}
