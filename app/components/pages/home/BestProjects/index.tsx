import { Project } from "@/app/types/projects";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "../../../Link";
import { HorizontalDivider } from "../../../divider/horizontal";
import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "./ProjectCard";

type BestProjectsProps = {
  projects: Project[];
};

export const BestProjects = ({ projects }: BestProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="trabalhos" title="Melhores Projetos" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}

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
