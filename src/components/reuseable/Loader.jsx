import React from "react";
import { DotSpinner } from "ldrs/react";
import "ldrs/react/DotSpinner.css";

const Loader = ({ color, size, speed }) => {
  return (
    <div className="h-96 flex items-center justify-center">
      <DotSpinner size={size} speed={speed} color={color} />
    </div>
  );
};

export default Loader;
