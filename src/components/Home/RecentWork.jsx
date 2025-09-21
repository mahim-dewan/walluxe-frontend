import Image from "next/image";
import Link from "next/link";
import React from "react";

const works = [
  {
    title: "Bespoke Media Walls",
    addr: "Galle, Sri Lanka",
    url: "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151963320-EB0QFEDDOKR5KVE60WKS/entry-elegance-fireplace-wall-miami.png?format=300w",
  },
  {
    title: "Integrated lighting effects",
    addr: "Trincomalee, Sri Lanka",
    url: "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151950736-M0247PTRN6WJ1DEHIJ5P/corner-warmth-tv-wall-san-diego.png?format=300w",
  },
  {
    title: "Immersive Media Wall Installation",
    addr: "Trincomalee, Sri Lanka",
    url: "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151975301-TFANVPM876LW0J7ZDMJC/essential-living-wall-seattle.png?format=300w",
  },
  {
    title: "Custom Feature Wall Design",
    addr: "Trincomalee, Sri Lanka",
    url: "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/f8fdc7ba-7130-4997-9dfe-de1d2dc7879b/Modern+Living+Room+with+Full+Wall+Board+and+Batten+Design.png?format=500w",
  },
  {
    title: "Modern, minimal frame finishing",
    addr: "Trincomalee, Sri Lanka",
    url: "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/117c3a2e-b42f-49dc-9789-505deb712eda/chicago-media-wall-fireplace-02.jpeg?format=1500w",
  },
];

const RecentWork = () => {
  return (
    <div className="my-10">
      <h3 className="title">Recent Works</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:px-6">
        {works.map((item, i) => {
          if (i === 0)
            return (
              <div key={i} className="col-span-2 row-span-2 relative">
                <div className="relative w-full h-0 pb-[70.25%]">
                  {/* Large size image */}
                  <Image
                    alt="recent works"
                    src={item.url}
                    fill
                    className="rounded-md object-fit"
                  />
                  <Link
                    href={""}
                    className="absolute bottom-2 left-2 mr-2 text-light bg-dark/50 rounded-md px-2 line-clamp-1 hover:underline active:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            );

          return (
            <div key={i} className="col-span-1 relative">
              <div className="relative w-full h-0 pb-[70.25%] overflow-hidden">
                {/* Small size image */}
                <Image
                  alt="recent works"
                  src={item.url}
                  fill
                  className="rounded-md object-cover"
                />
                <Link
                  href={""}
                  className="absolute bottom-2 left-2 mr-2 text-light bg-dark/50 rounded-md px-2 line-clamp-1 hover:underline active:underline"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentWork;
