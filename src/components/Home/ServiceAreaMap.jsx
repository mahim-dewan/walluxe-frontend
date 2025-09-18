"use client";
import React from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  useLoadScript,
} from "@react-google-maps/api";
import { Badge } from "../shadcn/ui/badge";
import { MapPinCheckInside } from "lucide-react";

const center = { lat: 51.3721, lng: -0.1004 }; // Croydon

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

const serviceAreas = [
  "Croydon",
  "London",
  "Birmingham",
  "Manchester",
  "Leeds",
  "Liverpool",
  "Sheffield",
  "Bristol",
  "Nottingham",
  "Leicester",
  "Coventry",
  "Kingston upon Hull",
  "Bradford",
  "Cardiff",
  "Glasgow",
  "Edinburgh",
  "Southampton",
  "Reading",
  "Derby",
  "Newcastle upon Tyne",
];

export default function ServiceAreaMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // ✅ put API key in .env
  });

  if (!isLoaded) return <p>Loading map...</p>;

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
          {serviceAreas.map((area, i) => (
            <Badge key={i} className={"text-light bg-secondary md:text-lg"}>
              <MapPinCheckInside />
              {area}
            </Badge>
          ))}
        </div>
      </div>
      {/* Map  */}
      <div className="flex-1">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
          {/* Marker for Croydon */}
          <Marker position={center} label="Croydon" />

          {/* Circle for ~2–3 hr driving distance (~180km radius) */}
          <Circle center={center} radius={180000} options={options} />
        </GoogleMap>
      </div>
    </div>
  );
}
