import { TbBrandNextjs } from "react-icons/tb";
import { SectionTitle } from "../SectionTitle";
import { TechCard } from "./TechCard";

export const Knowledge = () => {
  return (
    <section className="container py-16 ">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <TechCard
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.js",
              startDate: "2022-11-07",
            }}
          />
        ))}
      </div>
    </section>
  );
};
