"use client";
import React from "react";
import { Button } from "../shadcn/ui/button";
import { Input } from "../shadcn/ui/input";

const NewsLetter = () => {
  const handleConnect = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-10 sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] mx-auto sm:flex flex-col items-start md:items-center justify-center gap-2">
      <div className="md:text-center">
        <h4 className="text-base! md:text-lg! lg:text-2xl!">
          SUBSCRIBE TO OUR NEWSLETTER
        </h4>
        <p>Get all the latest updates easily</p>
      </div>

      <form onSubmit={handleConnect}>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            className={"border-primary focus-visible:ring-0"}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            className={"border-primary focus-visible:ring-0"}
          />
        </div>

        <Button
          type="submit"
          variant={"outline"}
          className={"btn-secondary my-2"}
        >
          Connect
        </Button>
      </form>
    </div>
  );
};

export default NewsLetter;
