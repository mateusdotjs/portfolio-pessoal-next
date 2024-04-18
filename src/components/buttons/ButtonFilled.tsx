import { ComponentProps, ReactNode } from "react";

type ButtonType = ComponentProps<"button"> & {
  children: ReactNode;
};

export default function ButtonFilled({ children, onClick }: ButtonType) {
  return (
    <button
      className="rounded-md bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-500 px-6 py-3 text-base text-white transition 
      duration-300 
      hover:bg-violet-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
