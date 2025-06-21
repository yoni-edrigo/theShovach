import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "בית", to: "/" },
    { label: "אודותינו", to: "/about" },
    { label: "צימר", to: "/zimmer" },
    { label: "מרכז גוף-נפש", to: "/wellness-center" },
    { label: "עסקים באיזור", to: "/pricing" },
  ];

  // Determine navbar styles based on scroll and hover state
  const getNavbarStyles = () => {
    if (isHovered) {
      // Original state on hover
      return {
        bg: "bg-white",
        text: "text-gray-900",
        border: "",
        shadow: "shadow-lg",
      };
    }

    if (isScrolled) {
      // Darker semi-transparent state for better contrast
      return {
        bg: "bg-black/20 backdrop-blur-md",
        text: "text-white",
        border: "border border-white/20",
        shadow: "",
      };
    }

    // Default state
    return {
      bg: "bg-white",
      text: "text-gray-900",
      border: "",
      shadow: "shadow-lg",
    };
  };

  const styles = getNavbarStyles();

  return (
    <>
      <div className="flex justify-center w-full py-6 px-4 fixed top-0 left-0 z-20 pointer-events-none">
        <motion.div
          className={`flex flex-row-reverse sm:flex-row items-center justify-between px-6 py-3 rounded-full w-full max-w-3xl relative z-10 pointer-events-auto transition-all duration-300 ${styles.bg} ${styles.border} ${styles.shadow}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Circle Logo - Left side on mobile and desktop */}
          <div className="flex items-center">
            <motion.div
              className="w-8 h-8 mr-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="0"
                    y1="0"
                    x2="32"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF9966" />
                    <stop offset="1" stopColor="#FF5E62" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={item.to}
                  className={`text-sm transition-colors font-medium hover:opacity-80 ${styles.text}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/"
              className={`inline-flex items-center justify-center px-5 py-2 text-sm rounded-full transition-colors ${
                isScrolled && !isHovered
                  ? "text-black bg-white hover:bg-gray-100"
                  : "text-white bg-black hover:bg-gray-800"
              }`}
            >
              צור קשר
            </Link>
          </motion.div>

          {/* Mobile Menu Button - Right side */}
          <motion.button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className={`h-6 w-6 transition-colors ${styles.text}`} />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay - Positioned outside navbar container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-8 right-8"
              onClick={toggleMenu}
              aria-label="סגור תפריט"
            >
              <X className="h-8 w-8 text-gray-900" />
            </button>
            <nav className="flex flex-col items-center space-y-8 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-lg text-gray-900 hover:text-gray-600 transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/"
                className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-colors mt-4"
                onClick={toggleMenu}
              >
                צור קשר
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
