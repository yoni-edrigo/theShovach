import React, { useState, useEffect } from "react";
import type { RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LifeBuoyIcon } from "lucide-react";

interface CustomCursor3DBookProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export const CustomCursor3DBook: React.FC<CustomCursor3DBookProps> = ({
  containerRef,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [rotation, setRotation] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        setIsInside(inside);
        if (inside) {
          setRotation(e.clientX < rect.left + rect.width / 2);
        }
      } else {
        setIsInside(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  return (
    <AnimatePresence>
      {isInside && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed z-50 pointer-events-none"
          style={{ left: mousePosition.x - 25, top: mousePosition.y - 25 }}
        >
          <motion.div
            className="flex items-center justify-center w-[50px] h-[50px] bg-primary text-primary-foreground rounded-full"
            animate={{
              rotate: rotation ? 180 : 0,
              transition: { duration: 0.5 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <LifeBuoyIcon size={24} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
