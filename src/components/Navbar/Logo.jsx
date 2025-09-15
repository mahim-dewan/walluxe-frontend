import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <span className="text-primary font-semibold text-4xl">W</span>A
      <span className="text-secondary font-semibold text-2xl inline-block rotate-12 px-1">
        L
      </span>
      <span className="text-secondary font-semibold text-2xl inline-block rotate-12">
        L
      </span>
      UXE
    </Link>
  );
};

export default Logo;
