import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Building2,
  Bed,
  Coffee,
  Mountain,
  Heart,
  BookOpen,
  MapPin,
  Clock,
  Phone,
  ArrowLeft,
  Home,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { StickyFooter } from "@/components/StickyFooter";
import { useRef } from "react";
import { AnimatedGallery } from "@/components/AnimatedGallery";

export const Route = createFileRoute("/wellness-center")({
  component: RouteComponent,
});

function RouteComponent() {
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const orderLinkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <div className="relative">
      {/* Main content that sits on top of the footer */}
      <main className="relative z-10 min-h-screen bg-background pt-20 md:pt-0">
        {/* Hero Section */}
        <section
          className="relative py-20 bg-gradient-to-b from-primary/10 to-background"
          ref={heroSectionRef}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">מרכז הטיפולים השובך</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                קליניקה מקצועית עם טיפולים מתקדמים וציוד מתקדם ליצירת חוויה
                מרגיעה ומחדשת
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clinic Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">הקליניקה</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  בקומה העליונה של המרכז הקמנו חדר טיפולים וסדנאות מקצועי
                  ומאובזר. המקום מציע סביבה שקטה ומרגיעה לטיפולים מקצועיים.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">מיטת שיאצו</h3>
                      <p className="text-muted-foreground">
                        לטיפולי שיאצו מקצועיים
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">אבנים חמות</h3>
                      <p className="text-muted-foreground">
                        לטיפולי אבנים חמות מרגיעים
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Bed className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">מיטת עיסוי</h3>
                      <p className="text-muted-foreground">
                        למסאז' רפואי מקצועי
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">מטבחון ופינת קפה</h3>
                      <p className="text-muted-foreground">
                        להכנת תה וקפה טיפולי
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">ספריית טיפול</h3>
                      <p className="text-muted-foreground">
                        מגוון רחב של ספרים מתחום הטיפול
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center md:justify-end mt-6">
                  <a
                    ref={orderLinkRef}
                    href="https://wa.me/972587889868"
                    target="_blank"
                    className="inline-flex h-min w-[60vw] max-w-xs sm:w-fit items-center justify-center px-5 py-2 text-sm text-white bg-primary rounded-full hover:bg-gray-800 transition-colors"
                    style={{ alignSelf: "end", justifySelf: "end" }}
                  >
                    להזמנה
                  </a>
                </div>
              </div>

              <div className="relative">
                <AnimatedGallery />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">הטיפולים שלנו</h2>
              <p className="text-lg text-muted-foreground">
                מגוון טיפולים מקצועיים ליצירת חוויה מרגיעה ומחדשת
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">מסאז' רפואי</h3>
                    <p className="text-muted-foreground">
                      עם שמנים ארומתרפיים טבעיים
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Mountain className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">חמאם טורקי</h3>
                    <p className="text-muted-foreground">
                      עם אדים חמים וטיפולי קילוף
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Bed className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">שיאצו</h3>
                    <p className="text-muted-foreground">טיפול מסורתי יפני</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Mountain className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">אבנים חמות</h3>
                    <p className="text-muted-foreground">
                      טיפול מרגיע עם אבנים חמות
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">סדנאות</h3>
                    <p className="text-muted-foreground">
                      סדנאות ריפוי והתפתחות אישית
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Coffee className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">ארומתרפיה</h3>
                    <p className="text-muted-foreground">
                      טיפולים עם שמנים טבעיים
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Zimmer Link Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">גם אירוח זמין</h2>
              <p className="text-lg text-muted-foreground mb-8">
                בנוסף לטיפולים, אנו מציעים יחידת אירוח ייחודית בסגנון מקומי עם
                כל האמצעים לשקט והתבוננות פנימית.
              </p>

              <Link to="/zimmer">
                <motion.button
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-5 h-5" />
                  למידע על הצימר
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact & Info Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">מידע נוסף</h2>
              <p className="text-lg text-muted-foreground">
                לקבלת מידע נוסף והזמנות
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 bg-background rounded-xl border">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">מיקום</h3>
                <p className="text-muted-foreground">המרכז ממוקם בנוף הכפרי</p>
              </div>

              <div className="text-center p-6 bg-background rounded-xl border">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">שעות פעילות</h3>
                <p className="text-muted-foreground">טיפולים בתיאום מראש</p>
              </div>

              <div className="text-center p-6 bg-background rounded-xl border">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">צור קשר</h3>
                <p className="text-muted-foreground">להזמנות ומידע נוסף</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">צור קשר</h2>
              <p className="text-muted-foreground mb-8">
                מוכנים להתחיל את המסע שלכם? צרו קשר עכשיו
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>054-1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>א'-ה' 09:00-20:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>השובך, צפון הארץ</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* StickyFooter that sits behind the main content */}
      <StickyFooter />
    </div>
  );
}
