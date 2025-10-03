import React from "react";

const StatusSign = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div>Every Sunday is Day Off</div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full border border-secondary"></div>
          <div>Available</div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-dark"></div>
          <div>Holding</div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div>Booked</div>
        </div>
      </div>
    </div>
  );
};

export default StatusSign;
