import heroBg from "@/assets/shovach-hero.jpg";
import { AnimatedBirds } from "../animatedBirds/animatedBirds";
import { Button } from "../ui/button";
import { Calendar, Heart } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <section
      className="grid place-items-center min-h-svh relative overflow-hidden"
      style={{ gridTemplateAreas: `"area"` }}
      aria-label="Welcome section"
    >
      <img
        src={heroBg}
        style={{
          gridArea: "area",
          objectPosition: "center ",
        }}
        className="absolute inset-0 w-full h-full object-cover z-0"
        alt="Hero background"
      />
      <span
        style={{ gridArea: "area" }}
        className="grid place-content-center text-center z-10"
      >
        <h1 className="text-white font-black text-[30vw] sm:text-[20vw] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:relative drop-shadow-lg font-hug-regular">
          השובך
        </h1>

        <span className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center absolute bottom-8 sm:static sm:mt-8 left-1/2 -translate-x-1/2 sm:left-auto sm:-translate-x-0 px-4 sm:px-0">
          <Link to="/zimmer">
            <Button
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl font-medium sm:font-semibold shadow-lg hover:shadow-xl text-base sm:text-lg w-full sm:w-auto drop-shadow-md cursor-pointer"
              size="lg"
            >
              הזמנת אירוח
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </Link>
          <Link to="/wellness-center">
            <Button
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-3xl font-medium sm:font-semibold shadow-lg hover:shadow-xl text-base sm:text-lg w-full sm:w-auto drop-shadow-md cursor-pointer"
              size="lg"
            >
              הזמנה מהקליניקה
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </Link>
        </span>
      </span>
      <AnimatedBirds />
    </section>
  );
}
