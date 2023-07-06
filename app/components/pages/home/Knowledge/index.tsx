import { KnownTech as IKnownTech } from "@/app/types/projects";
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
        {techs?.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
