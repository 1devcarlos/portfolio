"use client";

import { motion } from "framer-motion";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "../components/Link";
import { SectionTitle } from "../components/pages/home/SectionTitle";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[350px] lg:h-[630px] flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="hire"
        title="Contratar"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Quer transformar sua próxima idea de aplicação em realidade ? Entre em
          contato para discutirmos seus próximos passos!.
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar a Página Inicial
        </Link>
      </motion.div>
    </section>
  );
};
