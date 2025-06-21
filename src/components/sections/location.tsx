import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const businessLocation = {
  lat: 31.657717,
  lng: 35.227517,
  zoom: 14,
  name: "השובך",
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const mapVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: "easeOut" as const,
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.7, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function Location() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              בואו לבקר אותנו
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-2xl mx-auto"
            >
              נמצאים בלב מדבר יהודה, מוכנים לספק לכם את חווית האירוח הטובה ביותר
            </motion.p>
          </motion.div>

          <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-gray-600">טוען מפה...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            בואו לבקר אותנו
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 max-w-2xl mx-auto"
          >
            נמצאים בלב מדבר יהודה, מוכנים לספק לכם את חווית האירוח הטובה ביותר
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 place-content-center">
          <motion.div
            variants={mapVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <MapContainer
                center={[businessLocation.lat, businessLocation.lng]}
                zoom={businessLocation.zoom}
                style={{ height: "100%", width: "100%" }}
                className="z-10"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[businessLocation.lat, businessLocation.lng]}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-2">
                        {businessLocation.name}
                      </h3>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>

              {/* Animated pulse effect on marker */}
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full opacity-20"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
