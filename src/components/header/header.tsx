"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Menu from "@/assets/menu.svg";
import LanguageSwitcher from "./language-switcher";
import { motion } from "framer-motion";
import MotionLink from "../utils/motionLink";

const list = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: "50px",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Header() {
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

  const links = [
    {
      title: "Home",
      id: "hero",
    },
    {
      title: t("about"),
      id: "about",
    },
    {
      title: t("projects"),
      id: "projects",
    },
    {
      title: t("tools"),
      id: "tools",
    },
    {
      title: t("contact"),
      id: "contact",
    },
  ];

  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center border-b-[1px] border-neutral-200 bg-white px-3">
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
          <motion.ul
            className="flex flex-col gap-5 text-base text-neutral-600 md:flex-row md:gap-14"
            initial="hidden"
            animate="visible"
            variants={list}
          >
            {links.map((link) => {
              return (
                <li
                  key={link.id}
                  id={link.id}
                  className="cursor-pointer hover:text-indigo-500"
                >
                  <MotionLink variants={item} href={"#hero"}>
                    {link.title}
                  </MotionLink>
                </li>
              );
            })}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
}
