"use client";

import { headerAnimation } from "@/app/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import { NAV_ITEMS } from "./navItems";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (!isMobile) {
      closeMenu();
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      className="fixed w-full bg-darker/80 flex p-4 justify-between items-center h-20 shadow-lg z-40 px-2 2xl:px-20"
      {...headerAnimation}
    >
      <Link href="/" className="p-4" onClick={closeMenu}>
        <Image
          src="/logo.png"
          alt="Logo CGDev"
          width={38}
          height={30}
          className="w-auto h-auto"
        />
      </Link>

      <div
        className="absolute right-6 sm:hidden top-6 cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-full h-px bg-gray-50 my-2 ${
            isMenuOpen
              ? "transition-all duration-300 origin-center transform-gpu rotate-45 translate-y-[9px]"
              : ""
          }`}
        />
        <div
          className={`w-6 h-px bg-gray-50 my-2 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-full h-px bg-gray-50 my-2 ${
            isMenuOpen
              ? "transition-all duration-300 origin-center transform-gpu -rotate-45 -translate-y-[9px]"
              : ""
          }`}
        />
      </div>

      <ul className="hidden sm:flex gap-8 p-6">
        {NAV_ITEMS.map((item, index) => (
          <li
            key={index}
            className="relative group transition-all hover:text-gray-50 text-gray-400 flex items-center font-medium"
          >
            <Link href={item.href}>
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-black via-rose-500 to-rose transition-all duration-500 ease-in-out group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <MenuItems closeMenu={closeMenu} active={isMenuOpen} />
    </motion.header>
  );
};
