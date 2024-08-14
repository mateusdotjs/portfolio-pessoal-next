import { ComponentProps } from "react";

export default function Tool({
  children,
  onMouseEnter,
  onMouseLeave,
}: ComponentProps<"div">) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex h-40 w-40 xl:h-36 xl:w-36 cursor-pointer
        items-center justify-center rounded-md bg-neutral-50 
        hover:bg-gradient-to-b hover:from-cyan-400 hover:via-indigo-400 hover:to-purple-500"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-md">
        {children}
      </div>
    </div>
  );
}
