import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { Location } from "@/components/sections/location";
import { StickyFooter } from "@/components/StickyFooter";
import { createFileRoute } from "@tanstack/react-router";
import { BookSection } from "@/components/sections/book";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      {/* Main content that sits on top of the footer */}
      <main className="relative z-10 min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-balance">
        <HeroSection />
        <ServicesSection />
        <BookSection />
        <Location />
      </main>

      {/* Stickyr that sits behind the main content */}
      <StickyFooter />
    </div>
  );
}
