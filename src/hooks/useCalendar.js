import { useState, useEffect } from "react";
import moment from "moment";
import 'moment/locale/es';

moment.locale("es");

export const useCalendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  console.log({value});

  const currentMonth = value.format('MMMM');
  const currentYear = value.format('YYYY');
  const monthStart = value.clone().startOf("month");
  const monthEnd = value.clone().endOf("month");

  useEffect(() => {
    const startDay = value.clone().startOf("month").startOf("week");
    const endDay = value.clone().endOf("month").endOf("week");
    const day = startDay.clone().subtract(2, "day"); // Iterador
    let a = [];

    while (day.isBefore(endDay, "day")) {
      a.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    a.pop()
    setCalendar(a);
  }, [value]);

  const isSameDay = (day) => moment(day).isSame(value, "day");
  const isSameMonth = (day) => moment(day).isSame(value, "month");
  const formattedDay = (day) => moment(day).format("D");
  const goToPrevMonth = () => setValue(value.clone().subtract(1, "month"));
  const goToNextMonth = () => setValue(value.clone().add(1, "month"));
  const isInMonth = (day) => {
    if (day.isBefore(monthStart, "day") || day.isAfter(monthEnd, "day")) {
      return false;
    }

    return true;
  };

  return {
    calendar,
    value,
    currentMonth,
    currentYear,
    setCalendar,
    setValue,
    isSameDay,
    isSameMonth,
    formattedDay,
    isInMonth,
    goToPrevMonth,
    goToNextMonth,
  };
};
