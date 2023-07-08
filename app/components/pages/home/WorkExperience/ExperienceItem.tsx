"use client";

import { RichText } from "@/app/components/rich-text";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import { WorkExperience } from "@/app/types/work-experience";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion } from "framer-motion";
import Image from "next/image";
import { TechBadge } from "../TechBadge";

type ExperienceItemProps = {
  experience: WorkExperience;
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = new Date(experience.startDate);
  const endDate = new Date(experience.endDate);

  const end = endDate ? new Date(endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? "es" : ""}`
            : ""
        }`
      : `${months} mes${months > 1 ? "es" : ""}`;

  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });
  const formattedEndDate = experience.endDate
    ? format(endDate, "MMM yyyy", { locale: ptBR })
    : "O momento";

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={experience.companyLogo.url}
            alt={`logo da empresa ${experience.companyName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              className="text-gray-500 hover:text-rose transition-colors"
            >
              @ {experience.companyName}
            </a>
          ) : (
            <div className="text-gray-500 hover:text-rose transition-colors">
              @ {experience.companyName}
            </div>
          )}
          <h4 className="text-gray-300">{experience.role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate}{" "}
            {formattedEndDate !== "O momento" && `• (${formattedDuration})`}
          </span>
          <div className="text-gray-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {experience.technologies.map((tech, i) => (
            <TechBadge
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: i * 0.1 }}
              name={tech.name}
              key={`experience-${experience.companyName}-tech-${tech.name}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
