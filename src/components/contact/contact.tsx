"use client";
import { RefObject } from "react";
import Email from "@/assets/email.svg";
import Phone from "@/assets/phone.svg";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Form from "./form";

const fadeToLeft = {
  hidden: { opacity: 0, x: "90px" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Contact({
  refer,
}: {
  refer: RefObject<HTMLDivElement>;
}) {
  const t = useTranslations("Contact");

  return (
    <section
      ref={refer}
      className="flex flex-col items-center bg-neutral-900 px-4 py-24"
    >
      <div
        className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 
      justify-items-center  lg:grid-cols-2"
      >
        <Form />
        <div className="row-start-1 lg:col-start-2">
          <motion.h2
            className="text-center text-4xl font-medium text-white md:text-5xl lg:text-left"
            initial="hidden"
            whileInView="visible"
            variants={fadeToLeft}
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
          <motion.span
            className="mb-5 mt-5 hidden text-xl text-neutral-400 lg:block"
            initial="hidden"
            whileInView="visible"
            variants={fadeToLeft}
            viewport={{ once: true, margin: "-100px" }}
          >
            {t("description")}
          </motion.span>
          <motion.ul
            className="mt-6 text-white"
            initial="hidden"
            whileInView="visible"
            variants={fadeToLeft}
            viewport={{ once: true, margin: "-100px" }}
          >
            <li className="mb-2 flex items-center gap-2">
              <Email /> mateus.silvainfo@gmail.com
            </li>
            <li className="mb-2 flex items-center gap-2">
              <Phone /> +55 11 95492-5932
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
