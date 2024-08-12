"use client";

import Tool from "./tool";
import Node from "@/assets/node.svg";
import Tailwind from "@/assets/tailwind.svg";
import Typescript from "@/assets/typescript.svg";
import Next from "@/assets/next.svg";
import ReactJs from "@/assets/react.svg";
import Sass from "@/assets/sass.svg";
import Git from "@/assets/git.svg";
import { RefObject, useState } from "react";
import { useTranslations } from "next-intl";

export default function Tools({ refer }: { refer: RefObject<HTMLDivElement> }) {
  const [toolDescription, setToolDescription] = useState<string | null>(null);
  const t = useTranslations("Tools");

  const technologies = [
    {
      svg: <Next />,
      info: t("Next.description"),
    },
    {
      svg: <ReactJs />,
      info: t("React.description"),
    },
    {
      svg: <Typescript />,
      info: t("TypeScript.description"),
    },
    {
      svg: <Node />,
      info: t("Node.description"),
    },
    {
      svg: <Tailwind />,
      info: t("Tailwind.description"),
    },
    {
      svg: <Sass />,
      info: t("Sass.description"),
    },

    {
      svg: <Git />,
      info: t("Git.description"),
    },
  ];

  return (
    <section ref={refer} className=" py-24">
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
        <div className="mt-12 grid grid-cols-2 justify-items-center gap-4 justify-self-center lg:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}
