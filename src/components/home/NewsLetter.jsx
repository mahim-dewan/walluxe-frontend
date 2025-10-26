"use client";
import React, { useState } from "react";
import { Button } from "../shadcn/ui/button";
import { Input } from "../shadcn/ui/input";
import { api } from "@/lib/api";
import { toast } from "sonner";
import Loader from "../reuseable/Loader";

const NewsLetter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Newsletter submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await api.createSubscriber({ name, email });

    if (res?.success) {
      toast.success(res?.message, {
        description: "You will start getting updates soon",
      });
      setName("");
      setEmail("");
      setLoading(false);
    } else {
      toast.error(res?.message);
      setLoading(false);
    }
  };

  return (
    <div className="my-10 sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] mx-auto sm:flex flex-col items-start md:items-center justify-center gap-2">
      <div className="md:text-center">
        <h4 className="text-base! md:text-lg! lg:text-2xl!">
          SUBSCRIBE TO OUR NEWSLETTER
        </h4>
        <p>Get all the latest updates easily</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            className={"border-primary focus-visible:ring-0"}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="email"
            placeholder="Email"
            className={"border-primary focus-visible:ring-0"}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          variant={"outline"}
          className={"btn-secondary my-2"}
          disabled={loading}
        >
          {loading ? (
            <Loader size="20" color="#fff" className={"px-4"} />
          ) : (
            "Connect"
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsLetter;
