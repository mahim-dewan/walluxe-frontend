import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from "next/image";

const PackageCard = ({ packageItem }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden border border-gray flex flex-col">
      {/* Image  */}
      <div className="relative w-full h-0 pb-[70.25%]">
        <Image
          alt={packageItem?.title}
          src={packageItem?.image}
          fill
          className="object-cover"
        />
      </div>

      {/* Content  */}
      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-lg! font-inter! font-semibold mb-2">{packageItem?.title}</h2>

        {/* Features */}
        <div className="space-y-1 flex-grow">
          {packageItem?.features?.map((f, i) => (
            <p key={i} className="flex gap-2 text-sm">
              <Check className="text-secondary w-4 h-4 mt-[2px]" /> {f}
            </p>
          ))}
        </div>

        {/* Price + Button at the bottom */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-secondary font-bold">${packageItem?.price}</p>
          <Link href={""} className="btn-primary">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
