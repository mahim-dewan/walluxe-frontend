import React from "react";

const StepsLine = ({ allSteps, currentStep }) => {
  return (
    <div className="flex items-center justify-center mt-5">
      {allSteps?.map((step) => (
        <div className="flex items-center">
          <div
            className={`${
              currentStep >= step.step
                ? "bg-secondary text-light"
                : "bg-gray text-dark"
            } p-2 rounded-full`}
          >
            {step.icon}
          </div>
          {step.step !== 3 && (
            <div
              className={`w-20 h-1 ${
                currentStep > step.step
                  ? "bg-secondary text-light"
                  : "bg-gray text-secondary"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsLine;
