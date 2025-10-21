"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../shadcn/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = () => {
  const pathname = usePathname();

  // Menu Item Active/Deactive
  const isActive = (path, exact = false) => {
    if (exact)
      return pathname.startsWith(path) ? "text-primary" : "hover:text-primary";
    return pathname === path ? "text-primary" : "hover:text-primary";
  };

  return (
    <NavigationMenu viewPortClass={"left-0"} className={"text-base"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={isActive("/")}>
            <Link href={"/"} className="text-base xl:text-lg">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`cursor-pointer text-base xl:text-lg ${isActive(
              "/services",
              true
            )}`}
          >
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent className={"bg-light shadow-md text-dark"}>
            <ul className="w-[200px] ">
              <li>
                <Link
                  href={"/services/media-wall"}
                  className="text-base hover:bg-gray rounded-md p-2 cursor-pointer block"
                >
                  Media Wall Installation
                </Link>
              </li>

              <li>
                <Link
                  href={"/services/feature-wall"}
                  className="text-base hover:bg-gray rounded-md p-2 cursor-pointer block "
                >
                  Feature Wall Installation
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={isActive("/portfolio")}>
            <Link href={"/portfolio"} className="text-base xl:text-lg">
              Portfolio
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`btn-primary text-md`}>
            <Link href={"/contact"} className="text-base 2xl:text-lg mx-2">
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuItems;
