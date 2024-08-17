import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-neutral-950 py-10">
      <p className="text-center text-lg text-neutral-200">{t("text")}</p>
    </footer>
  );
}
