"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useImages } from "@/lib/useImages";

// Helper to get a random color for background (could be improved with color-thief)
function getRandomColor(seed: number) {
  const colors = [
    "#ffb3c6",
    "#b5ead7",
    "#c7ceea",
    "#f6eac2",
    "#f7d6e0",
    "#b2f7ef",
    "#f7b2ad",
    "#f6c6ea",
    "#b5ead7",
    "#f7cac9",
    "#c9c9ff",
    "#f7e1b5",
  ];
  return colors[seed % colors.length];
}

const THUMB_SIZE = 96;

const Gallery: React.FC = () => {
  const { images, isLoading } = useImages();
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [shuffled, setShuffled] = useState(false);

  // Shuffle images for wildness
  const galleryElements = useMemo(() => {
    if (!shuffled) return images.map((img, i) => ({ ...img, idx: i }));
    // Fisher-Yates shuffle
    const arr = images.map((img, i) => ({ ...img, idx: i }));
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [images, shuffled]);

  // Staggered animation variants
  const thumbVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  // Modal background animation
  const bgVariants = {
    initial: { opacity: 0, backdropFilter: "blur(0px)" },
    animate: { opacity: 1, backdropFilter: "blur(16px)" },
    exit: { opacity: 0, backdropFilter: "blur(0px)" },
  };

  if (isLoading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        טוען תמונות...
      </div>
    );
  }
  if (!galleryElements.length) {
    return <div className="text-center py-8">No images found.</div>;
  }

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="flex w-full justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          Wild Animated Gallery
        </h2>
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-blue-400 text-white font-bold shadow-lg hover:scale-105 transition"
          onClick={() => setShuffled((s) => !s)}
        >
          Shuffle
        </button>
      </div>
      {/* Draggable, bouncy carousel */}
      <motion.div
        className="w-full max-w-3xl overflow-x-auto pb-4"
        style={{ cursor: "grab" }}
      >
        <motion.div
          className="flex gap-4"
          drag="x"
          dragConstraints={{
            left: -galleryElements.length * (THUMB_SIZE + 16) + 400,
            right: 0,
          }}
          dragElastic={0.3}
          whileTap={{ cursor: "grabbing" }}
        >
          <AnimatePresence initial={false}>
            {galleryElements.map((img, i) => (
              <motion.div
                key={img.url}
                className="rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-blue-400 bg-white"
                style={{
                  width: THUMB_SIZE,
                  height: THUMB_SIZE,
                  minWidth: THUMB_SIZE,
                  minHeight: THUMB_SIZE,
                }}
                custom={i}
                initial="hidden"
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: i * 0.07,
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                exit="hidden"
                variants={thumbVariants}
                whileHover={{ scale: 1.13, rotate: [0, 2, -2, 0] }}
                whileTap={{ scale: 0.95, rotate: 0 }}
                layoutId={`img-${img.url}`}
                onClick={() => setModalIdx(i)}
                tabIndex={0}
                aria-label={`הצג תמונה ${i + 1}`}
              >
                <img
                  src={img.url}
                  alt=""
                  className="object-cover w-full h-full select-none pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
      {/* Modal with shared layout and animated background */}
      <AnimatePresence>
        {modalIdx !== null && galleryElements[modalIdx] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={bgVariants}
            style={{
              background: `radial-gradient(circle at 60% 40%, ${getRandomColor(modalIdx! * 3)}, 60%, #222 100%)`,
              backdropFilter: "blur(16px)",
            }}
            onClick={() => setModalIdx(null)}
          >
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 200, damping: 18 },
              }}
              exit={{ scale: 0.7, opacity: 0, transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={galleryElements[modalIdx].url}
                alt=""
                className="rounded-3xl shadow-2xl object-contain bg-white"
                style={{
                  width: "min(90vw, 700px)",
                  height: "min(70vh, 500px)",
                  maxWidth: 700,
                  maxHeight: 500,
                }}
                layoutId={`img-${galleryElements[modalIdx].url}`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg text-xl font-bold"
                onClick={() => setModalIdx(null)}
                aria-label="סגור"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
