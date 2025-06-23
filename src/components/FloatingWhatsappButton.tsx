import { MessageCircle } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export function FloatingWhatsappButton() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      // 130dvh: 130% of viewport height
      const threshold = window.innerHeight * 1.2;
      setShow(y > threshold);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.a
      href="https://wa.me/972587889868"
      target="_blank"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: show ? 0 : 100, opacity: show ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center justify-center w-16 h-16 rounded-full bg-primary shadow-lg hover:bg-gray-800 transition-colors"
      style={{
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.15)",
        pointerEvents: show ? "auto" : "none",
      }}
      aria-label="הזמנה בוואטסאפ"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </motion.a>
  );
}
