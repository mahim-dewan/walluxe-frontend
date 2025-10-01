"use client";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { Button } from "../shadcn/ui/button";
import BookingCalendar from "./BookingCalendar";

const BookingDialogBox = ({ packageItem }) => {
  const handleConfirmBook = () => {
    console.log(packageItem);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger className="btn-primary text-base!">
          Book Now
        </DialogTrigger>
        <DialogContent
          className={
            "bg-light sm:max-w-[60%] 2xl:max-w-[40%] max-h-[80vh] overflow-y-auto border-none"
          }
        >
          <DialogHeader>
            <DialogTitle>Booking Form</DialogTitle>
            <DialogDescription>
              {/* Booking Calendar  */}
              <BookingCalendar />
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start flex-row">
            <DialogClose asChild>
              <Button
                type="button"
                className="btn-primary text-base! w-full sm:w-fit flex-1 sm:flex-none"
              >
                Close
              </Button>
            </DialogClose>
            <Button
              type="button"
              className="btn-secondary text-base! w-full sm:w-fit flex-1 sm:flex-none"
              onClick={handleConfirmBook}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingDialogBox;
