import InfoMessage from "@/components/reuseable/InfoMessage";
import { api } from "@/lib/api";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const designProcess = [
  "Visit our showroom",
  "Bring your design choice or choose from one of our designs",
  "One of our designers can create a bespoke design with our 3D software",
  "Choose your style",
  "Choose your colour choice from our wide range of Paneluxe panels",
  "Choose from Wood Grain, Gloss Marble, Matt stone, Plain coloured and Fluted Panels.",
  "Finalise your design",
  "Agree a home survey from one of our qualified fitters",
  "Once accepted secure with a deposit and agree a fitting date",
];

const ProjectDeatails = async ({ params }) => {
  const id = params.id;
  const { data: project } = await api.getSingleProject(id);

  if (!project) return <InfoMessage message={"Not found this project"} />;

  return (
    <div className="min-h-screen">
      {/* Title, subtitle, CTA and Images */}
      <div className="bg-[url('/portfolioDetailsBG.jpeg')] bg-cover bg-center w-full p-2">
        <div className="md:flex gap-4 items-start md:items-center justify-evenly md:py-10">
          <div className="sm:pl-10 mx-auto sm:m-0 w-fit">
            <h1>{project?.title}</h1>
            <p>{project?.subtitle}</p>
            <Link href={``} className="btn-secondary inline-block my-4">
              Purchage this package
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-10 rotate-180 md:rotate-0">
            {Array.from({ length: 3 }, (_, i) => (
              <Image
                key={i}
                src={project?.images[i]}
                alt={project?.category}
                width={1000}
                height={1000}
                className={`w-44 h-52 md:w-52 md:h-60 xl:w-64 xl:h-72 border-4 border-secondary object-cover rounded-xl mx-auto rotate-180 md:rotate-0 ${
                  i === 0
                    ? "col-span-2 md:col-span-1 md:row-span-2 md:self-center"
                    : "col-span-1"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="my-5 p-2 lg:px-10">
        {/* Description  */}
        <div>
          <h2>Descripton</h2>
          <p>{project?.description}</p>
        </div>

        {/* Features and Materials */}
        <div className="flex items-start justify-evenly gap-2">
          <div className="my-2">
            <h2 className="mt-5">Features</h2>
            <div className="flex flex-col gap-2 my-2">
              {project?.features?.map((f, i) => (
                <div key={i} className="flex gap-2">
                  <BadgeCheck className="text-secondary" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="my-2">
            <h2 className="mt-5">Materials</h2>
            <div className="flex flex-col gap-2 my-2">
              {project?.materials?.map((f, i) => (
                <div key={i} className="flex gap-2">
                  <BadgeCheck className="text-secondary" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Process and image  */}
        <div className="lg:flex items-start justify-evenly gap-4 my-10">
          <div className="my-5 flex-1">
            <h3 className="">Design Services And Process</h3>
            <p>
              We offer a complimentary design service using the latest 3D
              software, allowing you to visualise your custom media wall before
              it's built. Visit our showroom to explore a wide range of material
              samples, which you're welcome to take home and try in your own
              space.
            </p>

            <div className="flex flex-col gap-4 my-5">
              {designProcess?.map((p, i) => (
                <div key={i} className="flex gap-2">
                  <span>
                    {" "}
                    <BadgeCheck className="text-secondary" />
                  </span>
                  <span> {p}</span>
                </div>
              ))}
            </div>
          </div>
          <Image
            src={project?.images[3] || project?.images[2]}
            alt={project?.category}
            width={1000}
            height={1000}
            className="rounded-lg flex-1 lg:max-w-1/2 lg:max-h-1/2 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDeatails;
