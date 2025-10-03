import { Check } from "lucide-react";
import React from "react";

const reasons = [
  "Experienced craftsmen",
  "Custom designs tailored to clients",
  "Durable, premium materials",
  "Affordable pricing options",
  "Fast & hassle-free installation",
];

const WhyUs = () => {
  return (
    <div>
      <div className="my-5">
        <h3 className="title text-center">Why Us ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 w-fit mx-auto">
          {reasons?.map((r, i) => (
            <div key={i} className="flex items-center justify-start gap-2">
              <Check className="text-secondary" /> <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
