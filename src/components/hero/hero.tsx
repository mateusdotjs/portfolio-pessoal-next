import { RefObject } from "react";
import ButtonFilled from "../buttons/ButtonFilled";
import ButtonOutlined from "../buttons/ButtonOutlined";
import { useTranslations } from "next-intl";
import Slider from "./slider";
import Link from "next/link";

export default function Hero({ refer }: { refer: RefObject<HTMLDivElement> }) {
  const t = useTranslations("Hero");

  return (
    <section ref={refer} className="mt-20 p-24 px-3">
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 grid-rows-1 place-items-center bg-white md:grid-cols-2">
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
            <Link href="https://github.com/mateusdotjs" target="_blank">
              <ButtonFilled>GitHub</ButtonFilled>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mateus-soares27/"
              target="_blank"
            >
              <ButtonOutlined>LinkedIn</ButtonOutlined>
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="animate-pulse-slow absolute -left-4 top-[calc(50%-80px)] h-52 w-52 -translate-y-1/2 rounded-full bg-purple-300 mix-blend-multiply blur-3xl "></div>
          <div className="animate-pulse-slow absolute -right-14 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-blue-200 mix-blend-multiply blur-3xl "></div>
          <div className="animate-pulse-slow absolute top-[calc(50%+100px)] h-52 w-52 -translate-y-1/2 rounded-full bg-yellow-100 mix-blend-multiply blur-3xl "></div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
