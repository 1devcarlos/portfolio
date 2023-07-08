"use client";

import { Button } from "@/app/components/Button";
import { CMSIcon } from "@/app/components/cms-icon";
import { RichText } from "@/app/components/rich-text";
import { techBadgeAnimation } from "@/app/lib/animations";
import { HomePageInfo } from "@/app/types/page-info";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TechBadge } from "../TechBadge";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-full h-[755px] flex flex-col justify-center pb-10 py-10 lg:py-32">
      <div className="container flex items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:max-w-[530px]"
        >
          <p className="text-lg text-gray-400">
            Olá, meu nome é{" "}
            <span className="font-medium text-gray-50 my-6 text-sm sm:text-base">
              Carlos Gomes
            </span>
          </p>
          <h2 className="font-bold text-6xl text-rose mt-2">
            Desenvolvedor Frontend
          </h2>
          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[250px]">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                {...techBadgeAnimation}
                transition={{ duration: 0.3, delay: i * 0.2 }}
              />
            ))}
          </div>

          <div className="mt-16 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button" onClick={handleContact}>
              Entre em Contato
              <HiArrowNarrowRight />
            </Button>

            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, i) => (
                <a
                  href={contact.url}
                  key={`contact-${i}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            src={homeInfo.logoPicture.url}
            width={320}
            height={300}
            alt="Logo CG"
            className="w-[300px] h-[300px] mb-6 hidden lg:block shadow-2xl rounded-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
