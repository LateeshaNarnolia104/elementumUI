import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorBlob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.5,
      }}
      className="
        fixed
        top-0
        left-0
        w-20
        h-20
        rounded-full
        bg-linear-to-r
      from-red-300
        to-pink-400
        opacity-90
        blur-[20px]
        pointer-events-none
        z-20
      "
    />
  );
};

export default CursorBlob;
