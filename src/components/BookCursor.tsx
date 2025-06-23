import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface BookCursorProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  disabled?: boolean;
}

export const BookCursor: React.FC<BookCursorProps> = ({
  containerRef,
  disabled = false,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        setIsInside(inside);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  if (disabled) return null;

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
            className="flex items-center justify-center w-[50px] h-[50px] bg-[#88734C] text-white rounded-full shadow-lg border-2 border-white"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(136,115,76,0.3)",
                "0 0 0 10px rgba(136,115,76,0.1)",
                "0 0 0 0 rgba(136,115,76,0.3)",
              ],
              transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ArrowRight size={24} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
