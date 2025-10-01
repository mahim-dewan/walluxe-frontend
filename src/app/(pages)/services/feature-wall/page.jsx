import React from "react";
import ServiceTemplate from "@/components/service/ServiceTemplate";
import WallTypes from "@/components/service/WallTypes";

// Demo Data
const packageItems = [
  {
    _id: 1,
    title: "Basic Feature Wall",
    subtitle: "Simple & Affordable",
    price: 5000,
    currency: "BDT",
    image:
      "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151963320-EB0QFEDDOKR5KVE60WKS/entry-elegance-fireplace-wall-miami.png?format=300w",
    features: ["Plain textured finish", "Moisture resistant coating", ,],
    category: "Feature Wall",
    isPopular: false,
    duration: "3 days",
    materials: ["Italian Marble", "Gypsum Board"],
  },
  {
    _id: 2,
    title: "Classic Feature Wall",
    subtitle: "Timeless Design",
    description:
      "A perfect balance of style and durability with elegant textures that suit any living space.",
    price: 8000,
    currency: "BDT",
    image:
      "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151950736-M0247PTRN6WJ1DEHIJ5P/corner-warmth-tv-wall-san-diego.png?format=300w",
    features: [
      "Premium textured panels",
      "Scratch-resistant surface",
      "Wide color palette",
      "3 years warranty",
    ],
    category: "Wall Design",
    isPopular: false,
    duration: "3 days",
    materials: [
      "Italian Marble",
      "Gypsum Board",
      "Italian Marble",
      "Gypsum Board",
    ],
  },
  {
    _id: 3,
    title: "Modern Feature Wall",
    subtitle: "Contemporary Style",
    description:
      "Designed for modern homes with sleek finishes and bold textures that make a statement.",
    price: 10000,
    currency: "BDT",
    image:
      "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151975301-TFANVPM876LW0J7ZDMJC/essential-living-wall-seattle.png?format=300w",
    features: [
      "Premium textured panels",
      "Scratch-resistant surface",
      "Wide color palette",
      "3 years warranty",
      "3D patterns",
      "Customizable designs",
      "Eco-friendly material",
      "4 years warranty",
    ],
    category: "Wall Design",
    isPopular: true,
    duration: "3 days",
    materials: ["Italian Marble", "Gypsum Board", "Gypsum Board"],
  },
  {
    _id: 4,
    title: "Premium Feature Wall",
    subtitle: "Luxury & Elegance",
    description:
      "A luxury wall package crafted with high-end materials and expert finishing touches.",
    price: 15000,
    currency: "BDT",
    image:
      "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/f8fdc7ba-7130-4997-9dfe-de1d2dc7879b/Modern+Living+Room+with+Full+Wall+Board+and+Batten+Design.png?format=500w",
    features: [
      "Premium textured panels",
      "Scratch-resistant surface",
      "Wide color palette",
      "3 years warranty",
      "3D patterns",
      "Customizable designs",
      "Eco-friendly material",
      "4 years warranty",
      "Imported 3D panels",
      "Heat & moisture resistant",
      "Custom patterns & colors",
      "5 years warranty",
      "Professional installation included",
    ],
    category: "Wall Design",
    isPopular: true,
    duration: "3 days",
    materials: ["Italian Marble", "Gypsum Board"],
  },
  {
    _id: 5,
    title: "Deluxe Feature Wall",
    subtitle: "Ultimate Customization",
    description:
      "The top-tier package with fully personalized designs, premium materials, and long-lasting durability.",
    price: 20000,
    currency: "BDT",
    image:
      "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/117c3a2e-b42f-49dc-9789-505deb712eda/chicago-media-wall-fireplace-02.jpeg?format=1500w",
    features: [
      "Exclusive designer panels",
      "Acoustic & thermal insulation",
      "Custom 3D artwork",
      "Lifetime warranty",
      "VIP installation service",
    ],
    category: "Wall Design",
    isPopular: true,
    duration: "3 days",
    materials: [
      "Italian Marble",
      "Gypsum Board",
      "Italian Marble",
      "Gypsum Board",
      "Italian Marble",
      "Gypsum Board",
    ],
  },
];

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

const FeatureWall = () => {
  return (
    <ServiceTemplate
      packageItems={packageItems}
      service={"Feature Walls"}
      cover={cover}
    >
      {/* We offer these types of walls section  */}
      <WallTypes service={"Feature"} wallTypes={featureWallTypes} />
    </ServiceTemplate>
  );
};

export default FeatureWall;
