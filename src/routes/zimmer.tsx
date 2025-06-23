import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Bed,
  Coffee,
  Wifi,
  Mountain,
  Users,
  MapPin,
  Clock,
  Phone,
  Home,
  Heart,
  Star,
  Info,
  AlertTriangle,
  Shield,
} from "lucide-react";
import { StickyFooter } from "@/components/StickyFooter";
import { AnimatedGallery } from "@/components/AnimatedGallery";
import { useRef } from "react";

export const Route = createFileRoute("/zimmer")({
  component: RouteComponent,
});

const ZIMMER_PRICING = [
  { title: "סוף שבוע", price: '400 ש"ח' },
  { title: "אמצע שבוע", price: '300 ש"ח' },
  { title: "נופש ארוך", price: "מחיר משתנה" },
];

function RouteComponent() {
  const orderLinkRef = useRef<HTMLAnchorElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      {/* Main content that sits on top of the footer */}
      <main className="relative z-10 min-h-screen bg-background pt-20 md:pt-0">
        {/* Hero Section */}
        <section
          className="relative pt-10 sm:pt-30 pb-10 bg-gradient-to-b from-primary/10 to-background"
          ref={contactSectionRef}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">צימר השובך</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                יחידת אירוח ייחודית בסגנון מקומי עם כל האמצעים לשקט והתבוננות
                פנימית
              </p>
            </motion.div>
          </div>
        </section>

        {/* Zimmer Overview */}
        <section className="py-20 max-w-6xl mx-auto">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-12 place-items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">יחידת אירוח ייחודית</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  הקומה התחתונה במרכז משמשת כצימר/יחידת אירוח, הבנויה בסגנון
                  מקומי בשילוב אבן וטיח. המקום מתאים לזוג או זוג עם ילד, עם
                  אבזור ברמה גבוהה וכולל מטבחון (גם פלטה ומיחם תמצאו בו),
                  שירותים ומקלחת, פינת קפה, מיטה זוגית, מזגן, פינת ישיבה ומרפסת
                  פתוחה לנוף. היחידה מאפשרת שקט וזמן להתבוננות פנימית.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">
                          מתאים לזוג או זוג עם ילד
                        </h3>
                        <p className="text-muted-foreground">
                          אירוח אינטימי ומשפחתי
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">אבזור ברמה גבוהה</h3>
                        <p className="text-muted-foreground">
                          כל מה שצריך לשהייה נוחה ומהנה
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">שקט וזמן להתבוננות</h3>
                        <p className="text-muted-foreground">
                          מקום מושלם למנוחה והתחדשות
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    ref={orderLinkRef}
                    href="https://wa.me/972587889868"
                    target="_blank"
                    className="inline-flex h-min w-[60vw] max-w-xs sm:w-fit items-center justify-center px-5 py-2 text-sm text-white bg-primary rounded-full hover:bg-gray-800 transition-colors mx-auto sm:mx-6 mt-4 sm:mt-0"
                    style={{ alignSelf: "end", justifySelf: "end" }}
                  >
                    להזמנה
                  </a>
                </div>
              </div>

              <div className="relative w-full">
                <AnimatedGallery />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 bg-card max-w-6xl mx-auto">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">האמצעים שלנו</h2>
              <p className="text-lg text-muted-foreground">
                כל מה שצריך לשהייה נוחה ומהנה
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
                  <Coffee className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">מטבחון מלא</h3>
                    <p className="text-muted-foreground">
                      כולל פלטה ומיחם להכנת ארוחות
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Bed className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">מיטה זוגית</h3>
                    <p className="text-muted-foreground">
                      נוחה ומזמינה לשינה רגועה
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Wifi className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">מזגן ופינת ישיבה</h3>
                    <p className="text-muted-foreground">
                      נוחות מקסימלית בכל עונה
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Mountain className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">מרפסת פתוחה לנוף</h3>
                    <p className="text-muted-foreground">
                      תצפית מרהיבה על הנוף הכפרי
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Home className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">שירותים ומקלחת</h3>
                    <p className="text-muted-foreground">
                      חדרי רחצה פרטיים ונקיים
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">פינת קפה</h3>
                    <p className="text-muted-foreground">
                      מקום מושלם לבוקר רגוע
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center md:items-start px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">מחירים</h2>
            <div className="w-full space-y-4">
              {ZIMMER_PRICING.map((item, idx) => (
                <div
                  key={item.title}
                  className={`flex justify-between items-center${
                    idx < ZIMMER_PRICING.length - 1 ? " border-b pb-2" : ""
                  }`}
                >
                  <span className="text-lg font-medium text-muted-foreground">
                    {item.title}
                  </span>
                  <span
                    className={`text-xl font-bold text-primary${
                      item.price === "מחיר משתנה"
                        ? " text-base font-normal"
                        : ""
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Important Information Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">חשוב לדעת</h2>
              <p className="text-lg text-muted-foreground">
                מידע חשוב לאירוח מושלם
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-card rounded-xl border border-orange-200">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-orange-700">
                      מצעים ומגבות
                    </h3>
                    <p className="text-muted-foreground">
                      האירוח אינו כולל מצעים ומגבות, במידת הצורך ניתן לתאם מראש.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-blue-200">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-blue-700">
                      שכונה שקטה ושומרת שבת
                    </h3>
                    <p className="text-muted-foreground">
                      המרכז נמצא בשכונת מגורים שקטה ושומרת שבת. נבקש את
                      התחשבותכם.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-red-200">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-red-700">נגישות</h3>
                    <p className="text-muted-foreground">
                      לצערינו כרגע המקום לא מונגש לנכים.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-green-200">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-green-700">
                      בעלי חיים
                    </h3>
                    <p className="text-muted-foreground">
                      אין להכניס בעלי חיים, יש כאן מספיק ;)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-purple-200">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-2 text-purple-700">
                      השכרת הקליניקה
                    </h3>
                    <p className="text-muted-foreground">
                      ניתן לשכור גם את הקליניקה לארוח מורחב.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">חוויה ייחודית</h2>
              <p className="text-lg text-muted-foreground mb-8">
                היחידה מאפשרת שקט וזמן להתבוננות פנימית. בסגנון מקומי עם שילוב
                אבן וטיח, המקום מספק חוויה אותנטית ומרגיעה.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-center p-6 bg-background rounded-xl border">
                  <Mountain className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">נוף כפרי</h3>
                  <p className="text-muted-foreground">
                    תצפית מרהיבה על הנוף הכפרי והטבע הסובב
                  </p>
                </div>

                <div className="text-center p-6 bg-background rounded-xl border">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">שקט ושלווה</h3>
                  <p className="text-muted-foreground">
                    מקום מושלם למנוחה, התבוננות והתחדשות
                  </p>
                </div>
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
                לכל שאלה ומידע נוסף נשמח לעזור
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>054-1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>צ'ק-אין: 15:00 | צ'ק-אאוט: 11:00</span>
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
