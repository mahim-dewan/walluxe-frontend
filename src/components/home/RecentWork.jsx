import { api } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorMessage from "../reuseable/ErrorMessage";
import InfoMessage from "../reuseable/InfoMessage";

const RecentWork = async () => {
  const projects = await api.getRecentProjects();
  const works = projects?.data || [];
  const success = projects?.success;
  const message = projects?.message;

  // Error state handle
  if (!success)
    return <ErrorMessage label={"recent works"} message={message} />;

  // Informational message handle
  if (!works || works.length === 0)
    return <InfoMessage message={"No recent works found"} />;

  return (
    <div className="my-10">
      <h3 className="title">Recent Works</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:px-6">
        {works?.map((item, i) => {
          if (i === 0)
            return (
              <div key={i} className="col-span-2 row-span-2">
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
            <div key={i} className="col-span-1 relative">
              <div className="relative w-full h-0 pb-[70.25%] overflow-hidden">
                {/* Small size image */}
                <Image
                  alt="recent works"
                  src={item.images[0]}
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
    </div>
  );
};

export default RecentWork;
