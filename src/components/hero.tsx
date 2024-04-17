import { RefObject } from "react";
import ButtonFilled from "./buttons/ButtonFilled";
import ButtonOutlined from "./buttons/ButtonOutlined";
import { useTranslations } from "next-intl";

export default function Hero({ refer }: { refer: RefObject<HTMLDivElement> }) {
  const t = useTranslations("Hero");

  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-white px-3 py-44"
    >
      <span className=" color-black mb-4 w-full text-center text-lg text-neutral-700 md:text-xl">
        {t("greeting")}
      </span>
      <h1 className="mb-4 text-center text-5xl font-semibold md:text-7xl">
        {t.rich("title", {
          decorated: (chunk) => (
            <span className="bg-gradient-to-br from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {chunk}
            </span>
          ),
        })}
      </h1>
      <span className="mb-8 text-center text-lg text-neutral-600 md:max-w-[50ch] md:text-xl">
        {t.rich("description", {
          bold: (chunk) => (
            <span className="font-bold text-black">{chunk}</span>
          ),
        })}
      </span>
      <div className="flex gap-5">
        <a href="https://github.com/mateusdotjs" target="_blank">
          <ButtonFilled>GitHub</ButtonFilled>
        </a>
        <a href="https://www.linkedin.com/in/mateus-soares27/" target="_blank">
          <ButtonOutlined>LinkedIn</ButtonOutlined>
        </a>
      </div>
    </section>
  );
}
