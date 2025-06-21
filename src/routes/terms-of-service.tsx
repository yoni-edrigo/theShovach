import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  FileText,
  Shield,
  Clock,
  CreditCard,
  Users,
  Heart,
  Home,
  AlertTriangle,
} from "lucide-react";
import { StickyFooter } from "@/components/StickyFooter";

export const Route = createFileRoute("/terms-of-service")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      {/* Main content that sits on top of the footer */}
      <main className="relative z-10 min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <FileText className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl font-bold mb-6">תנאי שימוש</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                תנאי השימוש באתר ובשירותי השובך - מרכז בריאות ואירוח
              </p>
            </motion.div>
          </div>
        </section>

        {/* General Terms */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-xl border shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  תנאים כלליים
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    ברוכים הבאים לשובך - מרכז בריאות ואירוח. השימוש באתר
                    ובשירותים שלנו כפוף לתנאי השימוש הבאים. השימוש באתר מהווה
                    הסכמה לתנאים אלה.
                  </p>

                  <p>
                    השובך מספק שירותי טיפול מקצועיים ואירוח במרכז הבריאות שלנו.
                    כל השירותים ניתנים על ידי אנשי מקצוע מוסמכים ומנוסים.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Description */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">תיאור השירותים</h2>
              <p className="text-lg text-muted-foreground">
                השירותים הניתנים במרכז השובך
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">שירותי טיפול</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• מסאז' רפואי מקצועי</li>
                      <li>• טיפולי שיאצו</li>
                      <li>• טיפולי אבנים חמות</li>
                      <li>• חמאם טורקי</li>
                      <li>• סדנאות בריאות</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background rounded-xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Home className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">שירותי אירוח</h3>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• יחידת אירוח פרטית</li>
                      <li>• מתאים לזוג או משפחה</li>
                      <li>• מטבחון מלא</li>
                      <li>• מרפסת לנוף</li>
                      <li>• שירותים ומקלחת פרטיים</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Booking and Cancellation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-xl border shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  הזמנות וביטולים
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">הזמנות</h3>
                      <p className="text-muted-foreground">
                        הזמנות מתקבלות בטלפון או באתר. יש לאשר הזמנות לפחות 24
                        שעות מראש. הזמנות לאירוח דורשות פיקדון של 30% בעת
                        ההזמנה.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">ביטולים</h3>
                      <p className="text-muted-foreground">
                        ביטול עד 48 שעות מראש - החזר מלא. ביטול 24-48 שעות מראש
                        - החזר 50%. ביטול פחות מ-24 שעות - ללא החזר. במקרים
                        מיוחדים נשקול החזר חלקי.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CreditCard className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">תשלומים</h3>
                      <p className="text-muted-foreground">
                        מקבלים מזומן, כרטיסי אשראי וצ'קים. תשלום מלא בעת קבלת
                        השירות. מחירים כוללים מע"מ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Health and Safety */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-xl border shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  בריאות ובטיחות
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    <strong>התוויות נגד:</strong> יש ליידע אותנו על מצבים
                    רפואיים, הריון, פציעות או ניתוחים אחרונים לפני הטיפול.
                  </p>

                  <p>
                    <strong>היגיינה:</strong> כל הציוד והחדרים עוברים חיטוי
                    יסודי בין טיפול לטיפול. אנו עומדים בתקני הבטיחות וההיגיינה
                    המחמירים ביותר.
                  </p>

                  <p>
                    <strong>אחריות:</strong> הטיפולים אינם מהווים תחליף לטיפול
                    רפואי מקצועי. במקרה של בעיות רפואיות יש לפנות לרופא.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy and Data */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-xl border shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  פרטיות ומידע
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">הגנה על פרטיות</h3>
                      <p className="text-muted-foreground">
                        המידע האישי שלכם נשמר בסודיות מוחלטת. אנו לא משתפים מידע
                        עם צדדים שלישיים ללא הסכמה מפורשת. המידע משמש רק לצורך
                        מתן השירות.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-2">איסוף מידע</h3>
                      <p className="text-muted-foreground">
                        אנו אוספים מידע בסיסי לצורך הזמנות ותיאום טיפולים. המידע
                        כולל שם, טלפון, אימייל ופרטי בריאות רלוונטיים.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Liability and Disclaimers */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-xl border shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  אחריות והסתייגויות
                </h2>

                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    <strong>הגבלת אחריות:</strong> השובך לא יהיה אחראי לכל נזק
                    עקיף, תוצאתי או מיוחד הנובע מהשימוש בשירותים שלנו.
                  </p>

                  <p>
                    <strong>שינויים בשירותים:</strong> אנו שומרים לעצמנו את
                    הזכות לשנות מחירים, זמני פעילות או להפסיק שירותים בהתראה
                    מוקדמת.
                  </p>

                  <p>
                    <strong>חוק ישראלי:</strong> תנאי שימוש אלה כפופים לחוק
                    הישראלי. כל מחלוקת תיפתר בבית המשפט המוסמך בישראל.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">צור קשר</h2>
              <p className="text-lg text-muted-foreground mb-8">
                לשאלות לגבי תנאי השימוש או כל עניין אחר
              </p>

              <div className="bg-card p-8 rounded-xl border shadow-lg max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>שעות פעילות: א'-ש' 09:00-20:00</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span>טלפון: 050-XXXXXXX</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>אימייל: info@theshovach.com</span>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  תנאי שימוש אלה מתעדכנים מעת לעת. גרסה אחרונה:{" "}
                  {new Date().toLocaleDateString("he-IL")}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Sticky footer that sits behind the main content */}
      <StickyFooter />
    </div>
  );
}
