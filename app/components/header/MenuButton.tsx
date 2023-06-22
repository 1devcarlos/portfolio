import { useState } from "react";

interface MenuButtonProps {
  menuContent: React.ReactElement;
}

export default function MenuButton({ menuContent }: MenuButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      className={`mobile-nav w-20 h-8 flex items-center justify-center focus:outline-none ${
        isMenuOpen ? "active" : ""
      }`}
      onClick={toggleMenu}
    >
      <div className="w-full h-full">
        <div
          className={`w-full h-px my-2 bg-gray-50 transition-all transform-gpu duration-300 origin-center ${
            isMenuOpen ? "rotate-45 translate-y-[9px]" : "rotate-0"
          }`}
        />
        <div
          className={`w-full h-px my-2 bg-gray-50 transition-all transform-gpu duration-300 origin-center ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`w-full h-px bg-gray-50 transition-all transform-gpu duration-300 origin-center ${
            isMenuOpen ? "-rotate-45 -translate-y-[9px]" : "rotate-0"
          }`}
        />
      </div>
      {isMenuOpen && menuContent}
    </button>
  );
}
