import aboutJPG from "@/assets/about/about.jpg";
import Linkedin from "@/assets/social/linkedin.svg";
import Github from "@/assets/social/github.svg";
import Whatsapp from "@/assets/social/whatsapp.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import MotionLink from "../utils/motionLink";

export default function About() {
  const t = useTranslations("About");

  const linkList = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const link = {
    hidden: {
      opacity: 0,
      y: "90px",
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const textList = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const text = {
    hidden: {
      opacity: 0,
      x: "90px",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <section id="about" className="lg:pb-24 lg:pt-4">
      <motion.div
        className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-10 rounded-xl border-neutral-200 bg-neutral-50 px-10 py-14 md:flex-row lg:border-2"
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textList}
          >
            <motion.h2
              className="mb-5 bg-clip-text text-xl font-semibold text-indigo-400"
              variants={text}
            >
              {t("title")}
            </motion.h2>
            <motion.p
              className="mb-5 text-2xl font-semibold text-neutral-800"
              variants={text}
            >
              {t("greeting")}👋
            </motion.p>
            <motion.p
              className="mb-10 text-xl text-neutral-500"
              variants={text}
            >
              {t("text")}
            </motion.p>
          </motion.div>
          <motion.div
            className="flex gap-6"
            initial="hidden"
            whileInView="visible"
            variants={linkList}
            viewport={{ once: true }}
          >
            {/* to-do: remover código duplicado */}
            <MotionLink
              variants={link}
              href={"https://www.linkedin.com/in/mateus-soares27/"}
              target="_blank"
            >
              <Linkedin />
            </MotionLink>
            <MotionLink
              variants={link}
              href={"https://github.com/mateusdotjs"}
              target="_blank"
            >
              <Github />
            </MotionLink>
            <MotionLink
              variants={link}
              href={"https://wa.me/5511954925932?text=Ol%C3%A1!"}
              target="_blank"
            >
              <Whatsapp />
            </MotionLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
