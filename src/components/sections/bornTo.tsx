import { Typewriter } from "../ui/typewriter";

export function BornToSection() {
  return (
    <section className="min-h-[60svh] grid place-items-center">
      <div className="w-full h-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row place-items-center place-content-center  font-normal overflow-hidden p-16">
        <div className="whitespace-pre-wrap">
          <span>{"נולדנו ל 🌞 כדי "}</span>
          <Typewriter
            text={["לנוח", "לאהוב", "לחשוב", "לחיות את הרגע"]}
            speed={70}
            className="text-yellow-500"
            waitTime={3000}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </div>
      </div>
    </section>
  );
}
