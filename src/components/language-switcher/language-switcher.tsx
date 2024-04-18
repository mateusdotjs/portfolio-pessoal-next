"use client";

import Portuguese from "@/assets/lang/pt.svg";
import English from "@/assets/lang/en.svg";
import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  function handleClick(lang: string) {
    router.replace(`/${lang}`, { scroll: false });
  }

  return (
    <div className="flex gap-2 left-0 absolute">
      <button onClick={() => handleClick("pt")}>
        <Portuguese />
      </button>
      <button onClick={() => handleClick("en")}>
        <English />
      </button>
    </div>
  );
}
