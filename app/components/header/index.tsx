"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuButton } from "./MenuButton";
import { NavItem } from "./NavItem";

const NAV_ITEMS = [
  {
    label: "Projetos",
    href: "/projects",
  },
  {
    label: "Sobre",
    href: "/about",
  },
  {
    label: "Contato",
    href: "/contact",
  },
];

const MobileMenu = () => (
  <div className="absolute top-10 left-0 bg-darker py-4 text-gray-50 mt-8 w-full rounded-lg shadow-lg z-10 ">
    <nav className="flex flex-col justify-between gap-4 items-center h-screen">
      {NAV_ITEMS.map((item) => (
        <NavItem {...item} key={item.label} />
      ))}
    </nav>
  </div>
);

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="absolute top-0 w-full z-10">
      <div className="container flex justify-between items-center">
        <Link href="/" className="p-4">
          <Image
            src="/logo.png"
            alt="CG Logo"
            width={38}
            height={30}
            className="w-auto h-auto"
          />
        </Link>

        {isMobile ? (
          <MenuButton menuContent={<MobileMenu />} />
        ) : (
          <nav className="hidden md:flex items-center gap-6 md:gap-10 ">
            {NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label} />
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
