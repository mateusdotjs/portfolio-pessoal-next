import { motion } from "framer-motion";

type SliderProps = {
  items: JSX.Element[];
  initialY: number | string;
  animateY: number | string;
  duration: number;
};

export default function SliderColumn({
  items,
  initialY,
  animateY,
  duration,
}: SliderProps) {
  return (
    //to-do: eliminar código duplicado
    <div>
      <motion.div
        className="flex flex-col"
        initial={{ y: initialY }}
        animate={{ y: animateY }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item) => (
          <div className="p-4" key={item.key}>
            <div className="flex items-center justify-center rounded-lg bg-neutral-50 p-3">
              {item}
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex flex-col"
        initial={{ y: initialY }}
        animate={{ y: animateY }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((item) => (
          <div className="p-4" key={item.key}>
            <div
              className="flex items-center justify-center rounded-lg bg-neutral-50 p-3"
              key={item.key}
            >
              {item}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
