import React, { useState, useRef, useEffect } from "react";
import type { RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { useImages } from "@/lib/useImages";

export const AnimatedGallery: React.FC = () => {
  const images = useImages().images;
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showModal, setShowModal] = useState(false);
  // Track if mouse is over the enlarge button
  const [overButton, setOverButton] = useState(false);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 600 : -600,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 600 : -600,
      opacity: 0,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full flex flex-col items-center px-2 sm:px-0">
      {/* Floating enlarge button - absolutely positioned over gallery, not in gallery HTML tree */}
      <div className="absolute top-4 left-0 z-30 p-2 sm:p-6 pointer-events-none w-full flex justify-end">
        <button
          className="bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow transition pointer-events-auto"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(true);
          }}
          aria-label="הצג תמונה גדולה"
          type="button"
          onMouseEnter={() => setOverButton(true)}
          onMouseLeave={() => setOverButton(false)}
        >
          <Maximize2 size={20} />
        </button>
      </div>
      <CustomCursor
        containerRef={containerRef}
        onClickLeft={handlePrev}
        onClickRight={handleNext}
        disabled={overButton || showModal}
      />
      <div
        ref={containerRef}
        className="w-full max-w-xs sm:max-w-none h-72 sm:h-[30rem] border-4 rounded-3xl flex items-center justify-center mx-auto mt-4 overflow-hidden relative bg-[#f5f5f5]"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 0.2 } }}
            className="w-full h-full flex items-center justify-center absolute"
          >
            <img
              src={images[currentIndex]?.url}
              alt={
                images[currentIndex]?.alt || `gallery image ${currentIndex + 1}`
              }
              className="object-cover w-full h-full rounded-3xl"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute h-10 w-fit flex items-center gap-1 left-0 right-0 mx-auto bottom-2 z-10">
          {Array.from({ length: images.length }).map((_, index) => (
            <motion.div
              key={index}
              animate={{ width: index === currentIndex ? 40 : 8 }}
              className="h-2 min-w-2 bg-white/80 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </div>
      {/* Modal for large image with smooth transition */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowModal(false)}
          >
            <motion.img
              src={images[currentIndex]?.url}
              alt={
                images[currentIndex]?.alt || `gallery image ${currentIndex + 1}`
              }
              className="max-w-3xl max-h-[90vh] rounded-xl shadow-lg border-4 border-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface CustomCursorProps {
  containerRef: RefObject<HTMLDivElement | null>;
  onClickLeft: () => void;
  onClickRight: () => void;
}

// Update CustomCursor to accept disabled prop
const CustomCursor: React.FC<CustomCursorProps & { disabled?: boolean }> = ({
  containerRef,
  onClickLeft,
  onClickRight,
  disabled = false,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [rotation, setRotation] = useState(false);

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
        if (inside) {
          const centerX = rect.left + rect.width / 2;
          setRotation(e.clientX < centerX);
        }
      }
    };
    const handleClick = (e: MouseEvent) => {
      if (isInside && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        if (e.clientX < centerX) {
          onClickLeft();
        } else {
          onClickRight();
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [containerRef, isInside, onClickLeft, onClickRight]);

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
            whileTap={{ scale: 0.8 }}
            className="flex items-center justify-center w-[50px] h-[50px] bg-primary text-primary-foreground rounded-full"
            animate={{
              rotate: rotation ? 180 : 0,
              transition: { duration: 0.5 },
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
