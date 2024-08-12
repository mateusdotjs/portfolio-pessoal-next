import { RefObject } from "react";
import aboutJPG from "@/assets/about/about.jpg";
import Linkedin from "@/assets/social/linkedin.svg";
import Github from "@/assets/social/github.svg";
import Whatsapp from "@/assets/social/whatsapp.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function About({ refer }: { refer: RefObject<HTMLDivElement> }) {
  const t = useTranslations("About");

  return (
    <section ref={refer} className="lg:pt-4 lg:pb-24">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-10 rounded-xl border-neutral-200 bg-neutral-50 px-10 py-14 md:flex-row lg:border-2">
        <div className="flex justify-center">
          <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-indigo-400 to-blue-500">
            <Image
              src={aboutJPG.src}
              width={250}
              height={250}
              alt="Mateus Soares"
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <h2 className="mb-5 bg-clip-text text-xl font-semibold text-indigo-400">
            {t("title")}
          </h2>
          <p className="mb-5 text-2xl font-semibold text-neutral-800">
            {t("greeting")}👋
          </p>
          <p className="mb-10 text-xl text-neutral-500">{t("text")}</p>
          <div className="flex gap-6">
            {/* to-do: remover código duplicado */}
            <Link
              href={"https://www.linkedin.com/in/mateus-soares27/"}
              target="_blank"
            >
              <Linkedin />
            </Link>
            <Link href={"https://github.com/mateusdotjs"} target="_blank">
              <Github />
            </Link>
            <Link
              href={"https://wa.me/5511954925932?text=Ol%C3%A1!"}
              target="_blank"
            >
              <Whatsapp />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
