import React from "react";
import Image from "next/image";
import Link from "next/link";
import PackageCard from "@/components/service/PackageCard";
import WhyUs from "./WhyUs";

const ServiceTemplate = ({ children, cover, service, packageItems = [] }) => {
  // Conditionally render
  if (!packageItems || packageItems?.length <= 0)
    return (
      <p className="title flex items-center justify-center min-h-screen">
        No Services are available
      </p>
    );

  return (
    <div>
      {/* Cover  */}
      <div className="h-40 md:h-72 w-full relative">
        <Image src={cover} alt="feature wall" fill className="object-cover" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Title  */}
        <div className="relative h-full text-light p-2 flex items-center justify-center">
          <h1>{service}</h1>
        </div>
      </div>

      {children}

      {/* CTA  */}
      <div className="flex">
        <Link href={"/contact"} className="btn-secondary mx-auto text-para">
          Contact with us
        </Link>
      </div>

      {/* Packages  */}
      <h3 className="title text-start! px-4 mt-5">Packages</h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 p-1 gap-4">
        {packageItems?.map((packageItem) => (
          <PackageCard key={packageItem?._id} packageItem={packageItem} />
        ))}
      </div>

      {/* Why Us Section  */}
      <WhyUs />

      {/* CTA  */}
      <div className="flex">
        <Link
          href={"/contact"}
          className="btn-secondary my-10 mx-auto text-para"
        >
          Get A Free Quote
        </Link>
      </div>
    </div>
  );
};

export default ServiceTemplate;
