import Image from "next/image";
import { TechBadge } from "../TechBadge";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10 ">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://images.unsplash.com/photo-1684471040086-c03c78d65930?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="logo da empresa"
            width={40}
            height={40}
            className="rounded-lg"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-gray-500 hover:text-rose transition-colors"
          >
            @ Self Employed
          </a>
          <h4 className="text-gray-300">Desenvolvedor Frontend</h4>
          <span className="text-gray-500">
            mar 2022 * O Momento * (6 meses)
          </span>
          <p className="text-gray-400">
            Densenvolvimento de websites e Sistemas Web sob demanda utilizando
            tecnologias como Next, Tailwind, Typescript e Figma.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
        </div>
      </div>
    </div>
  );
};
