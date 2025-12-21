import ServiceTemplate from "@/components/service/ServiceTemplate";
import WallTypes from "@/components/service/WallTypes";
import { api } from "@/lib/api";
import React from "react";

const cover =
  "https://i.pinimg.com/1200x/1e/18/a2/1e18a2f468694aa9fd106d2f54f46926.jpg";

// Types of Media Walls
const mediaWallTypes = [
  "TV Media Wall with Storage",
  "Floating TV Panel Media Wall",
  "Stone / Marble Finish Media Wall",
  "Wooden Panel Media Wall",
  "Fireplace Media Wall",
  "LED Backlit Media Wall",
  "Custom Built-In Shelves Media Wall",
];

const MediaWall = async () => {
  const { data: packageItems } = await api.getMediaWallPackages();

  return (
    <div>
      <ServiceTemplate
        cover={cover}
        service={"Media Walls"}
        packageItems={packageItems}
      >
        {/* We offer these types of walls section  */}
        <WallTypes service="Media" wallTypes={mediaWallTypes} />
      </ServiceTemplate>
    </div>
  );
};

export default MediaWall;
