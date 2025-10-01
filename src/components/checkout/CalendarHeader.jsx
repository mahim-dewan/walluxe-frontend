import React from "react";
import { Button } from "../shadcn/ui/button";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CalendarHeader = ({ month, setMonth, year, setYear }) => {
  // Handler for Next button
  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  // Handler for Prev button
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Button
        className={"bg-dark hover:bg-dark cursor-pointer text-light"}
        onClick={prevMonth}
      >
        &lt;&lt;
      </Button>
      <span className="font-bold mx-2">
        <span className="px-1"> {months[month]}</span>{" "}
        <span className="px-1">{year}</span>
      </span>
      <Button
        className={"bg-dark hover:bg-dark cursor-pointer text-light"}
        onClick={nextMonth}
      >
        &gt;&gt;
      </Button>
    </div>
  );
};

export default CalendarHeader;
