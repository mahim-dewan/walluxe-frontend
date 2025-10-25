import React from "react";
import Logo from "../navbar/Logo";
import { Mail, PhoneCall } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {/* Logo  */}
      <div className="border-t border-gray px-4 py-2">
        <Logo />
        <p>Your trusted partner for stunning media & feature walls.</p>
      </div>

      {/* Contact, Business Hours &  Follow Us  */}
      <div className="md:flex items-start justify-around">
        <div className="flex flex-col justify-center items-center md:items-start gap-2 my-5">
          <h5>Contact Us</h5>
          <div className="flex items-center gap-2">
            <PhoneCall />
            <p>01568517556, 01869709698</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail />
            <p>walluxe@info.com</p>
          </div>
          <Link href={""} className="text-primary">
            Terms & Condition
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start my-5">
          <h5>Business Hours</h5>
          <div className="">
            <p className="grid grid-cols-2 gap-4">
              <span>Mon, Tue, Thu, Fri</span>
              <span>10:00 am - 4:00 pm</span>
            </p>
            <p className="grid grid-cols-2 gap-4">
              <span>Wednesday</span>
              <span>Closed</span>
            </p>
            <p className="grid grid-cols-2 gap-4">
              <span>Saturday</span>
              <span>10:00 am - 2:00 pm</span>
            </p>
            <p className="grid grid-cols-2 gap-4">
              <span>Sunday</span>
              <span>Closed</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-5">
          <h5>Follow us</h5>
          <div className="flex items-center justify-center gap-2">
            <a href="" target="_blank">
              <img src="../footer/facebook.png" className="w-10 h-10" />
            </a>
            <a href="https://wa.me/8801568517556" target="_blank">
              <img src="../footer/whatsapp.png" className="w-8 h-8" />
            </a>
            <a href="mailto:walluxe@info.com">
              <img src="../footer/gmail.png" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copy right  */}
      <div className="text-center bg-dark text-light py-2">
        <p>&copy; 2025 Walluxe. All rights reserved.</p>
        <p className="text-sm">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/mahim-dewan79/"
            target="_blank"
            className="text-secondary font-semibold font-saira"
          >
            @Mahim Dewan
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
