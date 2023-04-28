// Calendar.tsx

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Typography from "../Typography";
import Image from "next/image";
import DayWeekLabel from "./DayWeekLabel";

interface CalendarProps {
  selectedDates: dayjs.Dayjs[];
  selectDate: (day: dayjs.Dayjs) => void;
}

const MonthlyCalendar: React.FC<CalendarProps> = ({
  selectedDates,
  selectDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const generateCalendarGrid = (month: dayjs.Dayjs) => {
    const startOfMonth = month.startOf("month").startOf("week");
    const endOfMonth = month.endOf("month").endOf("week");

    let days: dayjs.Dayjs[] = [];
    for (
      let day = startOfMonth;
      day.isBefore(endOfMonth);
      day = day.add(1, "day")
    ) {
      days.push(day);
    }

    return days;
  };

  const prevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  const isSelected = (day: dayjs.Dayjs) =>
    selectedDates.some((selectedDate) => day.isSame(selectedDate, "day"));

  const renderCalendarGrid = (month: dayjs.Dayjs) => {
    const days = generateCalendarGrid(month);
    const rows = days.length / 7;

    return (
      <>
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex w-full justify-between">
            {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, index) => (
              <Typography
                key={index}
                theme="micro400"
                tailwindcss={`w-6 h-6 flex items-center justify-center rounded-full hover:bg-blue-100 cursor-pointer  
                  ${day.isSame(month, "month") ? "" : "invisible"}
                  ${
                    isSelected(day)
                      ? "bg-blue-500 text-white"
                      : "text-selectbox"
                  }`}
                onClick={() => selectDate(day)}
              >
                {day.format("D")}
              </Typography>
            ))}
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    setCurrentMonth(currentMonth);
  }, [currentMonth]);

  return (
    <div className="bg-blue-50 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <Typography theme="small500">
          {currentMonth.format("MMMM YYYY")}
        </Typography>
        <div className="flex">
          <Image
            onClick={() => prevMonth()}
            src="/images/ic-pre.png"
            width={20}
            height={20}
            alt="prev"
          />
          <Image
            onClick={() => nextMonth()}
            src="/images/ic-next.png"
            width={20}
            height={20}
            alt="next"
          />
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <DayWeekLabel>S</DayWeekLabel>
        <DayWeekLabel>M</DayWeekLabel>
        <DayWeekLabel>T</DayWeekLabel>
        <DayWeekLabel>W</DayWeekLabel>
        <DayWeekLabel>T</DayWeekLabel>
        <DayWeekLabel>F</DayWeekLabel>
        <DayWeekLabel>S</DayWeekLabel>
      </div>
      {renderCalendarGrid(currentMonth)}
    </div>
  );
};

export default MonthlyCalendar;
