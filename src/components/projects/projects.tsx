import { RefObject } from "react";
import Project from "./project";
import { useTranslations } from "next-intl";

export default function Projects({
  refer,
}: {
  refer: RefObject<HTMLDivElement>;
}) {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "Vialerta",
      text: t("Vialerta.description"),
      repoLink: "https://github.com/mateusdotjs/vialerta",
      demoLink: "https://vialerta.netlify.app/",
    },
    {
      title: t("API.title"),
      text: t("API.description"),
      repoLink: "https://github.com/mateusdotjs/api-metro-sp",
      demoLink: "https://api-metro-sp.onrender.com/",
    },
    {
      title: "Fintech Dashboard",
      text: t("Fintech.description"),
      repoLink: "https://github.com/mateusdotjs/fintech-tsc",
      demoLink: "https://fintech-dashboard-tsc.netlify.app/",
    },
  ];

  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-neutral-950 px-4 py-16"
    >
      <h2 className="text-center text-4xl font-medium text-white md:text-5xl lg:text-left">
        {t.rich("title", {
          decorated: (chunk) => (
            <span className="bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {chunk}
            </span>
          ),
        })}

        <span className="text-purple-500">.</span>
      </h2>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center">
        <div className="mb-12 mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                text={project.text}
                repoLink={project.repoLink}
                demoLink={project.demoLink}
              />
            );
          })}
        </div>
        <a
          href="https://github.com/mateusdotjs?tab=repositories"
          target="_blank"
          className="text-lg text-indigo-400 underline-offset-8 hover:underline"
        >
          {t("link")}
        </a>
      </div>
    </section>
  );
}
