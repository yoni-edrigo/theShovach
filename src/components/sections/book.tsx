import type React from "react";
import { useRef } from "react";
import {
  Brain,
  Heart,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  CheckCircle,
  BookOpen,
  Lightbulb,
  Shield,
  Target,
  ArrowLeft,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Book3D } from "../3d-book/3dBook";
import { CustomCursor3DBook } from "../3d-book/CustomCursor3DBook";

export function BookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />
      ),
      title: "בהירות מנטלית",
      description:
        "גלה טכניקות מעשיות לניקוי ערפל מנטלי, שיפור הריכוז והשגת מצב של בהירות מנטלית שמשפרת את הפרודוקטיביות היומית שלך וקבלת ההחלטות.",
      position: "left",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />
      ),
      title: "איזון רגשי",
      description:
        "למד לנווט את הרגשות שלך בחן והבנה, לפתח חוסן ושלווה פנימית שתומכת בבריאות הנפש הכללית שלך.",
      position: "left",
    },
    {
      icon: <Target className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />
      ),
      title: "מטרה וכיוון",
      description:
        "מצא את המטרה האמיתית שלך וצור מפת דרכים ברורה לצמיחה אישית שמתיישרת עם הערכים והשאיפות שלך לחיים מספקים.",
      position: "left",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />
      ),
      title: "חוסן מתח",
      description:
        "בנה מנגנוני התמודדות חזקים ואסטרטגיות ניהול מתח שעוזרות לך לשגשג גם בנסיבות מאתגרות.",
      position: "right",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />
      ),
      title: "חיים מודעים",
      description:
        "אמץ פרקטיקות מודעות שמביאות מודעות לרגע הנוכחי, מפחיתות חרדה ומשפרות את ההערכה שלך לשמחות הפשוטות של החיים.",
      position: "right",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#A9BBC8]" />
      ),
      title: "צמיחה אישית",
      description:
        "צא למסע טרנספורמטיבי של גילוי עצמי ושיפור מתמיד שמוביל לשינוי חיובי מתמשך בכל תחומי החיים שלך.",
      position: "right",
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="book-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-[#F2F2EB] to-[#F8F8F2] text-[#202e44] overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#88734C]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#A9BBC8]/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#88734C]/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#A9BBC8]/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="text-[#88734C] font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            שנה את המחשבה שלך
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            מדריך לבריאות נפשית
          </h2>
          <motion.div
            className="w-24 h-1 bg-[#88734C]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-[#202e44]/80"
          variants={itemVariants}
        >
          צא למסע טרנספורמטיבי לבהירות מנטלית, איזון רגשי ושלווה פנימית מתמשכת.
          מדריך מקיף זה משלב אסטרטגיות מבוססות ראיות עם חכמה מעשית כדי לעזור לך
          לפתח מערכת יחסים בריאה ומספקת יותר עם המחשבה שלך.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {benefits
              .filter((benefit) => benefit.position === "left")
              .map((benefit, index) => (
                <BenefitItem
                  key={`left-${index}`}
                  icon={benefit.icon}
                  secondaryIcon={benefit.secondaryIcon}
                  title={benefit.title}
                  description={benefit.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Book */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div
              className="relative w-full max-w-xs rotate-180"
              variants={itemVariants}
              ref={containerRef}
            >
              <Book3D />
            </motion.div>
          </div>
          <CustomCursor3DBook containerRef={containerRef} />

          {/* Right Column */}
          <div className="space-y-16">
            {benefits
              .filter((benefit) => benefit.position === "right")
              .map((benefit, index) => (
                <BenefitItem
                  key={`right-${index}`}
                  icon={benefit.icon}
                  secondaryIcon={benefit.secondaryIcon}
                  title={benefit.title}
                  description={benefit.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-card text-card-foreground p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 relative z-20 border shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-2">
              מוכן לשנות את הבריאות הנפשית שלך?
            </h3>
            <p className="text-muted-foreground">
              התחל את המסע שלך לשלווה פנימית ובהירות מנטלית היום.
            </p>
          </div>
          <motion.a
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://nivbook.co.il/product/%D7%A0%D7%94%D7%99%D7%92%D7%AA-%D7%97%D7%99%D7%99%D7%9A/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"קנה עכשיו"}
            <ArrowLeft className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface BenefitItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: {
    hidden: { y: number; opacity: number };
    visible: {
      y: number;
      opacity: number;
      transition: { duration: number };
    };
  };
  delay: number;
  direction: "left" | "right";
}

function BenefitItem({
  icon,
  secondaryIcon,
  title,
  description,
  variants,
  delay,
  direction,
}: BenefitItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#88734C] bg-[#88734C]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#88734C]/20 relative"
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-[#202e44] group-hover:text-[#88734C] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[#202e44]/80 leading-relaxed sm:px-12 text-center sm:text-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-[#88734C] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          למידע נוסף <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}
