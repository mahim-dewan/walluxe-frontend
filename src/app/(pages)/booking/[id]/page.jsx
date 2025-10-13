"use client";
import Logo from "@/components/navbar/Logo";
import Loader from "@/components/reuseable/Loader";
import { Badge } from "@/components/shadcn/ui/badge";
import { Button } from "@/components/shadcn/ui/button";

import { format } from "date-fns";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as htmlToImage from "html-to-image";
import { toast } from "sonner";

import { api } from "@/lib/api";
import Cartoon from "../../../../../public/cartoon.jpg";
import { initPayment } from "@/utils/paymentHandler";

const BookingDetails = () => {
  const [bookingItem, setBookingItem] = useState(null);
  const [packageItem, setPackageItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownload, setIsDownload] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const { id } = useParams();
  const invoiceRef = useRef();
  const router = useRouter();

  useEffect(() => {
    const apiCall = async () => {
      // Booking api
      const booking = await api.getSingleBooking(id);
      setBookingItem(booking);
      if (booking.data.payment_id) {
        setIsPaid(true);
      }

      // Package api
      const packageItem = await api.getSinglePackage(booking?.data?.packageId);
      setPackageItem(packageItem?.data);
      setIsLoading(false);
    };

    apiCall();
  }, []);

  /** ---------------
   *  Invoice download handler
   *  ---------------*/
  const handleDownload = async () => {
    setIsDownload(true);
    if (!invoiceRef.current) return toast.error("Couldn't download");
    const element = invoiceRef.current;

    try {
      // Convert to PNG
      const dataUrl = await htmlToImage.toPng(element, {
        cacheBust: true,
        backgroundColor: "black",
        filter: (node) => {
          // Hide elements with class "hide-on-export"
          return !node.classList?.contains("hide-on-export");
        },
      });

      // Trigger download
      const link = document.createElement("a");
      link.download = "invoice.png";
      link.href = dataUrl;
      link.click();
      setIsDownload(false);
    } catch (error) {
      console.error("Export failed", error);
    }
  };

  /** ---------------
   *  Payment request handler
   *  ---------------*/
  const handlePayment = async () => {
    const data = {
      booking_id: bookingItem?.data?._id,
      package_id: packageItem?._id,
    };
    const res = await initPayment(data);
    if (!res.success) return toast.info(res?.message);
    router.push(res.url);
  };

  if (isLoading) return <Loader size="60" />;
  if (!bookingItem?.success) return <h1>InValid URL</h1>;

  return (
    <div className="flex flex-row-reverse items-start justify-around">
      <Image
        alt="workflow cartoon"
        src={Cartoon}
        width={1000}
        height={1000}
        className="w-1/2 h-[500px] flex-1 hidden lg:block"
      />

      {/* Booking Invoice */}
      <div ref={invoiceRef} className="p-2 flex-1">
        <div className="bg-gray w-full max-w-[460px] mx-auto rounded-lg">
          <div className="flex items-center justify-center pt-2">
            <Logo />
          </div>
          <h2 className="p-2 text-center text-lg!">
            {bookingItem?.data?.name}'s Booking Item
          </h2>

          <div>
            {/* Package image, title and category */}
            <div className="flex items-start">
              <img
                className="w-20 h-20 m-2 rounded-md"
                src={packageItem?.image}
              />
              <div className="p-2">
                <p className="font-semibold">{packageItem?.title}</p>
                <p className="text-sm">Category : {packageItem?.category}</p>
              </div>
            </div>

            {/* Package features and materials  */}
            <div className="p-2 flex items-start justify-between gap-2">
              <ul className="pl-6 flex-1">
                <p className="font-semibold">Features</p>
                {packageItem?.features?.map((item, i) => (
                  <li className="list-decimal text-sm" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="pl-6 flex-1">
                <p className="font-semibold">Materials</p>
                {packageItem?.materials?.map((item, i) => (
                  <li className="list-decimal text-sm" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wall Size, Duration and work date  */}
            <div className="flex flex-col items-start gap-1">
              <div className="grid grid-cols-2 w-full px-2">
                <p className="font-semibold">Wall Size:</p>
                <p className="text-right">
                  {bookingItem?.data?.wallSize} square foot
                </p>
              </div>

              <div className="grid grid-cols-2 w-full px-2">
                <p className="font-semibold">Duration:</p>
                <p className="text-right">{packageItem?.duration} days</p>
              </div>

              {bookingItem?.success && (
                <div className="grid grid-cols-2 w-full px-2">
                  <p className="font-semibold">Start Date:</p>
                  <p className="text-right">
                    {format(bookingItem?.data?.startDate, "dd-MM-yyyy")}
                  </p>
                </div>
              )}

              {bookingItem?.success && (
                <div className="grid grid-cols-2 w-full px-2">
                  <p className="font-semibold">End Date:</p>
                  <p className="text-right">
                    {format(bookingItem?.data?.endDate, "dd-MM-yyyy")}
                  </p>
                </div>
              )}
            </div>

            {/* Booking Status, totalCost, & Message */}
            <div className="flex flex-col items-start gap-1 py-5">
              <div className="flex items-center justify-around w-full px-2">
                <p className="font-semibold">Booking Status:</p>
                <Badge className="text-dark text-lg bg-light border-r-dark/50 border-b-dark/50">
                  {bookingItem?.data?.status}
                </Badge>
              </div>
              <div className="flex items-center justify-around w-full px-2">
                <p className="font-semibold">
                  {isPaid ? "Paid" : "Payable"} Amount:
                </p>
                <Badge className="text-light text-lg bg-secondary border-r-dark/50 border-b-dark/50">
                  {bookingItem?.data?.costTotal} BDT
                </Badge>
              </div>
              {isPaid ? (
                <p className="w-full my-2 font-semibold text-center text-secondary">
                  Thank you {bookingItem.data.name} for confirmation.
                </p>
              ) : (
                <p className="px-10 text-justify text-primary">
                  You have to pay total cost for confirm booking. Otherwise it
                  will be cancel auto after 24 hours.
                </p>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 w-full p-2 hide-on-export">
              <Button
                onClick={handleDownload}
                className={
                  "bg-transparent hover:bg-secondary hover:text-light text-base! cursor-pointer font-semibold border border-secondary text-dark flex-1"
                }
              >
                {isDownload ? <Loader size="20" /> : " Download Invoice"}
              </Button>
              <Button
                onClick={handlePayment}
                className={
                  "btn-secondary text-base! text-center font-semibold text-light flex-1"
                }
                disabled={isPaid}
              >
                {isPaid ? "Paid" : "Pay Now"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
