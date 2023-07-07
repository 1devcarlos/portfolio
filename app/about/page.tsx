import { FAQ } from "../components/pages/about/FAQ";
import { PageIntroduction } from "../components/pages/about/PageIntroduction";

export const metadata = {
  title: "Sobre",
};

export default function About() {
  return (
    <>
      <PageIntroduction />
      <FAQ />
    </>
  );
}
