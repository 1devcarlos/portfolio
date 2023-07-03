import { Link } from "@/app/components/Link";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href="/projects/project1">
        <ProjectCard />
      </Link>
      <Link href="/projects/project1">
        <ProjectCard />
      </Link>
      <Link href="/projects/project1">
        <ProjectCard />
      </Link>
    </section>
  );
};
