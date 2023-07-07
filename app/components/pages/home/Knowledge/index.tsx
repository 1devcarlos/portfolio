"use client";

import { KnownTech as IKnownTech } from "@/app/types/projects";
import { motion } from "framer-motion";
import { SectionTitle } from "../SectionTitle";
import { TechCard } from "./TechCard";

type KnowledgeProps = {
  techs: IKnownTech[];
};

export const Knowledge = ({ techs }: KnowledgeProps) => {
  return (
    <section className="container py-16 ">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <TechCard key={tech.name} tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
