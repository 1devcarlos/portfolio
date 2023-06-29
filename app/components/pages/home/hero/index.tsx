import { Button } from "@/app/components/Button";
import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineDocumentText } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";
import { TechBadge } from "../TechBadge";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/1devcarlos",
    icon: <TbBrandGithub />,
    tooltipText: "Meu Github",
  },
  {
    url: "https://www.linkedin.com/in/1devcarlos/",
    icon: <TbBrandLinkedin />,
    tooltipText: "Meu LinkedIn",
  },

  {
    url: "https://github.com/1devcarlos",
    icon: <TbBrandWhatsapp />,
    tooltipText: "Fale comigo",
  },
  {
    url: "https://github.com/1devcarlos",
    icon: <HiOutlineDocumentText />,
    tooltipText: "Baixe meu currículo",
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full h-[755px] flex flex-col justify-center pb-10 py-10 lg:py-32">
      <div className="container flex items-start justify-between">
        <div className="w-full lg:max-w-[530px]">
          <p className="text-lg text-gray-400">
            Olá, meu nome é{" "}
            <span className="font-medium text-gray-50 my-6 text-sm sm:text-base">
              Carlos Gomes
            </span>
          </p>
          <h2 className="font-bold text-6xl text-rose mt-2">
            Desenvolvedor Frontend
          </h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Ajudo empresas a se tornarem{" "}
            <span className="font-semibold text-gray-100 my-6 text-sm sm:text-base">
              Digitais
            </span>{" "}
            e{" "}
            <span className="font-semibold text-gray-100 my-6 text-sm sm:text-base">
              Modernas
            </span>
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[250px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name={"Next"} />
            ))}
          </div>

          <div className="mt-16 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button ">
              Entre em Contato
              <HiArrowNarrowRight />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center justify-center h-20 gap-28 lg:gap-14 sm:gap-10 px-2 sm:py-1">
              {MOCK_CONTACTS.map((contact, index) => (
                <div
                  key={`contact-${index}`}
                  className="relative group mt-28 sm:mt-0"
                >
                  <a
                    href={contact.url}
                    target="_blank"
                    className="hover:text-gray-100 hover:animate-pulse transition-colors"
                  >
                    {contact.icon}
                  </a>
                  <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 py-2 px-4 bg-dark text-gray-400 text-xs center rounded opacity-0 invisible  transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
                    {contact.tooltipText}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src="/logo.png"
          width={320}
          height={300}
          alt="Logo CG"
          className="absolute right-20 top-40 hidden lg:block w-[320px] h-[300px]"
        />
      </div>
    </section>
  );
};
