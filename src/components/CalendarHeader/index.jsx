import React from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Header, HeaderTitle } from './styledComponents';
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
        <FaAngleLeft color={isRoot ? "#FFF" : "#13322B"} />
      </div>
      <HeaderTitle isRoot={isRoot}>
        {`${capitalizeFirstLetter(currentMonth)} ${currentYear}`}
      </HeaderTitle>
      <div className="headerNav" onClick={() => nextMonth()}>
        <FaAngleRight color={isRoot ? "#FFF" : "#13322B"} />
      </div>
    </Header>
  );
}
