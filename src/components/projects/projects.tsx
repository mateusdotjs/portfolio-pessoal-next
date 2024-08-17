"use client"

import Project from "./project";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import MotionLink from "../utils/motionLink";

const list = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Projects() {
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
      id="projects"
      className="flex flex-col items-center bg-neutral-900 px-4 py-24"
    >
      <motion.h2
        className="text-center text-4xl font-medium text-white md:text-5xl lg:text-left"
        initial={{ opacity: 0, y: "90px" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
      >
        {t.rich("title", {
          decorated: (chunk) => (
            <span className="bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {chunk}
            </span>
          ),
        })}

        <span className="text-purple-500">.</span>
      </motion.h2>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center">
        <motion.ul
          className="mb-12 mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
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
        </motion.ul>
        <MotionLink
          href="https://github.com/mateusdotjs?tab=repositories"
          target="_blank"
          className="text-lg text-indigo-400 underline-offset-8 hover:underline"
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once: true}}
        >
          {t("githubLink")}
        </MotionLink>
      </div>
    </section>
  );
}
