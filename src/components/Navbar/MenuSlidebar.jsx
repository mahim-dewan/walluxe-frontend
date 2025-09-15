"use client";

import React from "react";
import { CircleArrowRight, Kanban } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../shadcn/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../shadcn/ui/navigation-menu";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuSlidebar = () => {
  const pathname = usePathname();

  // Slide menu button active/deActive
  const isActive = (path, exact = false) => {
    if (exact)
      return pathname.startsWith(path) ? "text-primary" : "active:text-primary";
    return pathname === path ? "text-primary" : "active:text-primary";
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Kanban className="rotate-[450deg] w-8 h-8 cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        className={"bg-light border-none pl-2 [&>button:first-of-type]:hidden"}
      >
        <SheetHeader>
          <SheetTitle className={"flex items-center justify-between"}>
            <Logo />
            <SheetClose>
              <CircleArrowRight className="cursor-pointer" />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div>
          <NavigationMenu viewPortClass="top-10 left-22">
            <NavigationMenuList className={"flex flex-col items-start"}>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={isActive("/")}>
                  <Link href={"/"}>Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className={""}>
                <NavigationMenuTrigger
                  className={`p-2 cursor-pointer ${isActive(
                    "/services",
                    true
                  )}`}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className={"shadow-md"}>
                  <ul className="w-[200px] ">
                    <li className="active:bg-gray rounded-md p-2 cursor-pointer">
                      <Link href={"/services/media-wall"}>
                        Media Wall Installation
                      </Link>
                    </li>
                    <li className="active:bg-gray rounded-md p-2 cursor-pointer">
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
                <NavigationMenuLink
                  asChild
                  className={isActive("/blogs", true)}
                >
                  <Link href={"/"}>Blogs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={"btn-primary ml-2"}>
                  <Link href={"/"}>Book Now</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSlidebar;
