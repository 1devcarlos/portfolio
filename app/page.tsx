import { BestProjects } from "./components/pages/home/BestProjects";
import { Knowledge } from "./components/pages/home/Knowledge";
import { WorkExperience } from "./components/pages/home/WorkExperience";
import { HeroSection } from "./components/pages/home/hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Knowledge />
      <BestProjects />
      <WorkExperience />
    </>
  );
}
