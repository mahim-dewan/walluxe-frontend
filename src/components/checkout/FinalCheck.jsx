import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";

const FinalCheck = ({ packageItem, newBookingData }) => {
  return (
    <div className="min-h-[55vh] ">
      <h3 className="text-base! text-left">Final Check</h3>

      {/* Customer Information */}
      <Table className={"rounded-md my-5 w-[100%] table-fixed overflow-hidden"}>
        <TableBody>
          {[
            { label: "Name", value: newBookingData?.name },
            {
              label: "Email",
              className: "break-words whitespace-normal",
              value: newBookingData?.email,
            },
            { label: "Phone No.", value: newBookingData?.phone },
            { label: "Area", value: newBookingData?.area },
            {
              label: "House",
              value: newBookingData?.house,
              className: "break-words whitespace-normal",
            },
            {
              label: "Wall Size",
              value: `${newBookingData?.wallSize} square foot`,
            },
          ].map(
            (item, i) =>
              item.value && (
                <TableRow
                  key={i}
                  className={`border-b-0
                    ${i % 2 === 0 ? "bg-dark/20 text-dark" : "bg-dark/30"}`}
                >
                  <TableHead className=" border border-gray font-semibold w-1/3">
                    {item.label}
                  </TableHead>
                  <TableCell
                    className={` border border-gray w-2/3 text-right  ${
                      item.className || ""
                    }`}
                  >
                    {item.value}
                  </TableCell>
                </TableRow>
              )
          )}

          {newBookingData?.message && (
            <TableRow className={"bg-dark/20 text-dark "}>
              <TableHead className="border border-gray w-1/3">
                Message
              </TableHead>
              <TableCell className="border border-gray w-2/3 text-right break-words whitespace-normal">
                {newBookingData.message}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Package Details  */}
      <Table className={"w-[100%] table-fixed overflow-hidden mx-auto"}>
        <TableBody>
          {[
            {
              label: "Package",
              className: "break-words whitespace-normal",
              value: packageItem?.title,
            },
            {
              label: "Working Date",
              className: "break-words whitespace-normal",
              value:
                newBookingData?.startDate + " to " + newBookingData?.endDate,
            },
            {
              label: "Duration",
              value: packageItem?.duration + " Days",
            },
            {
              label: "Cost per square foot",
              className: "break-words whitespace-normal",
              value: packageItem?.price + " bdt",
            },
            {
              label: "Intotal Cost",
              className: "break-words whitespace-normal text-primary",
              value: packageItem?.price * newBookingData?.wallSize + " bdt",
            },
          ].map((row, i) => (
            <TableRow>
              <TableCell
                className={`font-semibold  w-3/8 ${row.className || ""}`}
              >
                {row.label}
              </TableCell>
              <TableCell className={"w-1/8 text-right"}>:</TableCell>
              <TableCell className={`w-4/8 text-right ${row.className || ""}`}>
                {row?.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FinalCheck;
