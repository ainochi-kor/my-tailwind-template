import Image from "next/image";
import React, { useState, useRef, useEffect, MouseEvent } from "react";
import MonthlyCalendar from "../Calendar/index";
import dayjs, { Dayjs } from "dayjs";

interface P {
  label?: string;
}

const getSelectValueTags = (dates: dayjs.Dayjs[]) => {
  return dates
    .sort((date1, date2) => date1.valueOf() - date2.valueOf())
    .map((date) => {
      const text = date.format("MM/DD");
      return (
        <div
          key={text}
          className="px-3 py-1 bg-grey-50"
          style={{ borderRadius: 20 }}
        >
          {text}
        </div>
      );
    });
};

const CalendarSelectBox: React.FC<P> = ({ label }) => {
  const [open, setOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState<dayjs.Dayjs[]>([]);

  

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
      <div className={`${selectedDates.length > 0 ? "py-4" : "h-11"} rounded `}>
        <span className="text-selectbox flex flex-wrap gap-1 invisible">
          {getSelectValueTags(selectedDates)}
        </span>
      </div>
      <div
        className={`
        absolute top-0
        w-full px-3 ${selectedDates.length > 0 ? "py-4" : "h-11"}
        flex items-center justify-between
        cursor-pointer rounded-2xl z-20
        ${
          open || selectedDates.length > 0
            ? "bg-white border border-blue-500"
            : "bg-blue-50"
        }
        
        `}
        onClick={() => setOpen(!open)}
        onFocus={handleFocusIn}
      >
        <span className="text-selectbox flex flex-wrap gap-1 ">
          {getSelectValueTags(selectedDates)}
        </span>
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
          <MonthlyCalendar />
        </div>
      )}
      <label
        onClick={() => setOpen(!open)}
        className={`absolute left-3 text-grey-700 cursor-pointer ${
          open || selectedDates.length > 0
            ? "text-micro text-primary -top-10px bg-white px-1 rounded-sm"
            : "text-small top-1/4"
        } transition-all duration-200 z-30`}
      >
        {label}
      </label>
    </div>
  );
};

export default CalendarSelectBox;
