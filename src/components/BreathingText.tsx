"use client";

import type { ElementType } from "react";
import { motion } from "motion/react";
import type { Transition, Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface BreathingTextProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The content to be displayed and animated
   */
  children: React.ReactNode;

  /**
   * HTML Tag to render the component as
   */
  as?: ElementType;

  /**
   * Light font class name
   */
  lightFontClass: string;

  /**
   * Heavy font class name
   */
  heavyFontClass: string;

  /**
   * Animation transition configuration
   * @default { duration: 1.5, ease: "easeInOut" }
   */
  transition?: Transition;

  /**
   * Duration of stagger delay between elements in seconds
   * @default 0.1
   */
  staggerDuration?: number;

  /**
   * Direction to stagger animations from
   * @default "first"
   */
  staggerFrom?: "first" | "last" | "center" | number;

  /**
   * Delay between animation repeats in seconds
   * @default 0.1
   */
  repeatDelay?: number;
}

const BreathingText = ({
  children,
  as = "span",
  lightFontClass,
  heavyFontClass,
  transition = {
    duration: 1.5,
    ease: "easeInOut",
  },
  staggerDuration = 0.1,
  staggerFrom = "first",
  repeatDelay = 0.1,
  className,
  ...props
}: BreathingTextProps) => {
  const letterVariants: Variants = {
    initial: { opacity: 0 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      transition: {
        ...transition,
        repeat: Infinity,
        repeatType: "mirror",
        delay: i * staggerDuration,
        repeatDelay: repeatDelay,
      },
    }),
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const getCustomIndex = (index: number, total: number) => {
    if (typeof staggerFrom === "number") {
      return Math.abs(index - staggerFrom);
    }
    switch (staggerFrom) {
      case "first":
        return index;
      case "last":
        return total - 1 - index;
      case "center":
      default:
        return Math.abs(index - Math.floor(total / 2));
    }
  };

  const letters = String(children).split("");
  const ElementTag = as;

  return (
    <ElementTag className={cn(className, "relative")} {...props}>
      {/* Static regular font layer */}
      <div className={cn(lightFontClass, "relative")}>
        {letters.map((letter: string, i: number) => (
          <span key={`light-${i}`} className="inline-block">
            {letter}
          </span>
        ))}
      </div>

      {/* Animated color font layer */}
      <div className={cn(heavyFontClass, "absolute inset-0")}>
        {letters.map((letter: string, i: number) => (
          <motion.span
            key={`heavy-${i}`}
            className="inline-block cursor-pointer"
            aria-hidden="true"
            variants={letterVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            custom={getCustomIndex(i, letters.length)}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <span className="sr-only">{children}</span>
    </ElementTag>
  );
};

export default BreathingText;
