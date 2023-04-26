// Calendar.tsx

import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import Typography from "../Typography";
import Image from "next/image";

import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DayWeekLabel from "./DayWeekLabel";

SwiperCore.use([Navigation]);

interface CalendarProps {}

const MonthlyCalendar: React.FC<CalendarProps> = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDates, setSelectedDates] = useState<dayjs.Dayjs[]>([]);
  const [direction, setDirection] = useState(0);

  console.log("currentMonth", currentMonth.month());

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

  const selectDate = (day: dayjs.Dayjs) => {
    if (selectedDates.length < 2) {
      setSelectedDates([...selectedDates, day]);
    } else {
      setSelectedDates([day]);
    }
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

  const onTransitionEnd = (swiper: SwiperCore) => {
    if (swiper.activeIndex === 1) {
      setCurrentMonth(currentMonth.add(direction, "month"));
      setDirection(0);
    } else {
      setDirection(swiper.activeIndex - swiper.previousIndex);
      swiper.slideTo(1);
    }
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
            className="swiper-calendar-navigetion-prev"
            src="/images/ic-pre.png"
            width={20}
            height={20}
            alt="prev"
          />
          <Image
            className="swiper-calendar-navigetion-next"
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
      <Swiper
        speed={1}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-calendar-navigetion-prev",
          nextEl: ".swiper-calendar-navigetion-next",
        }}
        onTransitionEnd={onTransitionEnd}
        onSwiper={(swiper) => swiper.slideTo(1)}
        initialSlide={1}
      >
        <SwiperSlide>
          {renderCalendarGrid(currentMonth.subtract(1, "month"))}
        </SwiperSlide>
        <SwiperSlide>{renderCalendarGrid(currentMonth)}</SwiperSlide>
        <SwiperSlide>
          {renderCalendarGrid(currentMonth.add(1, "month"))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MonthlyCalendar;
