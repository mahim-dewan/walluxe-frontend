import Image from "next/image";
import Link from "next/link";
import React from "react";

const item = {
  _id: "68d2d29a2ada135cd3e31c29",
  title: "Bespoke Media Wall",
  subtitle: "Write a subtitle here",
  description:
    "Transform your living space with our bespoke luxury feature wall, a stunning centrepiece that blends elegance and functionality. With an option to have a built in ambient warm LED lighting, this design creates a cosy atmosphere. Encased in our Paneluxe premium luxury wall panels, the installation exudes modern refinement. Elevate your interior with a timeless statement piece that combines high-end style.",
  price: 12500,
  currency: "BDT",
  category: "Media Wall",
  images: [
    "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151963320-EB0QFEDDOKR5KVE60WKS/entry-elegance-fireplace-wall-miami.png?format=300w",
  ],
  features: ["Standard color options", "2 years warranty"],
  isPopular: false,
  createdAt: "2025-09-23T17:02:18.479Z",
  updatedAt: "2025-09-23T17:02:18.479Z",
  __v: 0,
};

const Portfolio = () => {
  return (
    <div className="p-2">
      <h1 className="py-5 text-center">Our Projects</h1>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`grid gap-2 my-2 grid-cols-2 md:grid-cols-4 md:px-6 ${
            i % 2 === 0 ? "md:[direction:rtl]" : "md:[direction:ltr]"
          }`}
        >
          {Array.from({ length: 5 }, (_, j) => {
            const index = i * 5 + j;

            if (j === 0)
              return (
                <div key={index} className="col-span-2 row-span-2">
                  <div className="relative w-full h-0 pb-[70.25%]">
                    {/* Large size image */}
                    <Image
                      alt="recent works"
                      src={item?.images[0]}
                      fill
                      className="rounded-md object-fit"
                    />
                    <Link
                      href={`/portfolio/${item?._id}`}
                      className="absolute bottom-2 left-2 mr-2 text-light bg-dark/50 rounded-md px-2 line-clamp-1 hover:underline active:underline"
                    >
                      {item?.title}
                    </Link>
                  </div>
                </div>
              );

            return (
              <div key={index} className="relative">
                <div className="relative w-full h-0 pb-[70.25%] overflow-hidden">
                  {/* Small size image */}
                  <Image
                    alt="recent works"
                    src={item?.images[0]}
                    fill
                    className="rounded-md object-cover"
                  />
                  <Link
                    href={`/portfolio/${item?._id}`}
                    className="absolute bottom-2 left-2 mr-2 text-light bg-dark/50 rounded-md px-2 line-clamp-1 hover:underline active:underline"
                  >
                    {item?.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
