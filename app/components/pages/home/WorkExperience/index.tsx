import { SectionTitle } from "../SectionTitle";
import { ExperienceItem } from "./ExperienceItem";

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />

        <p className="text-gray-400 mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut enim eos
          voluptatum consectetur ab necessitatibus sequi quod quisquam, rerum
          dolorum!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  );
};
