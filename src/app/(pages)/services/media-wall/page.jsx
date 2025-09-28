import ServiceTemplate from "@/components/service/ServiceTemplate";
import WallTypes from "@/components/service/WallTypes";
import React from "react";

// Demo Data
const packageItems = [
  {
    _id: 1,
    title: "Basic Feature Wall",
    subtitle: "Simple & Affordable",
    description:
      "An entry-level package for homeowners who want a clean and modern look without breaking the bank.",
    price: 5000,
    currency: "BDT",
    image:
      "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151963320-EB0QFEDDOKR5KVE60WKS/entry-elegance-fireplace-wall-miami.png?format=300w",
    features: [
      "Plain textured finish",
      "Moisture resistant coating",
      "Standard color options",
      "2 years warranty",
    ],
    category: "Wall Design",
    isPopular: false,
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
  },
];

const cover =
  "https://images.squarespace-cdn.com/content/v1/6854409c4933b941d0697a92/1751151963320-EB0QFEDDOKR5KVE60WKS/entry-elegance-fireplace-wall-miami.png?format=300w";

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

const MediaWall = () => {
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
