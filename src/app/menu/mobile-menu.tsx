"use client";

import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Button } from "../component/button";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS } from "../../constants";

const MobileSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock/unlock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative z-50 md:hidden">
      {/* Hamburger Icon */}
      <button onClick={toggleMenu} className="text-primary p-2 text-2xl">
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={toggleMenu}
      />

      {/* Slide-in Menu */}
      <div
        className={`bg-dark-gray fixed top-0 left-0 h-full w-72 text-gray-300 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-8">
          <ul className="flex flex-col space-y-4 divide-y divide-[#413f3f] border-y border-[#413f3f] font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="py-4 pl-8">
                <button
                  className="capitalize"
                  onClick={() => {
                    router.push(item.link);
                    toggleMenu();
                  }}
                >
                  <span
                    className={
                      pathname === item.link
                        ? "text-primary font-semibold"
                        : "text-white"
                    }
                  >
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-0 w-full px-8">
            <Button
              onClick={() => {
                router.push("/#contact-us");
                toggleMenu();
              }}
              className="my-10 w-full rounded-xl px-4 py-2.5"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
