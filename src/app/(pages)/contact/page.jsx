"use client";

import { Button } from "@/components/shadcn/ui/button";
import { Input } from "@/components/shadcn/ui/input";
import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Loader from "@/components/reuseable/Loader";

// ✅ Reusable Input Field
const InputField = ({ id, name, type, placeholder, value, onChange, Icon }) => (
  <div className="relative">
    <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary opacity-60 pointer-events-none" />
    <Input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-12 pr-4 py-3 bg-transparent border-2 border-secondary/70 placeholder-dark/70 focus:outline-none focus-visible:ring-0  rounded-full transition duration-300 text-dark font-medium"
      required
    />
  </div>
);

// ✅ Reusable Text Area
const TextAreaField = ({ id, name, placeholder, value, onChange, Icon }) => (
  <div className="relative mb-0">
    <Icon className="absolute left-4 top-4 h-5 w-5 text-secondary opacity-60 pointer-events-none" />
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      rows="5"
      value={value}
      onChange={onChange}
      className="w-full pl-12 pr-4 pt-4 pb-4 bg-transparent border-2 border-secondary/70 placeholder-dark/70 focus:outline-none  rounded-3xl transition duration-300 text-dark font-medium resize-none"
      required
    ></textarea>
  </div>
);

// ✅ Reusable Contact Card
const ContactCard = ({ icon: Icon, title, description, link, label }) => (
  <div className="mt-5 mx-auto md:mx-0 md:ml-auto bg-secondary max-w-96 h-44 rounded-3xl px-4 relative overflow-hidden">
    <div className="flex items-center justify-center h-full">
      {typeof Icon === "string" ? (
        <img src={Icon} alt={label} className="w-1/2 h-full object-cover" />
      ) : (
        <Icon className="w-1/2 h-full text-light object-cover" />
      )}
    </div>
    <div className="bg-dark/70 absolute inset-0"></div>
    <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
      <Link
        href={link}
        target="_blank"
        className="text-2xl bg-light/70 text-secondary px-10 py-3 rounded-lg underline"
      >
        {label}
      </Link>
      <p className="text-light text-center">{description}</p>
    </div>
  </div>
);

// ✅ Default Form State
const defaultFormData = {
  email: "",
  phone: "",
  name: "",
  message: "",
};

// ✅ Main Component
const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
    setIsSent(true);
    setFormData(defaultFormData);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      setIsSent(false);
    }, 10000);
  };

  return (
    <div className="min-h-screen">
      {/* ---------- Header Section ---------- */}
      <div className="bg-secondary/70 text-light p-4 pt-14 text-center h-1/4 flex flex-col items-center justify-center relative">
        <h1 className="text-3xl!">Contact Us</h1>
        <p>Your inquiry matters. Drop us a line.</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-waves-icon lucide-waves"
          className="text-gray"
        >
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        </svg>
        <Send className="absolute top-5 left-5 text-gray" />
        <Send className="absolute bottom-5 right-10 rotate-[260deg] text-gray" />
      </div>

      {/* ---------- Contact Section ---------- */}
      <div className="p-4 md:flex items-center justify-between gap-4 max-w-[1200px] mx-auto ">
        {/* Contact form  */}
        {isLoading ? (
          <Loader className={"flex-1"} />
        ) : isSent ? (
          <div className="flex flex-col items-center justify-center flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-check-line-icon lucide-check-line"
              className="text-secondary"
            >
              <path d="M20 4L9 15" />
              <path d="M21 19L3 19" />
              <path d="M9 15L4 10" />
            </svg>
            <h6 className="text-center text-lg! md:text-2xl!">
              Thank you. We received your message and we'll reply within 24
              hours.
            </h6>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-[600px] mx-auto mt-10 flex-1"
          >
            <div>
              <h2 className=" text-dark text-center">Get In Touch</h2>
              <p className="text-dark/70 mb-10 text-center">
                We'd love to hear from you. Fill out the form below and we'll be
                in touch soon.
              </p>
            </div>
            {/* Name */}
            <InputField
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              Icon={User}
            />

            {/* Email + Phone */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  Icon={Mail}
                />
              </div>
              <div className="flex-1">
                <InputField
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  Icon={Phone}
                />
              </div>
            </div>

            {/* Message */}
            <TextAreaField
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              Icon={MessageSquare}
            />

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="btn-secondary font-semibold text-xl px-10 rounded-full"
              >
                Send
              </Button>
            </div>
          </form>
        )}

        {/* WhatsApp & Email Cards */}
        <div className="flex-1">
          <ContactCard
            icon="./whatsapp.png"
            link="https://wa.me/1568517556"
            label="Whatsapp"
            description="We’d connect on WhatsApp."
          />
          <ContactCard
            icon={Mail}
            link="mailto:walluxe@info.com"
            label="Email"
            description="Reach out to us directly via email."
          />
        </div>
      </div>

      {/* ---------- Google Map ---------- */}
      <div className="max-w-[1200px] mx-2 xl:mx-auto bg-gray p-2 rounded-lg h-56 my-5 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34738.84681470551!2d90.35339333449416!3d23.7662198239422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a6f07c2ded%3A0xba952f3052ca5c0a!2sFarmgate!5e0!3m2!1sen!2sbd!4v1760982416595!5m2!1sen!2sbd"
          width="100%"
          height="210"
          className="rounded-lg"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
