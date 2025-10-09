import React from "react";

const StatusSign = () => {
  const statusItems = [
    { color: "bg-primary", label: "Every Sunday is Day Off" },
    { color: "border border-secondary", label: "Available" },
    { color: "bg-dark", label: "Holding" },
    { color: "bg-primary", label: "Booked" },
  ];

  return (
    <div className="space-y-2">
      {/* Sunday Off */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-3 h-3 rounded-full bg-primary"></div>
        <div>{statusItems[0].label}</div>
      </div>

      {/* Other Status Signs */}
      <div className="flex items-center justify-center gap-4">
        {statusItems.slice(1).map((item, idx) => (
          <div key={idx} className="flex items-center justify-center gap-2">
            <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusSign;
