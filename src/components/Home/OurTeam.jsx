"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const teamMembers = [
  {
    name: "Yeamin Sagor",
    imgUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Lead Designer",
  },
  {
    name: "Hamidur Khan",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1664476788423-7899ac87bd7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    designation: "Project Manager",
  },
  {
    name: "Arif Rahman",
    imgUrl:
      "https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D",
    designation: "3D Visualizer",
  },
  {
    name: "Hafiz Islam",
    imgUrl:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    designation: "Interior Specialist",
  },
  {
    name: "Tanvir Hasan",
    imgUrl:
      "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    designation: "Site Engineer",
  },
  {
    name: "Sabit Rahman",
    imgUrl:
      "https://images.unsplash.com/photo-1672748341520-6a839e6c05bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D",
    designation: "3D Visualizer",
  },
  {
    name: "Rafiq Chowdhury",
    imgUrl:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1hbGV8ZW58MHx8MHx8fDA%3D",
    designation: "Construction Supervisor",
  },
  {
    name: "Syed Shadin",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1677009540609-cd6208fc7cdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxtYWxlfGVufDB8fDB8fHww",
    designation: "Creative Director",
  },
  {
    name: "Imran Hossain",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1690295364571-d2d06159e0a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxtYWxlfGVufDB8fDB8fHww",
    designation: "Digital Media Specialist",
  },
  {
    name: "Jony Sakin Ahmed",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1669782051589-4f828261b1c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHxtYWxlfGVufDB8fDB8fHww",
    designation: "Client Coordinator",
  },
];

const OurTeam = () => {
  return (
    <div className="">
      <h2 className="title md:text-center! -mb-10">Our Team</h2>

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
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
            >
              <div className="p-1 h-64 text-light  flex items-center flex-col justify-around rounded-md relative">
                <Image
                  alt={member.name}
                  src={member.imgUrl}
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
