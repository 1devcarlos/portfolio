import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";
import { SectionTitle } from "../SectionTitle";
import { ExperienceItem } from "./ExperienceItem";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />

        <p className="text-gray-400 mt-6">
          Aqui estão algumas das minha experiências profissionais ao longo dos
          anos, que me proporcionaram um sólido conhecimento e uma ampla gama de
          habilidades (técnicas e não técnicas) necessárias para enfrentar os
          desafios diários no ambiente de trabalho.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.reverse().map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
