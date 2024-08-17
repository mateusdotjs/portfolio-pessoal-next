import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

// to-do: typar corretamente os objetos do framer-motion
type MotionLinkProps = {
  className?: string;
  href: string;
  target?: string;
  children: ReactNode;
  initial?: object;
  animate?: object;
  whileInView?: object;
  variants?: {
    hidden: object;
    visible: object;
  };
};

export default function MotionLink({
  className,
  href,
  target = "_self",
  children,
  variants,
  initial,
  animate,
  whileInView,
}: MotionLinkProps) {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
    >
      <Link className={className} href={href} target={target}>
        {children}
      </Link>
    </motion.div>
  );
}
