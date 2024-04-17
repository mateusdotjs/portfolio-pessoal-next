import ButtonFilled from "../buttons/ButtonFilled";
import ButtonOutlined from "../buttons/ButtonOutlined";

type ProjectProps = {
  title: string;
  text: string;
  repoLink: string;
  demoLink: string;
};

export default function Project({
  title,
  text,
  repoLink,
  demoLink,
}: ProjectProps) {
  return (
    <div
      className="flex rounded-md p-[2px] 
    hover:bg-gradient-to-br hover:from-purple-600
    hover:via-indigo-400 hover:to-blue-500"
    >
      <div
        className="flex w-full flex-col rounded-md 
        border-[1px] border-neutral-800 bg-neutral-900 p-7 transition 
        duration-200 md:w-96"
      >
        <span className="mb-2 text-xl text-white">{title}</span>
        <span className="mb-8 flex-1 text-lg text-neutral-500">{text}</span>
        <div className="flex gap-3">
          <a href={repoLink} target="_blank">
            <ButtonOutlined>Repo</ButtonOutlined>
          </a>
          <a href={demoLink} target="_blank">
            <ButtonFilled>Demo</ButtonFilled>
          </a>
        </div>
      </div>
    </div>
  );
}
