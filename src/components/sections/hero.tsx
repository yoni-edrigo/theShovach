import heroBg from "@/assets/shovach-hero.jpg";
import { AnimatedBirds } from "../animatedBirds/animatedBirds";
import BreathingText from "../BreathingText";
import { Button } from "../ui/button";

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
        <BreathingText
          as="h1"
          className="text-white font-black text-[20vw]"
          lightFontClass="font-hug-regular"
          heavyFontClass="font-hug-color"
          transition={{ duration: 2, ease: "easeInOut" }}
          staggerDuration={0.05}
          staggerFrom="center"
          repeatDelay={0.5}
        >
          השובך
        </BreathingText>
        <span className="flex gap-3 justify-center">
          <Button className=" rounded-2xl border-white border-1">
            {"הזמנת אירוח"}
          </Button>
          <Button className=" rounded-2xl border-white border-1">
            {"הזמנת טיפול"}
          </Button>
        </span>
      </span>
      <AnimatedBirds />
    </section>
  );
}
