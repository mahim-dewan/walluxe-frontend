import React, { useEffect, useState } from "react";
import { Input } from "../shadcn/ui/input";
import { Label } from "../shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/ui/select";
import { api } from "@/lib/api";

const inputItems = [
  {
    label: "Name",
    placeholder: "Jone Doe",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Email",
    placeholder: "jonedoe@gmail.com",
    type: "email",
    name: "email",
    required: true,
  },
  {
    label: "Phone",
    placeholder: "+880 1896705698",
    type: "number",
    name: "phone",
    required: true,
  },
  {
    label: "Wall Size (square foot)",
    placeholder: "120",
    type: "number",
    name: "wallSize",
    required: true,
  },
  // {
  //   label: "Road/House",
  //   placeholder: "Mirpur-1, Amin road, House-55",
  //   type: "text",
  //   name: "house",
  //   required: true,
  // },
];

const ClientForm = ({ newBookingData, setNewBookingData }) => {
  const [areas, setAreas] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.getServiceAreas().then((data) => {
      setAreas(data?.data);
      setMessage(data?.message);
    });
  }, []);

  // On Change Handler
  const handleChange = (e) => {
    setNewBookingData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="mt-5 min-h-[55vh]">
      <h3 className="text-base! text-left">Customer Information</h3>
      <form className="py-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        {inputItems.map((item, i) => (
          <div>
            <Label htmlFor={item?.label} className={"text-sm"}>
              {item?.label}{" "}
              <span className="text-primary">{item?.required && "*"}</span>
            </Label>
            <Input
              type={item?.type}
              placeholder={item?.placeholder}
              id={item?.label}
              required={item?.required}
              className={
                "focus-visible:ring-0 focus-visible:border-secondary border-dark/50"
              }
              name={item?.name}
              value={newBookingData[item?.name]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* Service area selector  */}
        <div className="">
          <Label className={"py-1"}>
            Select Your Area <span className="text-primary">*</span>
          </Label>
          <Select
            value={newBookingData?.area}
            onValueChange={(v) =>
              setNewBookingData((prev) => ({ ...prev, area: v }))
            }
          >
            <SelectTrigger className="w-full  border-dark/50 focus-visible:ring-0 focus-visible:border-secondary">
              <SelectValue placeholder="Area" />
            </SelectTrigger>

            <SelectContent className={"bg-light text-dark border-dark/50"}>
              {areas?.map((area) => (
                <SelectItem
                  key={area?._id}
                  className={"hover:bg-gray cursor-pointer"}
                  value={area?.name}
                >
                  {area?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="Road/House" className={"text-sm"}>
            Road/House
            <span className="text-primary">{"*"}</span>
          </Label>
          <Input
            type={"text"}
            placeholder="Mirpur-1, Amin road, House-55"
            id="Road/House"
            required={true}
            className={
              "focus-visible:ring-0 focus-visible:border-secondary border-dark/50"
            }
            name={"house"}
            value={newBookingData?.house}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="message" className={"py-1"}>
            Message
          </Label>
          <textarea
            name="message"
            id="message"
            rows={3}
            placeholder="Write a message"
            className="w-full border p-2 rounded-lg focus-visible:outline-0 border-dark/50 focus-visible:border-secondary "
            value={newBookingData?.message}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ClientForm;
