"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Menu from "@/assets/menu.svg";
import LanguageSwitcher from "./language-switcher/language-switcher";
import { Link } from "./navigation";
import { usePathname } from "next/navigation";

type functionProps = (elementId: string) => void;

export default function Header({
  scrollToDiv,
}: {
  scrollToDiv: functionProps;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center border-b-[1px] border-neutral-200 bg-white">
      <div className="relative mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <LanguageSwitcher />
        <button
          aria-label="menu"
          className="order-2 ml-3 rounded-md border-[1px] border-neutral-300 bg-neutral-50 p-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
        <nav
          className={`right-5 top-20 z-50 rounded-md bg-neutral-100 px-7 py-5 md:static md:flex md:items-center md:bg-transparent md:p-0
        ${isOpen ? "absolute border-[1px] border-neutral-300" : "hidden"}`}
        >
          <ul className="flex flex-col gap-5 text-base text-neutral-600 md:flex-row md:gap-14">
            {/* to-do: remover código duplicado */}
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("hero")}
            >
              <a>Home</a>
            </li>
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("about")}
            >
              <a>{t("about")}</a>
            </li>
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("projects")}
            >
              <a>{t("projects")}</a>
            </li>
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("tools")}
            >
              <a>{t("tools")}</a>
            </li>
            <li
              className="cursor-pointer hover:text-indigo-500"
              onClick={() => scrollToDiv("contact")}
            >
              <a>{t("contact")}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
