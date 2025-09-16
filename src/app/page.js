import Image from "next/image";
import heroImg from "./../../public/hero-img.jpg";
import Link from "next/link";

const features = [
  { url: "/hero-section/completed.png", title: "5000+ Walls Completed" },
  { url: "/hero-section/experience.jpg", title: "10+ Years of Experience" },
  { url: "/hero-section/support.jpg", title: "After-Sales Support" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <div className="md:flex items-start 3xl:items-center justify-around flex-row-reverse gap-6 p-6">
        {/* Hero Image  */}
        <div className="relative w-[90%] md:w-[50%] mx-auto flex-1/2">
          <div className="absolute -bottom-5 -right-5 w-full h-full border border-gray rounded-xl z-0"></div>
          <Image
            alt="hero-img"
            src={heroImg}
            width={1000}
            height={1000}
            placeholder="blur"
            className="relative rounded-xl rounded-tl-4xl lg:rounded-tl-[60px] z-10"
          />
        </div>

        {/* Hero Content  */}
        <div className="text-center md:text-left my-5 flex-1/2">
          <h1 className="lg:text-5xl! 3xl:text-8xl!">
            Your Walls Your Story Our Craft.
          </h1>
          <p className="lg:py-5 2xl:text-2xl!">
            We create premium media walls and feature walls that redefine
            interiors. Designed for elegance. Built for impact.
          </p>
          <Link
            href={"/contact"}
            className="btn-primary inline-block my-2 3xl:text-4xl"
          >
            Get a free Consultation
          </Link>
        </div>
      </div>

      {/* stats/features  */}
      <div className="flex items-center justify-center gap-2 sm:gap-10 md:my-10 lg:my-20">
        {features.map((item, i) => (
          <span key={i} className="flex flex-col items-center justify-center">
            <img
              src={item.url}
              alt={item.title}
              className="w-20 h-20 2xl:w-32 2xl:h-32 rounded-full"
            />
            <span className="text-center font-semibold">{item.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
