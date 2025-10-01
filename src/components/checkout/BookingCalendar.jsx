"use client";
import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get total days of Month
const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

//Get total days of Previous Month
const getPrevDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

// Get first day of Month
const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

// Main Component
const BookingCalendar = () => {
  const [currentDate, setCurentDate] = useState(new Date());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  const allDays = [];
  const sunDays = [];

  // Get a few days of previous months
  for (let i = 0; i < getFirstDayOfMonth(year, month); i++) {
    allDays.unshift(getPrevDaysInMonth(year, month) - i);
  }

  // Get all days of current month
  for (let d = 1; d <= getDaysInMonth(year, month); d++) {
    allDays.push(d);
  }

  // Get Sundays of current Month
  for (let s = 1; s <= getDaysInMonth(year, month); s++) {
    const sunday = new Date(year, month, s).getDay();
    if (sunday === 0) {
      sunDays.push(s);
    }
  }

  return (
    <div>
      <p>Select an available date to start your project. </p>
      <div className="border p-2 rounded-lg my-2">
        {/* Calendar Head  */}
        <CalendarHeader
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />

        {/* Calendar's days name */}
        <div className="grid grid-cols-7 bg-secondary text-light font-semibold my-2 rounded-lg text-center">
          {days.map((d, i) => (
            <p
              key={i}
              className={`${
                i === 0 && "bg-primary text-light rounded-lg"
              }  py-2`}
            >
              {d}
            </p>
          ))}
        </div>

        {/* Calendar all days */}
        <div className="grid grid-cols-7 font-semibold rounded-lg text-center">
          {allDays.map((d, i) => {
            // Is this day is Today ?
            const isToday =
              currentDate.getDate() === d &&
              currentDate.getMonth() === month &&
              currentDate.getFullYear() === year;

            // Is this day sunday ?
            let isSunday;
            let firstDayIndex = allDays.indexOf(1);
            if (i >= firstDayIndex) isSunday = sunDays.includes(d);

            // Get Index of Today
            let indexOfToday;
            if (
              currentDate.getDate() === d &&
              month === new Date().getMonth() &&
              year === new Date().getFullYear()
            ) {
              let dayIndex = allDays.indexOf(d);
              if (firstDayIndex <= dayIndex) indexOfToday = dayIndex;
            }

            let prevDay;
            if (i < firstDayIndex || i < indexOfToday) prevDay = d;

            return (
              <p
                key={i}
                className={`border rounded-lg p-1 m-1 
                  ${isToday ? "bg-dark text-light" : ""} 
                   ${isSunday ? "bg-primary text-light cursor-not-allowed" : ""}
                   ${prevDay ? "bg-gray text-dark/50 cursor-not-allowed" : ""}
                   `}
              >
                {d}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
