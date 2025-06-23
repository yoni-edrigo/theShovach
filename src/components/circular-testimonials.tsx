import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  fontSizes?: FontSizes;
}
const AUTOPLAY_DURATION = 12000; // ms

export const CircularServices = ({
  testimonials,
  autoplay = true,
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Font config
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Progress bar state for autoplay
  const [progress, setProgress] = useState(0);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => (testimonials.length > 0 ? testimonials[activeIndex] : null),
    [activeIndex, testimonials]
  );

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, AUTOPLAY_DURATION);
    }
    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Progress bar effect
  useEffect(() => {
    if (!autoplay) return;
    setProgress(0);
    const start = Date.now();
    let frame: number;
    function animate() {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / AUTOPLAY_DURATION, 1));
      if (elapsed < AUTOPLAY_DURATION) {
        frame = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [activeIndex, autoplay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line
  }, [activeIndex, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);
  const handlePrev = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength
    );
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex flex-col justify-between gap-5 h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          variants={quoteVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {activeTestimonial ? (
            <>
              <h3
                className="font-bold mb-1 text-foreground"
                style={{ fontSize: fontSizeName }}
              >
                {activeTestimonial.name}
              </h3>
              <p
                className="mb-8 text-muted-foreground"
                style={{ fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              <motion.p
                className="leading-relaxed text-muted-foreground"
                style={{ fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.025 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              אין שירותים להצגה
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-6 pt-12 md:pt-0">
        <button
          className={cn(
            "w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-colors border-none",
            hoverNext ? "bg-accent" : "bg-primary"
          )}
          onClick={handleNext}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
          aria-label="Next testimonial"
        >
          <FaArrowRight size={28} className="text-primary-foreground" />
        </button>
        <button
          className={cn(
            "w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-colors border-none",
            hoverPrev ? "bg-accent" : "bg-primary"
          )}
          onClick={handlePrev}
          onMouseEnter={() => setHoverPrev(true)}
          onMouseLeave={() => setHoverPrev(false)}
          aria-label="Previous testimonial"
        >
          <FaArrowLeft size={28} className="text-primary-foreground" />
        </button>
      </div>
      {/* Progress bar for autoplay */}
      {autoplay && (
        <div
          style={{
            height: 4,
            width: "100%",
            background: "#eee",
            borderRadius: 2,
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress * 100}%`,
              background:
                "linear-gradient(90deg, var(--primary), var(--accent))",
              transition: progress === 0 ? "none" : "width 0.2s linear",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CircularServices;
