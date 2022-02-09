import React from "react";
import { useLocation } from "react-router-dom";
import { useCalendar } from "../../hooks";
import { Day, CalendarHeader, DaysRow } from "../index";
import "./styles.css";

export default function Calendar({ onDayClick }) {
  const location = useLocation();
  const {
    calendar,
    currentMonth,
    currentYear,
    formattedDay,
    setValue,
    isSameDay,
    isSameMonth,
    isInMonth,
    goToPrevMonth,
    goToNextMonth,
  } = useCalendar();

  const getDayValue = (day) => {
    setValue(day);
    onDayClick(day);
  };
  return (
    <div className="calendar">
      <CalendarHeader
        isRoot={location.pathname === "/"}
        currentMonth={currentMonth}
        currentYear={currentYear}
        isSameMonth={isSameMonth}
        prevMonth={() => goToPrevMonth()}
        nextMonth={() => goToNextMonth()}
      />
      <div className="calendarBody">
        <DaysRow />
        <div>
          {calendar.map((week, i) => (
            <div key={i} className="week-row">
              {week.map((day, i) => (
                <Day
                  key={i}
                  onClick={() => getDayValue(day)}
                  day={formattedDay(day).toString()}
                  isSameDay={isSameDay(day)}
                  isInMonth={isInMonth(day)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
