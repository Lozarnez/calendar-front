import React from "react";
import { useCalendar } from "../../hooks";
import { Day, CalendarHeader, DaysRow } from "../index";
import "./styles.css";

export default function Calendar() {
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
        currentMonth={currentMonth}
        currentYear={currentYear}
        isSameMonth={isSameMonth}
        prevMonth={() => goToPrevMonth()}
        nextMonth={() => goToNextMonth()}
      />
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
  );
}
