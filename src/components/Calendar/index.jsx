import React from "react";
import { useCalendar } from "../../hooks";
import { Day, CalendarHeader, DaysRow } from "../index";
import "./styles.css";

export default function Calendar({isRoot}) {
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

  return (
    <div className="calendar">
      <CalendarHeader
        isRoot={isRoot ? isRoot : false}
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
                  onClick={() => setValue(day)}
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
