import Link from "next/link";
import { NAV_ITEMS } from "./navItems";

type MenuItemsProps = {
  closeMenu: () => void;
  active: boolean;
};

export const MenuItems = ({ closeMenu, active }: MenuItemsProps) => {
  return (
    <ul
      className={
        active
          ? "flex-col flex items-center fixed left-0 top-[85px] w-full  h-screen bg-black/40 backdrop-blur-lg gap-8 justify-around p-8 md:hidden z-40"
          : "hidden"
      }
    >
      {NAV_ITEMS.map((item, index) => (
        <li
          key={index}
          onClick={closeMenu}
          className="relative group transition-all hover:text-gray-50 text-gray-400 flex items-center font-medium"
        >
          <Link href={item.href}>
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-black via-rose-500 to-rose transition-all duration-500 ease-in-out group-hover:w-full" />
          </Link>
        </li>
      ))}
    </ul>
  );
};
