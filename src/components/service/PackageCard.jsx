import React from "react";
import Link from "next/link";
import { Check, Wrench } from "lucide-react";
import Image from "next/image";
import BookingDialogBox from "../checkout/BookingDialogBox";

// const packageItem = {
//   title: "Luxury Media Wall Package",

//   subtitle:
//     "High-end media wall with premium marble finishing and LED lighting.",

//   price: 3000,

//   category: "Media Wall",

//   duration: "3 days",

//   features: ["3D visualization", "Smart LED integration", "Premium marble"],

//   materials: ["Italian Marble", "Gypsum Board"],

//   image:
//     "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151963320-EB0QFEDDOKR5KVE60WKS/entry-elegance-fireplace-wall-miami.png?format=300w",

//   rating: { average: 4.8, count: 32 },

//   tags: ["media wall", "luxury", "interior design"],
// };

const PackageCard = ({ packageItem }) => {
  return (
    <div className="w-[370px] sm:w-[400px] lg:w-[420px] 2xl:w-[450px] shadow-lg rounded-lg overflow-hidden border border-gray flex flex-col mx-auto">
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
      <div className="flex flex-col flex-grow p-2">
        {/* Title & Subtitle  */}
        <div className="mb-2">
          <h2 className="text-base! font-inter! font-semibold">
            {packageItem?.title}
          </h2>
          <p className="text-xs! lg:text-sm!">{packageItem?.subtitle}</p>
        </div>

        {/* Features & Materials */}
        <div className="grid grid-cols-2 flex-grow">
          <div className="  border-r pr-1 border-gray">
            <h4 className="text-sm! lg:text-base! font-inter! px-2">
              Features
            </h4>
            {packageItem?.features?.map((f, i) => (
              <p key={i} className="flex gap-2 text-xs! lg:text-sm! mt-1">
                <Check className="text-secondary w-4 h-4 mt-[2px]" /> {f}
              </p>
            ))}
          </div>

          <div className="space-y-1 flex-grow pl-1">
            <h4 className="text-sm! lg:text-base! font-inter! px-2">
              Materials
            </h4>
            {packageItem?.materials?.map((f, i) => (
              <p key={i} className="flex gap-2 text-xs! lg:text-sm!">
                <Wrench className="text-secondary w-4 h-4 mt-[2px]" /> {f}
              </p>
            ))}
          </div>
        </div>

        {/* Category & Duration  */}
        <table className="w-fit text-sm lg:text-base mt-5">
          <thead>
            <tr className="">
              <th className="text-left font-semibold w-fit ">Category</th>
              <td className="px-2">:</td>
              <td className="">{packageItem?.category}</td>
            </tr>
            <tr className="">
              <th className="text-left font-semibold  w-fit">Duration</th>
              <td className="px-2">:</td>
              <td className="">{packageItem?.duration}</td>
            </tr>
          </thead>
        </table>

        {/* Price + Button at the bottom */}
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-secondary font-bold text-lg">
              ${packageItem?.price}{" "}
            </span>
            <span className="text-sm lg:text-base text-dark/70">/sq ft</span>
          </p>
          <BookingDialogBox packageItem={packageItem} />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
