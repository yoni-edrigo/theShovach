import CircularServices from "../circular-testimonials";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Sparkles, Home } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const services = [
  {
    quote:
      "מסאז' רפואי מקצועי עם שמנים ארומתרפיים טבעיים. הטיפול מותאם אישית לכל לקוח ומשלב טכניקות מסורתיות עם ידע מודרני ליצירת חוויה מרגיעה ומחדשת. מתבצע בקליניקה המקצועית בקומה העליונה עם מיטת שיאצו, אבנים חמות ומיטת עיסוי.",
    name: "מסאז' רפואי",
    designation: "60-90 דקות",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "אירוח בצימר פרטי בקומה התחתונה בסגנון מקומי עם אבן וטיח. מתאים לזוג או זוג עם ילד. כולל מטבחון מלא, שירותים ומקלחת, פינת קפה, מיטה זוגית, מזגן, פינת ישיבה ומרפסת לנוף. מקום מושלם לשקט והתבוננות פנימית.",
    name: "צימר אירוח",
    designation: "לילה/סוף שבוע",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "סדנאות וטיפולים בקליניקה המקצועית בקומה העליונה. החדר מאובזר במטבחון, פינת קפה, שירותים, מקלחת ומיטת טיפול. כולל מגוון רחב של ספרים מתחום הטיפול ללמידה והתפתחות אישית.",
    name: "קליניקה וסדנאות",
    designation: "גמיש",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 place-items-center">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            השירותים שלנו
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            חוויה ייחודית של ריפוי
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            מגוון רחב של טיפולים מקצועיים ואירוח ייחודי במרכז הבריאות שלנו,
            המשלב מסורת עתיקה עם טכנולוגיה מודרנית
          </p>
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <CircularServices testimonials={services} />
        </motion.div>

        {/* Simple Modern CTA Section */}
        <motion.div
          className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">מוכנים לחוויה ייחודית?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              גלה את הטיפולים המקצועיים שלנו ואת יחידת האירוח הייחודית
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/wellness-center">
              <Button
                size="lg"
                className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Building2 className="w-5 h-5" />
                מרכז הטיפולים
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>

            <Link to="/zimmer">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-3 border-2 border-border hover:border-primary/50 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                יחידת האירוח
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
