import { createFileRoute } from "@tanstack/react-router";
import { StickyFooter } from "@/components/StickyFooter";

export const Route = createFileRoute("/partners")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      {/* Main content that sits on top of the footer */}
      <main className="relative z-10 min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-orange-600 bg-clip-text text-transparent text-center">
              שותפים
            </h1>
            <p className="text-lg text-slate-600 text-center leading-relaxed">
              Hello "/partners"!
            </p>
          </div>
        </div>
      </main>

      {/* Sticky footer that sits behind the main content */}
      <StickyFooter />
    </div>
  );
}
