"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/shadcn/ui/table";

const FinalCheck = ({ packageItem, newBookingData }) => {
  /** -------------------
   *  Customer Information Rows
   *  ------------------*/
  const customerRows = [
    { label: "Name", value: newBookingData?.name },
    { label: "Email", value: newBookingData?.email, className: "break-words whitespace-normal" },
    { label: "Phone No.", value: newBookingData?.phone },
    { label: "Area", value: newBookingData?.area },
    { label: "House", value: newBookingData?.house, className: "break-words whitespace-normal" },
    { label: "Wall Size", value: `${newBookingData?.wallSize} square foot` },
  ];

  /** -------------------
   *  Package Details Rows
   *  ------------------*/
  const packageRows = [
    { label: "Package", value: packageItem?.title, className: "break-words whitespace-normal" },
    { label: "Working Date", value: `${newBookingData?.startDate} to ${newBookingData?.endDate}`, className: "break-words whitespace-normal" },
    { label: "Duration", value: `${packageItem?.duration} Days` },
    { label: "Cost per square foot", value: `${packageItem?.price} bdt`, className: "break-words whitespace-normal" },
    { label: "Intotal Cost", value: `${packageItem?.price * newBookingData?.wallSize} bdt`, className: "break-words whitespace-normal text-primary" },
  ];

  return (
    <div className="min-h-[55vh]">
      <h3 className="text-base! text-left">Final Check</h3>

      {/* Customer Information */}
      <Table className="rounded-md my-5 w-full table-fixed overflow-hidden">
        <TableBody>
          {customerRows.map(
            (row, i) =>
              row.value && (
                <TableRow
                  key={i}
                  className={`border-b-0 ${i % 2 === 0 ? "bg-dark/20 text-dark" : "bg-dark/30"}`}
                >
                  <TableHead className="border border-gray font-semibold w-1/3">
                    {row.label}
                  </TableHead>
                  <TableCell className={`border border-gray w-2/3 text-right ${row.className || ""}`}>
                    {row.value}
                  </TableCell>
                </TableRow>
              )
          )}

          {/* Optional Message */}
          {newBookingData?.message && (
            <TableRow className="bg-dark/20 text-dark">
              <TableHead className="border border-gray w-1/3">Message</TableHead>
              <TableCell className="border border-gray w-2/3 text-right break-words whitespace-normal">
                {newBookingData.message}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Package Details */}
      <Table className="w-full table-fixed overflow-hidden mx-auto">
        <TableBody>
          {packageRows.map((row, i) => (
            <TableRow key={i}>
              <TableCell className={`font-semibold w-3/8 ${row.className || ""}`}>{row.label}</TableCell>
              <TableCell className="w-1/8 text-right">:</TableCell>
              <TableCell className={`w-4/8 text-right ${row.className || ""}`}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FinalCheck;
