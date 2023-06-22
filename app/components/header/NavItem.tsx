import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <div
      className={cn(
        "relative group transition-all hover:text-gray-50 text-gray-400 flex items-center font-medium",
        isActive && "text-gray-50"
      )}
    >
      <Link href={href}>
        {label}
        <span
          className={cn(
            "absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-black via-rose-500 to-rose transition-all duration-500 ease-in-out group-hover:w-full",
            isActive && "w-full"
          )}
        />
      </Link>
    </div>
  );
};
