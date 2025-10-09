"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../shadcn/ui/dialog";
import { Button } from "../shadcn/ui/button";
import { Input } from "../shadcn/ui/input";
import Link from "next/link";

const BookingSuccessBox = ({ openSuccess, setOpenSuccess, createdBooking }) => {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  /** -------------------
   *  Update URL when booking is created
   *  ------------------*/
  useEffect(() => {
    console.log(createdBooking);

    setUrl(`http://localhost:3000/booking/${createdBooking?._id}`);
  }, [createdBooking]);

  /** -------------------
   *  Copy Booking URL
   *  ------------------*/
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      <Dialog open={openSuccess} onOpenChange={setOpenSuccess}>
        <DialogContent
          className={"bg-light border-none sm:max-w-[70%] lg:max-w-[40%]"}
        >
          <DialogHeader>
            <DialogTitle className={"text-xl!"}>
              Request successful 🎉
            </DialogTitle>
          </DialogHeader>

          <p>Thank you for your booking</p>

          {/* Booking URL */}
          <div className="flex items-center gap-2 bg-gray border border-dark/50 rounded-md p-2">
            <Input
              className="focus-visible:ring-0 focus-visible:border-secondary border-none w-10/12"
              value={url}
              readOnly
            />
            <Button className={"btn-secondary w-2/12"} onClick={handleCopy}>
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
          <p className="-mt-2">copy the url to see your booking status</p>

          {/* Payment Instructions */}
          <p>
            Your booking request under the pending. Please pay{" "}
            <span className="bg-primary text-light px-1">
              {createdBooking?.costTotal} tk
            </span>{" "}
            to confirm it. Otherwise it will be cancelled automatically after
            24h. Thank you
          </p>
          <DialogFooter>
            <Link href={"/checkout/payment"} className={"btn-primary text-sm text-center"}>
              Make Payment
            </Link>
            {/* <Button className={"btn-primary"}>Make Payment</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingSuccessBox;
