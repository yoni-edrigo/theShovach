import { Link } from "@tanstack/react-router";

export function StickyFooter() {
  return (
    <div className="sticky bottom-0 left-0 w-full h-80 bg-white flex justify-center items-center z-0">
      <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-[#ff5941]">
        <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-sm sm:text-lg md:text-xl">
          <ul>
            <li className="hover:underline cursor-pointer">
              <Link to="/" className="hover:underline">
                דף הבית
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/wellness-center" className="hover:underline">
                מרכז הבריאות
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/zimmer" className="hover:underline">
                הצימר
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/about" className="hover:underline">
                אודות
              </Link>
            </li>
          </ul>
          <ul>
            <li className="hover:underline cursor-pointer">
              <Link to="/accessebility" className="hover:underline">
                הצהרת נגישות
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/terms-of-service" className="hover:underline">
                תנאי שימוש
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <a href="tel:+972-XX-XXX-XXXX" className="hover:underline">
                צור קשר
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Notice */}
        <div className="absolute bottom-4 left-4 text-xs text-gray-700 text-left">
          <p>
            © {new Date().getFullYear()} השובך - מרכז בריאות ואירוח. כל הזכויות
            שמורות.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} The Shovach - Wellness Center &
            Accommodation. All rights reserved.
          </p>
        </div>

        <h2 className="absolute bottom-0 right-0 translate-y-1/3 sm:text-[192px] text-[80px] text-[#ff5941] font-hug-regular">
          השובך
        </h2>
      </div>
    </div>
  );
}
