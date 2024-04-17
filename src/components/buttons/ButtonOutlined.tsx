import { ComponentProps } from "react";

export default function ButtonOutlined({
  children,
  onClick,
}: ComponentProps<"button">) {
  return (
    <button
      className="rounded-md border-[1px] border-indigo-400 bg-transparent px-6 py-3
        text-indigo-400 transition duration-300 
        hover:border-indigo-500 hover:text-indigo-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
