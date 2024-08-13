import { RefObject } from "react";
import Project from "./project";
import { useTranslations } from "next-intl";
import { link } from "fs";
import Link from "next/link";

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
      link: "https://vialerta.netlify.app/",
    },
    {
      title: t("API.title"),
      text: t("API.description"),
      link: "https://github.com/mateusdotjs/api-metro-sp",
    },
    {
      title: "Fintech Dashboard",
      text: t("Fintech.description"),
      link: "https://fintech-dashboard-tsc.netlify.app/",
    },
    {
      title: "Doit",
      text: t("Doit.description"),
      link: "https://github.com/mateusdotjs/doit",
    },
  ];

  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-neutral-900 px-4 py-24"
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
                link={project.link}
              />
            );
          })}
        </div>
        <Link
          href="https://github.com/mateusdotjs?tab=repositories"
          target="_blank"
          className="text-lg text-indigo-400 underline-offset-8 hover:underline"
        >
          {t("githubLink")}
        </Link>
      </div>
    </section>
  );
}
