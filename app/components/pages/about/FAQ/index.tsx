"use client";

import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { faqData } from "../faqData";

export const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const handleCollapse = (index: any) => {
    if (expanded === index) {
      setExpanded(null);
    } else {
      setExpanded(index);
    }
  };
  return (
    <section className="container items-center flex flex-col justify-center">
      {faqData.map((item, index) => (
        <div key={index} className="items-center max-w-[640px]">
          {item.question}
          <div
            className="faq-icon cursor-pointer right-2"
            onClick={() => handleCollapse(index)}
          >
            {expanded === index ? <FaArrowUp /> : <FaArrowDown />}
          </div>

          {expanded === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </section>
  );
};
