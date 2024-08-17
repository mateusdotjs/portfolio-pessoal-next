import { ComponentProps, ReactNode } from "react";

type ButtonType = ComponentProps<"button"> & {
  children: ReactNode;
  loading?: boolean;
};

export default function ButtonFilled({
  children,
  onClick,
  loading = false,
}: ButtonType) {
  return (
    <button
      className={
        loading
          ? "rounded-md bg-neutral-700 px-6 py-3 text-base text-neutral-300 disabled:cursor-not-allowed"
          : "cursor-pointer rounded-md bg-gradient-to-br from-cyan-500 via-indigo-500 to-purple-500 px-6 py-3 text-base text-white"
      }
      disabled={loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
