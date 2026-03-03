import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { useEffect } from "react";
import GradualBlur from "./GradualBlur";
import Plasma from "./Plasma";

export function RootLayout() {
  return (
    <SmoothScroll>
      {/* Global Plasma Background for Dark Mode */}
      <div className="fixed inset-0 hidden dark:block pointer-events-none" style={{ zIndex: 0 }}>
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      <div className="min-h-screen flex flex-col relative z-10 text-foreground dark:text-white bg-background dark:bg-transparent">
        <Navigation />
        <main className="flex-1 relative">
          <Outlet />
        </main>
        <Footer />
        <GradualBlur
          target="page"
          position="bottom"
          height="12rem"
          strength={4}
          divCount={3}
          curve="bezier"
          exponential
          opacity={1}
          style={{ pointerEvents: 'none', zIndex: 100 }}
        />
      </div>
    </SmoothScroll>
  );
}