"use client";

import Tool from "./tool";
import Node from "@/assets/tools/node.svg";
import Nest from "@/assets/tools/nestjs.svg";
import Tailwind from "@/assets/tools/tailwind.svg";
import Typescript from "@/assets/tools/typescript.svg";
import Javascript from "@/assets/tools/javascript.svg";
import Next from "@/assets/tools/next.svg";
import ReactJs from "@/assets/tools/reactjs.svg";
import Sass from "@/assets/tools/scss.svg";
import Git from "@/assets/tools/git.svg";
import Docker from "@/assets/tools/docker.svg";
import Mysql from "@/assets/tools/mysql.svg";
import Mongo from "@/assets/tools/mongo.svg";
import { RefObject, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { once } from "events";

export default function Tools({ refer }: { refer: RefObject<HTMLDivElement> }) {
  const [toolDescription, setToolDescription] = useState<string | null>(null);
  const t = useTranslations("Tools");

  const technologies = [
    {
      svg: <Typescript />,
      info: t("TypeScript.description"),
    },
    {
      svg: <Javascript />,
      info: t("Javascript.description"),
    },
    {
      svg: <Nest />,
      info: t("Nest.description"),
    },
    {
      svg: <Next />,
      info: t("Next.description"),
    },
    {
      svg: <ReactJs />,
      info: t("React.description"),
    },
    {
      svg: <Node />,
      info: t("Node.description"),
    },

    {
      svg: <Mysql />,
      info: t("Mysql.description"),
    },
    {
      svg: <Mongo />,
      info: t("Mongo.description"),
    },
    {
      svg: <Docker />,
      info: t("Docker.description"),
    },

    {
      svg: <Git />,
      info: t("Git.description"),
    },
    {
      svg: <Tailwind />,
      info: t("Tailwind.description"),
    },
    {
      svg: <Sass />,
      info: t("Sass.description"),
    },
  ];

  const list = {
    hidden: {
      opacity: 0,
      y: "90px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };



  return (
    <section ref={refer} className="relative overflow-x-hidden py-24">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-center text-4xl font-medium text-black md:text-5xl lg:text-left">
            {t.rich("title", {
              decorated: (chunk) => (
                <span className="bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  {chunk}
                </span>
              ),
            })}
            <span className="text-purple-500">.</span>
          </h2>
          <span className="my-5 hidden text-xl text-neutral-600 lg:block">
            {t("description")}
          </span>
          {toolDescription && (
            <span className="hidden text-xl text-indigo-600 lg:block">
              {toolDescription}
            </span>
          )}
        </div>
        <motion.ul
          className="z-40 mt-12 grid grid-cols-2 justify-items-center gap-4 justify-self-center md:grid-cols-3 xl:grid-cols-4"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          {technologies.map((technology, index) => {
            return (
              <Tool
                key={index}
                onMouseEnter={() => setToolDescription(technology.info)}
                onMouseLeave={() => setToolDescription(null)}
              >
                {technology.svg}
              </Tool>
            );
          })}
        </motion.ul>
      </div>
      <div className="absolute -left-10 bottom-0 z-30 h-60 w-60 animate-pulse-slow rounded-full bg-purple-200 mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-5 left-40 z-30 h-60 w-60 animate-pulse-slow rounded-full bg-blue-200 mix-blend-multiply blur-3xl"></div>
      <div className="absolute bottom-52 z-30 h-60 w-60 animate-pulse-slow rounded-full bg-yellow-100 mix-blend-multiply blur-3xl"></div>
      <div className="absolute right-5 top-52 z-30 h-60 w-60 animate-pulse-slow rounded-full bg-purple-200 mix-blend-multiply blur-3xl"></div>
      <div className="absolute -top-6 right-40 z-30 h-60 w-60 animate-pulse-slow rounded-full bg-blue-200 mix-blend-multiply blur-3xl"></div>
      <div className="absolute -right-10 top-0 z-30 h-60 w-60 animate-pulse-slow rounded-full bg-yellow-100 mix-blend-multiply blur-3xl"></div>
    </section>
  );
}
