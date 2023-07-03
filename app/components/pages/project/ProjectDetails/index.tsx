import { Button } from "@/app/components/Button";
import { Link } from "@/app/components/Link";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { SectionTitle } from "../../home/SectionTitle";
import { TechBadge } from "../../home/TechBadge";

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] bg-red-100"
        style={{
          background:
            "url(/hero-bg.png) no-repeat center/cover ,url(https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80) no-repeat center/cover",
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Projeto 1"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
        autem labore inventore amet temporibus magni vel sed qui eligendi
        veritatis!
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
        <TechBadge name="NextJs" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para Projetos
      </Link>
    </section>
  );
};
