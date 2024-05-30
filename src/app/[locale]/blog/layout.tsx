import { ReactNode } from "react";
import LanguageSwitcher from "../../../components/language-switcher/language-switcher";
import { Link } from "../../../components/navigation";
import { useTranslations } from "next-intl";

export default function BlogLayout({ children }: { children: ReactNode }) {
  const t = useTranslations("Footer");

  return (
    <div className="min-w-screen flex min-h-screen flex-col items-center bg-neutral-950">
      <header className="mx-auto flex w-[700px] items-center justify-between border-b-[1px] border-b-neutral-700 py-5">
        <LanguageSwitcher />
        <div className="flex gap-5">
          <Link href={"/blog"} className="text-white hover:text-blue-300">
            Home
          </Link>
          <Link href={"/"} className="text-white hover:text-blue-300">
            Portfolio
          </Link>
        </div>
      </header>
      {children}
      <footer className="mt-5 py-10">
        <p className="text-center text-lg text-neutral-200">{t("text")}</p>
      </footer>
    </div>
  );
}
