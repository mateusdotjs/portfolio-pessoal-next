"use client";

import Portuguese from "@/assets/lang/pt.svg";
import English from "@/assets/lang/en.svg";
import { usePathname, useRouter } from "../navigation";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  function handleClick(lang: string) {
    const nextLocale = lang;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className="flex gap-2">
      <button onClick={() => handleClick("pt")}>
        <Portuguese />
      </button>
      <button onClick={() => handleClick("en")}>
        <English />
      </button>
    </div>
  );
}
