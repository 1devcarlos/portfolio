import { BestProjects } from "./components/pages/home/BestProjects";
import { Knowledge } from "./components/pages/home/Knowledge";
import { WorkExperience } from "./components/pages/home/WorkExperience";
import { HeroSection } from "./components/pages/home/hero";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        logoPicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `;

  return fetchHygraphQuery(query, 60 * 60 * 24);
};

export default async function Home() {
  const { page: pageData } = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <Knowledge techs={pageData.knownTechs} />
      <BestProjects />
      <WorkExperience />
    </>
  );
}
