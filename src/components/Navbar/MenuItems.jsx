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
    <NavigationMenu viewPortClass={"left-0"}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={isActive("/")}>
            <Link href={"/"}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`cursor-pointer ${isActive("/services", true)}`}
          >
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent className={"bg-light shadow-md text-dark"}>
            <ul className="w-[200px] ">
              <li className="hover:bg-gray rounded-md p-2 cursor-pointer">
                <Link href={"/services/media-wall"}>
                  Media Wall Installation
                </Link>
              </li>

              <li className="hover:bg-gray rounded-md p-2 cursor-pointer">
                <Link href={"/services/feature-wall"}>
                  Feature Wall Installation
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={isActive("/gallery")}>
            <Link href={"/"}>Gallery</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={isActive("/blogs", true)}>
            <Link href={"/"}>Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={`btn-primary text-md`}>
            <Link href={"/"}>Book Now</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MenuItems;
