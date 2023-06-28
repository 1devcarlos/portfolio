import { Link } from "@/app/components/Link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TechBadge } from "../../TechBadge";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full">
        <Image
          src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Thumbnail do projeto"
          width={420}
          height={304}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full rounded-lg"
        />
      </div>

      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image width={20} height={20} alt="" src="/title-icon.svg" />
          Project1
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          veritatis, eos vitae deleniti omnis itaque quod ad reiciendis eligendi
          officia deserunt voluptates minima iusto labore recusandae quo neque
          qui tempora repellat beatae sapiente earum reprehenderit? Vel eveniet
          omnis sed repudiandae, iure odit officia maxime architecto. Minima
          neque aliquid rem deserunt?
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/project1">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
