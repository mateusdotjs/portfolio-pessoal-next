"use client";

import Portuguese from "@/assets/lang/pt.svg";
import English from "@/assets/lang/en.svg";
import { usePathname, useRouter } from "../navigation";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  function handleClick(lang: string) {
    const nextLocale = lang;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <motion.div
      className="flex gap-2"
      initial={{ opacity: 0, y: "50px" }}
      animate={{ opacity: 1, y: 0 }}
    >
      <button onClick={() => handleClick("pt")}>
        <Portuguese />
      </button>
      <button onClick={() => handleClick("en")}>
        <English />
      </button>
    </motion.div>
  );
}
