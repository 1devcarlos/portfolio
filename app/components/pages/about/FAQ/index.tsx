"use client";

import { motion } from "framer-motion";
import { faqData } from "../faqData";
import { FaqItem } from "./FaqItem";

export const FAQ = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      {faqData.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.6 }}
          >
            <FaqItem question={item.question} answer={item.answer} />
          </motion.div>
        );
      })}
    </div>
  );
};
