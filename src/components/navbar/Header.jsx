import React from "react";
import MenuItems from "./MenuItems";
import MenuSlidebar from "./MenuSlidebar";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between flex-wrap px-4 py-2 border-b border-gray bg-light w-full sticky top-0 left-0 z-40">
      <Logo />

      {/* Menubar (Only Tablet/Desktop) */}
      <div className="hidden md:block">
        <MenuItems />
      </div>

      {/* Slide Menu (Only Mobile) */}
      <div className="block md:hidden">
        <MenuSlidebar />
      </div>
    </header>
  );
};

export default Header;
