import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Accessibility, Heart, Phone, AlertTriangle, Info } from "lucide-react";
import { StickyFooter } from "@/components/StickyFooter";

export const Route = createFileRoute("/accessebility")({
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Accessibility className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                הצהרת נגישות
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                השובך מחויב לספק חוויית שירות נגישה ושווה לכל המבקרים שלנו
              </p>
            </motion.div>
          </div>
        </section>

        {/* Digital Accessibility */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                נגישות דיגיטלית
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    תמיכה בטכנולוגיות מסייעות
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      תמיכה בקוראי מסך
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      ניווט במקלדת
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      ניגודיות צבעים גבוהה
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      טקסט חלופי לתמונות
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    תכונות נגישות נוספות
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      מבנה לוגי עם כותרות ברורות
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      גודל טקסט ניתן לשינוי
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      תמיכה בשפה העברית (RTL)
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-5 h-5 text-primary ml-2" />
                      תצוגה מותאמת למובייל
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Current Accessibility Status */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                {/* Current Accessibility Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-lg shadow-lg"
                >
                  <div className="flex items-center mb-6 gap-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <AlertTriangle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      מצב נגישות נוכחי במרכז
                    </h3>
                  </div>
                  <div className="bg-orange-50 border-r-4 border-orange-400 p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-orange-800 font-medium">
                          מגבלות נגישות
                        </p>
                        <p className="text-orange-700 text-sm">
                          לצערינו, מרכז הבריאות ויחידת האירוח אינם נגישים כרגע
                          לאנשים עם מוגבלויות
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 border-r-4 border-blue-400 p-4">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-blue-800 font-medium">
                          מחויבות עתידית
                        </p>
                        <p className="text-blue-700 text-sm">
                          אנו עובדים על שיפורים עתידיים לנגישות מלאה בשני
                          המתקנים
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">צור קשר</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                יש לכם שאלות לגבי נגישות? אנו כאן לעזור
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                מחויבותנו לנגישות
              </h2>
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg">
                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                  השובך מחויב לספק חוויית שירות נגישה ושווה לכל המבקרים שלנו.
                  אנו פועלים באופן מתמיד לשיפור הנגישות שלנו ומתעדכנים בסטנדרטים
                  העדכניים ביותר של נגישות דיגיטלית ופיזית.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  אנו שואפים לעמוד בסטנדרטים של WCAG 2.1 AA ומחויבים להמשיך
                  ולשפר את הנגישות שלנו בהתבסס על משוב מהמבקרים שלנו.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <StickyFooter />
    </div>
  );
}
