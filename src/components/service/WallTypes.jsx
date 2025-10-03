import { Check } from "lucide-react";
import React from "react";

const WallTypes = ({ service, wallTypes }) => {
  return (
    <div className="my-5">
      <p className="p-4 text-xl font-semibold md:text-center">
        We offer these types of {service} walls
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 w-fit mx-auto">
        {wallTypes?.map((type, i) => (
          <div key={i} className="flex items-center justify-start gap-2">
            <Check className="text-secondary" /> <span>{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallTypes;
