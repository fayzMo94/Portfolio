import jicalmboxLandingPage from "@/assets/images/Jicalmbox-landing-page.png";
import argentBankLandingPage from "@/assets/images/ArgentBank-landing-page.png";
import kasaLandingPage from "@/assets/images/kasa-landing-page.png";
import bookiLandingPage from "@/assets/images/Booki-landing-page.png";
import ohMyFoodLandingPage from "@/assets/images/oh-my-food-landing-page.png";
import sophieBluelLandingPage from "@/assets/images/Portfolio-sophie-bluel-landing-page.png";
import eventsLandingPage from "@/assets/images/724events-landing-page.png";
import portfolioLandingPage from "@/assets/images/Portfolio-landing-page3.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

// Portfolio projects data
const portfolioProjects = [
  {
    company: "Jicalmbox",
    year: "2024",
    title: "Jicalmbox Vente de box par abonnement",
    results: [
      { title: "Wordpress" },
      { title: "CSS" },
      { title: "Javascript" },
    ],
    link: "https://jicalmbox.com",
    image: jicalmboxLandingPage,
    buttonTxt: "Voir le site",
  },
  {
    company: "ArgentBank",
    year: "2024",
    title: "ArgentBank Application Bancaire",
    results: [{ title: "React" }, { title: "Redux" }, { title: "Javascript" }],
    link: "https://github.com/fayzMo94/opc_iw_projet10_argentBank",
    image: argentBankLandingPage,
    buttonTxt: "Lien github",
  },
  {
    company: "Kasa",
    year: "2024",
    title: "Kasa Site de Location Immobilière",
    results: [{ title: "REACT" }, { title: "SaSS" }, { title: "Javascript" }],
    link: "https://github.com/fayzMo94/opc_iw_projet7_kasa-location",
    image: kasaLandingPage,
    buttonTxt: "Lien github",
  },
  {
    company: "724 events",
    year: "2024",
    title: "724 events Site d'orginasateur d'événements",
    results: [{ title: "REACT" }, { title: "Javascript" }],
    link: "https://github.com/fayzMo94/opc_iw_projet9_724events",
    image: eventsLandingPage,
    buttonTxt: "Lien github",
  },
  {
    company: "OhMyFood",
    year: "2024",
    title: "OhMyFood Application de commande de repas",
    results: [{ title: "HTML" }, { title: "Sass" }],
    link: "https://github.com/fayzMo94/opc_iw_projet4_ohmyfood",
    image: ohMyFoodLandingPage,
    buttonTxt: "Lien github",
  },
  {
    company: "Booki",
    year: "2024",
    title: "Booki Site d'hebergement de vacances",
    results: [{ title: "HTML" }, { title: "CSS" }],
    link: "https://github.com/fayzMo94/",
    image: bookiLandingPage,
    buttonTxt: "Lien github",
  },
  {
    company: "Sophie Bluel",
    year: "2024",
    title: "Sophie Bluel Portfolio Architecte d'intérieur",
    results: [{ title: "HTML" }, { title: "Javascript" }],
    link: "https://github.com/fayzMo94/opc_iw_projet6_portfolioSophieBluel",
    image: sophieBluelLandingPage,
    buttonTxt: "Lien github",
  },
  {
    company: "Fayz Mohamed",
    year: "2025",
    title: "Portfolio Fayz Mohamed Développeur Web",
    results: [
      { title: "NextJS" },
      { title: "Typecript" },
      { title: "TailwindCSS" },
    ],
    link: "https://fayzmohamed.com/",
    image: portfolioLandingPage,
    buttonTxt: "Lien portfolio",
  },
];

//

export const ProjectsSection = () => {
  return (
    <section id="projectsSection" className="pb-16 lg:py-24">
      <div className="container">
        {/* Section header */}
        <SectionHeader
          eyebrow="Résultats"
          title="Mes Projets"
          description="Parcourez mes créations et découvrez comment j'ai transformé des visions en expériences digitales attrayantes."
        />
        {/* Cards wrapper */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              {/* card content */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                      <span>{project.buttonTxt}</span>
                      <ArrowUpRightIcon className="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
