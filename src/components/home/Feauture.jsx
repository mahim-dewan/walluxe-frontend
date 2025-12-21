import Image from "next/image";
import React from "react";
import Link from "next/link";

const media =
  "https://i.pinimg.com/1200x/1e/18/a2/1e18a2f468694aa9fd106d2f54f46926.jpg";
const feature =
  "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/f8fdc7ba-7130-4997-9dfe-de1d2dc7879b/Modern+Living+Room+with+Full+Wall+Board+and+Batten+Design.png?format=500w";

const Feauture = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
      <div className="relative w-[300px] h-72 md:h-80 rounded-md overflow-hidden shadow-lg">
        <Image
          src={media}
          alt="Media Wall"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Link
            href={"/services/media-wall"}
            className="text-light decoration-1 underline"
          >
            See All Media Wall Packages
          </Link>
        </div>
      </div>

      <div className="relative w-[300px] h-72 md:h-80 rounded-md overflow-hidden shadow-lg">
        <Image
          src={feature}
          alt="Feature Wall"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <Link
            href={"/services/feature-wall"}
            className="text-light decoration-1 underline"
          >
            See All Feature Wall Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feauture;
