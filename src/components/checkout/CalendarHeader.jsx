import React from "react";
import { Button } from "../shadcn/ui/button";
import { addMonths, format, subMonths } from "date-fns";

const CalendarHeader = ({ currentDate, setCurrentDate }) => {
  const displayMonthAndYear = format(currentDate, "MMMM yyyy");

  // Handler for Next button
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  // Handler for Prev button
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <div className="flex items-center justify-between">
      <Button
        className={"bg-dark hover:bg-dark cursor-pointer text-light"}
        onClick={prevMonth}
      >
        &lt;&lt;
      </Button>
        <span className="px-1 font-bold mx-2"> {displayMonthAndYear}</span>{" "}
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
