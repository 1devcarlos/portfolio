"use client";

import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

type FaqItemProps = {
  question: string;
  answer: string;
};
export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const minusIcon = <TbMinus />;
  const plusIcon = <TbPlus />;

  return (
    <div
      className="w-[830px] my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer border-[1px] border-rose rounded-lg transition-all duration-200 ease-in"
      onClick={handleToggle}
    >
      <div className="px-6 text-center items-center h-20 select-none flex justify-between flex-row">
        <h5 className="text-gray-400">{question}</h5>
        <div className="flex-none pl-2 transition-all duration-200 ease-in">
          {expanded ? minusIcon : plusIcon}
        </div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-all duration-200 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-center text-gray-400">{answer}</p>
      </div>
    </div>
  );
};
