"use client";
import React, { useState } from "react";
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
import ClientForm from "./ClientForm";
import { CalendarDays, Contact, ListCheck } from "lucide-react";
import FinalCheck from "./FinalCheck";
import StepsLine from "./StepsLine";

const allSteps = [
  { step: 1, title: "Booking Date", icon: <CalendarDays /> },
  { step: 2, title: "Customer Info", icon: <Contact /> },
  { step: 3, title: "Final Check", icon: <ListCheck /> },
];

const BookingDialogBox = ({ packageItem }) => {
  const [newBookingData, setNewBookingData] = useState({
    startDate: "",
    endDate: "",
    name: "",
    email: "",
    phone: "",
    area: "",
    house: "",
    wallSize: null,
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(allSteps[0].step);

  const handleConfirmBook = () => {
    console.log(newBookingData);
  };

  // Next button status handler
  const isDisabledNextBtn = () => {
    if (
      !newBookingData?.startDate &&
      !newBookingData?.endDate &&
      currentStep === 1
    ) {
      return true;
    } else if (
      (!newBookingData?.name ||
        !newBookingData?.email ||
        !newBookingData?.phone ||
        !newBookingData?.area ||
        !newBookingData?.house ||
        !newBookingData?.wallSize) &&
      currentStep === 2
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger className="btn-primary text-base!">
          Book Now
        </DialogTrigger>
        <DialogContent
          className={
            "bg-light sm:max-w-[70%] lg:max-w-[60%] 2xl:max-w-[50%] h-[80vh] lg:h-[95vh] overflow-y-auto border-none"
          }
        >
          <DialogHeader>
            <DialogTitle className={"text-center"}>Booking Form</DialogTitle>
            <StepsLine allSteps={allSteps} currentStep={currentStep} />
          </DialogHeader>
          <DialogDescription asChild>
            <div>
              {/* Booking Calendar  */}
              {currentStep === 1 && (
                <BookingCalendar
                  packageItem={packageItem}
                  newBookingData={newBookingData}
                  setNewBookingData={setNewBookingData}
                />
              )}

              {/* Customer Form  */}
              {currentStep === 2 && (
                <ClientForm
                  newBookingData={newBookingData}
                  setNewBookingData={setNewBookingData}
                />
              )}

              {currentStep === 3 && (
                <FinalCheck
                  packageItem={packageItem}
                  newBookingData={newBookingData}
                />
              )}
            </div>
          </DialogDescription>

          <DialogFooter className="sm:justify-end flex-row">
            {currentStep === 1 && (
              <DialogClose asChild>
                <Button
                  type="button"
                  className="btn-primary text-base! w-full sm:w-fit flex-1 sm:flex-none"
                >
                  Close
                </Button>
              </DialogClose>
            )}

            {currentStep > 1 && (
              <Button
                type="button"
                className="btn-primary text-base! w-full sm:w-fit flex-1 sm:flex-none"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </Button>
            )}

            {currentStep >= 1 && currentStep < 3 && (
              <Button
                type="button"
                className={` btn-secondary text-base! w-full sm:w-fit flex-1 sm:flex-none `}
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={isDisabledNextBtn()}
              >
                Next
              </Button>
            )}

            {currentStep === 3 && (
              <Button
                type="button"
                className="btn-secondary text-base! w-full sm:w-fit flex-1 sm:flex-none"
                onClick={handleConfirmBook}
              >
                Confirm
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingDialogBox;
