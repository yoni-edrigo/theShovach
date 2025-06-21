import { HeroSection } from "@/components/sections/hero";
import { StickyFooter } from "@/components/StickyFooter";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      {/* Main content that sits on top of the footer */}
      <main className="relative z-10 min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 text-balance">
        <HeroSection />
        <section className="h-screen bg-blue-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Section 2</h2>
        </section>
        <section className="h-screen bg-green-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold">Section 3</h2>
        </section>
      </main>

      {/* Stickyr that sits behind the main content */}
      <StickyFooter />
    </div>
  );
}
