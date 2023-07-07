"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="text-gray-50 bg-red-900/40 text-sm py-1 px-3 rounded-lg"
      {...props}
    >
      {name}
    </motion.span>
  );
};
