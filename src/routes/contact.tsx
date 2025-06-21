import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Star,
} from "lucide-react";
import { StickyFooter } from "@/components/StickyFooter";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const phoneNumber = "+972-54-123-4567";
  const whatsappNumber = "+972541234567";
  const whatsappMessage = "שלום! אני מעוניין/ת במידע נוסף על השובך";

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className="relative">
      {/* Main content that sits on top of the footer */}
      <main className="relative z-10 min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50 flex items-center pt-20 md:pt-0">
        {/* Single Screen Layout */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Content */}
            <motion.div
              className="text-center lg:text-right"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-orange-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                צור קשר
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                מוכנים להתחיל את המסע שלכם? <br />
                נשמח לשמוע מכם ולעזור לכם לתכנן את החוויה המושלמת
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="space-y-4 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Phone Call Button */}
                <motion.button
                  className="w-full group bg-white rounded-xl p-6 text-left shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handlePhoneCall}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-right">
                        <h3 className="text-lg font-semibold text-gray-900">
                          התקשר עכשיו
                        </h3>
                        <p className="text-gray-500 text-sm">{phoneNumber}</p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </motion.button>

                {/* WhatsApp Button */}
                <motion.button
                  className="w-full group bg-white rounded-xl p-6 text-left shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleWhatsApp}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-right">
                        <h3 className="text-lg font-semibold text-gray-900">
                          שלח הודעה
                        </h3>
                        <p className="text-gray-500 text-sm">
                          WhatsApp - תגובה מהירה
                        </p>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </motion.button>
              </motion.div>

              {/* Quick Info */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="text-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-xs text-slate-600">השובך, צפון הארץ</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-xs text-slate-600">א'-ה' 09:00-20:00</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Star className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-xs text-slate-600">חוויה מושלמת</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Lottie Animation */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96">
                <DotLottieReact
                  src="/src/assets/call-center-lottie.lottie"
                  autoplay
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Action Button */}
        <motion.div
          className="fixed bottom-6 left-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl flex items-center justify-center text-white hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePhoneCall}
          >
            <Phone className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </main>

      {/* Sticky footer that sits behind the main content */}
      <StickyFooter />
    </div>
  );
}
