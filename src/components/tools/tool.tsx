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
      className="flex h-40 w-40 cursor-pointer
        items-center justify-center rounded-md bg-neutral-100 
        hover:bg-gradient-to-b hover:from-cyan-400 hover:via-indigo-400 hover:to-purple-500"
    >
      <div className="rounded-full bg-white shadow-md p-2">{children}</div>
    </div>
  );
}
