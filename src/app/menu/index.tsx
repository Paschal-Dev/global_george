"use client";

import React from "react";
import { NAV_ITEMS } from "../../constants";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className="hidden space-x-6 md:flex">
      {NAV_ITEMS.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={twMerge(
            "text-sm font-bold text-gray-100 uppercase",
            item.link === pathname && "text-white",
          )}
        >
          {item.name}
        </Link>
      ))}
    </ul>
  );
}
