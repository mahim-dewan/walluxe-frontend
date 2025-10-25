import InfoMessage from "@/components/reuseable/InfoMessage";
import ScrollToTop from "@/components/reuseable/ScrollToTop";
import { api } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = async () => {
  const projects = await api.getAllProjects(); // api call

  // error message
  if (!projects?.success) {
    return (
      <InfoMessage
        message={
          projects?.message || "Something went wrong. Please try again later"
        }
      />
    );
  }

  return (
    <ScrollToTop>
      <div className="p-2">
        <h1 className="py-5 text-center">Our Projects</h1>
        {Array.from(
          { length: Math.ceil(projects?.data?.length / 5) },
          (_, i) => {
            const start = i * 5;
            const end = start + 5;
            const group = projects?.data?.slice(start, end);

            return (
              <div
                key={i}
                className={`grid gap-2 my-2 grid-cols-2 md:grid-cols-4 md:px-6 ${
                  i % 2 === 0 ? "md:[direction:rtl]" : "md:[direction:ltr]"
                }`}
              >
                {group.map((item, j) => {
                  const index = start + j;

                  if (j === 0)
                    return (
                      <div key={item?._id} className="col-span-2 row-span-2">
                        <div className="relative w-full h-0 pb-[70.25%]">
                          <Image
                            alt="recent works"
                            src={item?.images[0]}
                            fill
                            className="rounded-md object-cover"
                          />
                          <Link
                            href={`/portfolio/${item?._id}`}
                            scroll={true}
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
                        <Image
                          alt="recent works"
                          src={item?.images[0]}
                          fill
                          className="rounded-md object-cover"
                        />
                        <Link
                          href={`/portfolio/${item?._id}`}
                          scroll={true}
                          className="absolute bottom-2 left-2 mr-2 text-light bg-dark/50 rounded-md px-2 line-clamp-1 hover:underline active:underline"
                        >
                          {item?.title}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </ScrollToTop>
  );
};

export default Portfolio;
