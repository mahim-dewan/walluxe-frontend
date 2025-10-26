"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { api } from "@/lib/api";
import ErrorMessage from "../reuseable/ErrorMessage";
import InfoMessage from "../reuseable/InfoMessage";
import Loader from "../reuseable/Loader";

const OurTeam = () => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.getAllTeamMembers().then((data) => {
      setMembers(data?.data);
      setSuccess(data?.success);
      setMessage(data?.message);
      setLoading(false);
    });
  }, []);

  // Loading state handle
  if (loading) return <Loader />;

  // Error state handle
  if (!success)
    return <ErrorMessage label={"team members"} message={message} />;

  // Informational message handle
  if (!members || members?.length === 0)
    return <InfoMessage message={"No team members found"} />;

  return (
    <div className="">
      <h3 className="title md:text-center! -mb-10">Our Team</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        className=" md:w-[90%] mx-auto"
      >
        <CarouselPrevious className={"hidden md:flex"} />
        <CarouselContent className={""}>
          {members?.map((member, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
            >
              <div className="p-1 h-64 text-light  flex items-center flex-col justify-around rounded-md relative">
                <Image
                  alt={member?.name}
                  src={member?.image}
                  width={1000}
                  height={1000}
                  className="w-30 h-30 rounded-full"
                />
                <div className=" text-center text-dark absolute bottom-0">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-dark/60">{member.designation}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className={"hidden md:flex"} />
      </Carousel>
    </div>
  );
};

export default OurTeam;
