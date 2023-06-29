import { SectionTitle } from "../../pages/home/SectionTitle";

export const PageIntroduction = () => {
  return (
    <section>
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />

      <div>
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você pode ver alguns dos trabalhos que eu desenvolvi. Explore os
          projetos para ver como foram criados, as tecnologias utilizadas e as
          funcionalidades implementadas.
        </p>
      </div>
    </section>
  );
};
