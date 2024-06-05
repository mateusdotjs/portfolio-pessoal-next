"use client";

import { useTranslations } from "next-intl";

export default function Error() {
    const t = useTranslations("Blog")
  return (
    <div className="flex flex-1 items-center justify-center text-center text-white">
      {t("error")}
    </div>
  );
}
