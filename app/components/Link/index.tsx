import { cn } from "@/app/lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-2 text-gray-300 text-sm hover:text-rose transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
