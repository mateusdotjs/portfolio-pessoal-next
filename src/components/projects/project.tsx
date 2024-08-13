import Link from "next/link";
import ButtonFilled from "../buttons/ButtonFilled";
import { useTranslations } from "next-intl";

type ProjectProps = {
  title: string;
  text: string;
  link: string;
};

export default function Project({ title, text, link }: ProjectProps) {
  const t = useTranslations("Projects");

  return (
    <div
      className="flex rounded-md p-[1px] group
    hover:bg-gradient-to-br hover:from-purple-600
    hover:via-indigo-400 hover:to-blue-500"
    >
      <div
        className="flex w-full flex-col gap-5 
        rounded-md border-[1px] border-neutral-700 bg-neutral-800 p-7 
        transition duration-200 md:w-96"
      >
        <span className="text-xl font-medium text-neutral-100">{title}</span>
        <span className="flex-1 text-lg text-neutral-400">{text}</span>
        <div className="flex gap-3">
          {link && (
            <Link href={link} target="_blank">
              <span className="text-lg font-medium text-indigo-400 underline-offset-4 hover:underline">
                {t("projectLink")}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
