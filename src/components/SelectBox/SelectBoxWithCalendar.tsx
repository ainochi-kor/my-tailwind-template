import Image from "next/image";
import React, { useState, useRef, useEffect, MouseEvent } from "react";
import MonthlyCalendar from "../Calendar";
import dayjs, { Dayjs } from "dayjs";

interface P {
  label: string;
  selectedDates: dayjs.Dayjs[];
  selectDate: (day: dayjs.Dayjs) => void;
}

const getSelectValueTags = (dates: dayjs.Dayjs[]) => {
  let text = "";
  dates
    .sort((date1, date2) => date1.valueOf() - date2.valueOf())
    .forEach((date, idx) => {
      text += date.format("MM/DD");
      if (dates.length - 1 !== idx) {
        text += ", ";
      }
    });

  return text;
};

const CalendarSelectBox: React.FC<P> = ({
  label,
  selectedDates,
  selectDate,
}) => {
  const [open, setOpen] = useState(false);
  const selectWrapperRef = useRef<HTMLDivElement>(null);

  const handleFocusIn = () => {
    setOpen(true);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!selectWrapperRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={selectWrapperRef}
      onBlur={handleBlur}
      className="relative w-full"
      tabIndex={0}
    >
      <div
        className={`
        top-0
        w-full px-3 ${open && selectedDates.length > 0 ? "py-4" : "h-11"}
        flex items-center justify-between
        cursor-pointer rounded z-20 border
        ${
          open || selectedDates.length > 0
            ? "bg-white  border-blue-500"
            : "bg-blue-50 border-gray-300"
        }
        `}
        onClick={() => setOpen(!open)}
        onFocus={handleFocusIn}
      >
        <div
          className={`text-selectbox  ${
            open && "flex flex-wrap gap-1"
          } text-ellipsis whitespace-nowrap overflow-hidden `}
        >
          {getSelectValueTags(selectedDates)}
        </div>
        <Image
          className={open ? "rotate-180" : ""}
          src={"/images/ic-drop.png"}
          width={20}
          height={20}
          alt="drop"
        />
      </div>
      {open && (
        <div className="absolute w-full z-10">
          <MonthlyCalendar
            selectedDates={selectedDates}
            selectDate={selectDate}
          />
        </div>
      )}
      <label
        onClick={() => setOpen(!open)}
        className={`absolute left-3 text-grey-700 cursor-pointer ${
          open || selectedDates.length > 0
            ? "text-micro text-primary -top-2.5 bg-white px-1 rounded-sm"
            : "text-small top-1/4"
        } transition-all duration-200 z-30`}
      >
        {label}
      </label>
    </div>
  );
};

export default CalendarSelectBox;
