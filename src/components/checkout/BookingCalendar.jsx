"use client";
import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import StatusSign from "./StatusSign";
import { toast } from "sonner";
import {
  addDays,
  format,
  getDay,
  getDaysInMonth,
  isBefore,
  isSunday,
  isToday,
  isWithinInterval,
  parse,
  startOfDay,
  startOfMonth,
  subMonths,
} from "date-fns";

// Weekday labels
const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Demo booking list
const initialBookings = [
  {
    id: 1,
    startDate: new Date("2025-09-06"),
    endDate: new Date("2025-09-08"),
    status: "booked",
    workingDays: 3,
    persqft: 5.8,
    wallsize: 50,
    total: 1265,
    client: "Jane Doe",
    phone: "01589655871",
    email: "janedoe@gmail.com",
    city: "Aminbazar",
    address: "new road 3, mission golli, house no: 1",
  },
  { id: 2, startDate: new Date("2025-10-15"), endDate: new Date("2025-10-22"), status: "pending", client: "John Smith" },
  { id: 3, startDate: new Date("2025-10-24"), endDate: new Date("2025-10-27"), status: "booked" },
  { id: 4, startDate: new Date("2025-11-01"), endDate: new Date("2025-11-08"), status: "pending" },
  { id: 5, startDate: new Date("2025-11-21"), endDate: new Date("2025-11-24"), status: "booked", client: "Emily White" },
];

const BookingCalendar = ({ packageItem }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  /** -------------------
   *  Calendar Helpers
   *  ------------------*/
  const firstDayOfMonth = startOfMonth(currentDate);
  const firstDayIndex = getDay(firstDayOfMonth);
  const totalDays = getDaysInMonth(currentDate);

  const prevMonth = subMonths(currentDate, 1);
  const prevMonthLastDate = getDaysInMonth(prevMonth);

  // Collect all days for rendering
  const allDays = [];

  // Add previous month padding days
  for (let p = firstDayIndex - 1; p >= 0; p--) {
    allDays.push({ day: prevMonthLastDate - p, isPrevDay: true });
  }

  // Add current month days
  for (let d = 1; d <= totalDays; d++) {
    const thisDate = new Date(year, month, d);
    allDays.push({
      day: d,
      isSunday: isSunday(thisDate),
      isToday: isToday(thisDate),
    });
  }

  /** -------------------
   *  Booking Handler
   *  ------------------*/
  const handleSelectDate = (dateObj) => {
    let start = new Date(year, month, dateObj.day);
    let end = start;
    let daysCount = 0;

    // Loop until required duration (skipping Sundays)
    while (daysCount < packageItem?.duration) {
      if (!isSunday(end)) daysCount++;
      if (daysCount < packageItem?.duration) end = addDays(end, 1);
    }

    const startDate = format(start, "dd-MM-yyyy");
    const endDate = format(end, "dd-MM-yyyy");

    // Overlap check
    const isOverlapping = initialBookings.some((b) =>
      isWithinInterval(startOfDay(b.startDate), { start, end })
    );

    if (isOverlapping) {
      return toast.info(
        `Sorry, your selected ${packageItem?.duration}-day slot overlaps with an existing booking. Please choose another date.`
      );
    }

    setSelectedDate({ startDate, endDate });
  };

  /** -------------------
   *  JSX Rendering
   *  ------------------*/
  return (
    <div>
      {/* Selected Date Info */}
      {selectedDate ? (
        <p className="font-semibold">
          Selected Date : {selectedDate.startDate} - {selectedDate.endDate}
        </p>
      ) : (
        <p>Select an available date to start your project.</p>
      )}

      <div className="border p-2 rounded-lg my-2">
        {/* Calendar Header */}
        <CalendarHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />

        {/* Weekday Labels */}
        <div className="grid grid-cols-7 border border-secondary font-semibold my-2 rounded-lg text-center">
          {daysName.map((d, i) => (
            <p
              key={i}
              className={`${i === 0 && "bg-primary text-light rounded-lg"} py-2`}
            >
              {d}
            </p>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 grid-rows-6 font-semibold rounded-lg text-center">
          {allDays.map((d, i) => {
            const thisDay = new Date(year, month, d.day);
            const isPastDay = !d.isPrevDay && isBefore(thisDay, new Date());

            // Find booking that matches this date
            const booking = initialBookings.find((b) =>
              isWithinInterval(thisDay, {
                start: startOfDay(b.startDate),
                end: startOfDay(b.endDate),
              })
            );

            // Check active selected range
            const startBook = selectedDate && parse(selectedDate.startDate, "dd-MM-yyyy", new Date());
            const endBook = selectedDate && parse(selectedDate.endDate, "dd-MM-yyyy", new Date());

            const isActive =
              selectedDate &&
              isWithinInterval(startOfDay(thisDay), {
                start: startOfDay(startBook),
                end: startOfDay(endBook),
              });

            /** -------------------
             *  Day Cell Rendering
             *  ------------------*/
            return (
              <p
                key={i}
                onClick={() => {
                  d.isSunday || d.isPrevDay || isPastDay || booking
                    ? toast.error("This Date is not available for booking")
                    : handleSelectDate(d);
                }}
                className={`border-secondary border text-dark cursor-pointer rounded-lg p-1 m-1
                  ${(d.isSunday && !isPastDay) || (booking?.status === "booked" && !isPastDay) ? "bg-primary! border-none text-light cursor-not-allowed!" : ""}
                  ${d.isPrevDay || isPastDay ? "bg-gray! text-dark/50! cursor-not-allowed! border-none" : ""}
                  ${booking?.status === "pending" ? "bg-dark! cursor-not-allowed! text-light border-none" : ""}
                  ${isActive && !d.isPrevDay ? "text-light bg-secondary" : ""}
                `}
              >
                {d.day}
              </p>
            );
          })}
        </div>
      </div>

      <StatusSign />
    </div>
  );
};

export default BookingCalendar;
