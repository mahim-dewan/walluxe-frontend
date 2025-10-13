import React from "react";
import ServiceTemplate from "@/components/service/ServiceTemplate";
import WallTypes from "@/components/service/WallTypes";
import { api } from "@/lib/api";

const cover =
  "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/f8fdc7ba-7130-4997-9dfe-de1d2dc7879b/Modern+Living+Room+with+Full+Wall+Board+and+Batten+Design.png?format=500w";

// Types of Feature Walls
const featureWallTypes = [
  "Wooden Panel Feature Wall",
  "3D Textured Feature Wall",
  "Stone / Marble Feature Wall",
  "Painted / Artistic Feature Wall",
  "Wallpaper Feature Wall",
  "Glass / Mirror Feature Wall",
  "Fabric Upholstered Feature Wall",
];

const FeatureWall = async () => {
  const { data: packages } = await api.getFeatureWallPackages();
  
  return (
    <ServiceTemplate
      packageItems={packages}
      service={"Feature Walls"}
      cover={cover}
    >
      {/* We offer these types of walls section  */}
      <WallTypes service={"Feature"} wallTypes={featureWallTypes} />
    </ServiceTemplate>
  );
};

export default FeatureWall;
