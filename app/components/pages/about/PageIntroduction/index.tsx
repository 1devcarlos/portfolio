import { Link } from "@/app/components/Link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SectionTitle } from "../../home/SectionTitle";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[350px] lg:h-[630px] flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="sobre"
        title="Sobre Mim"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Quer me conhecer um pouco melhor ? Falarei um pouco sobre mim!
        </p>
        <Link href="/" className="absolute top-24 left-14  lg:left-12  ">
          <HiArrowNarrowLeft size={20} />
          Voltar a Página Inicial
        </Link>
      </div>
    </section>
  );
};
