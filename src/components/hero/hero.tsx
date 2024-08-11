import { RefObject } from "react";
import ButtonFilled from "../buttons/ButtonFilled";
import ButtonOutlined from "../buttons/ButtonOutlined";
import { useTranslations } from "next-intl";
import Slider from "./slider";

export default function Hero({ refer }: { refer: RefObject<HTMLDivElement> }) {
  const t = useTranslations("Hero");

  return (
    <section ref={refer} className="">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 grid-rows-1 place-items-center bg-white px-3 py-32 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <h1 className="text-center text-5xl font-semibold leading-snug text-neutral-900 md:text-left md:text-6xl md:leading-[1.2]">
            {t.rich("title", {
              decorated: (chunk) => (
                <span className="bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  {chunk}
                </span>
              ),
              br: (chunk) => (
                <>
                  {chunk}
                  <br />
                </>
              ),
            })}
            ✨
          </h1>
          <p className="text-center text-base font-normal text-neutral-400 md:max-w-[45ch] md:text-left md:text-xl">
            {t("description")}
          </p>
          <div className="flex justify-center gap-5 md:justify-start">
            <a href="https://github.com/mateusdotjs" target="_blank">
              <ButtonFilled>GitHub</ButtonFilled>
            </a>
            <a
              href="https://www.linkedin.com/in/mateus-soares27/"
              target="_blank"
            >
              <ButtonOutlined>LinkedIn</ButtonOutlined>
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <Slider />
        </div>
      </div>
    </section>
  );
}
