"use client";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  useLoadScript,
} from "@react-google-maps/api";
import { Badge } from "../shadcn/ui/badge";
import { MapPinCheckInside } from "lucide-react";
import Loader from "../reuseable/Loader";
import { api } from "@/lib/api";

const center = { lat: 23.800501632148926, lng: 90.41796523929308 }; // Croydon

const containerStyle = {
  width: "100%",
  height: "500px",
};

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.1,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

export default function ServiceAreaMap() {
  const [areas, setAreas] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // ✅ put API key in .env
  });

  useEffect(() => {
    api.getServiceAreas().then((data) => {
      setAreas(data?.data);
      setMessage(data?.message);
    });
  }, []);

  if (!isLoaded) return <Loader color={"#14b879"} size={"40"} speed={"0.80"} />;

  return (
    <div className="my-10 md:flex items-start justify-around">
      {/* Area/Cities  */}
      <div className="flex-1">
        <h3 className="title text-left! p-0!">Service Area</h3>
        <p className="text-para">
          Please tell us about your residential home space or commercial space
          requirements. One of our creative, modern interior designers or
          interior decorator will walk you through our service options.
        </p>
        <div className="flex flex-wrap items-center justify-start gap-2 h-30 md:h-64 overflow-auto rounded-md my-2 ">
          {areas?.map((area, i) => (
            <Badge key={i} className={"text-light bg-secondary md:text-lg"}>
              <MapPinCheckInside />
              {area?.name}
            </Badge>
          ))}
        </div>
      </div>
      {/* Map  */}
      <div className="flex-1">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {/* Marker for Croydon */}
          <Marker position={center} label="Dhaka" />

          {/* Circle for ~2–3 hr driving distance (~180km radius) */}
          <Circle center={center} radius={12000} options={options} />
        </GoogleMap>
      </div>
    </div>
  );
}
