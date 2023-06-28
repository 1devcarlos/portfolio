import { BestProjects } from "./components/pages/BestProjects";
import { HeroSection } from "./components/pages/hero";
import { Knowledge } from "./components/pages/Knowledge";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Knowledge />
      <BestProjects />
    </>
  );
}
