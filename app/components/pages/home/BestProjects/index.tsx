import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "../../../Link";
import { HorizontalDivider } from "../../../divider/horizontal";
import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "./ProjectCard";

export const BestProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="work" title="Melhores Projetos" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard />
        <HorizontalDivider />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou ?</span>
          <Link href="/projects" className="inline-flex">
            Ver Todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
