// components/Layout.js
import { useEffect } from "react";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";

/**
 * Layout wraps pages with Navbar + BottomNav and a subtle entrance animation.
 * Usage: Wrap page content in <Layout>{children}</Layout> when using manually.
 * But pages/_app.js will use it automatically so individual pages DON'T need to import Navbar/BottomNav.
 */
export default function Layout({ children }) {
  // small client-only effect to avoid hydration jump for theme
  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("ft_theme");
    if (saved) document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* animated container */}
      <div
        key="page-content"
        className="page-animate flex-1"
        style={{
          // fallback animation for users without tailwind plugin
          transition: "opacity 320ms ease, transform 320ms ease",
          opacity: 1,
          transform: "translateY(0px)",
        }}
      >
        {/* inner wrapper gives consistent padding */}
        <div className="w-full">
          {children}
        </div>
      </div>

      {/* Bottom nav (mobile) */}
      <BottomNav />
      
      <style jsx global>{`
        /* initial state for animation then trigger via mounted class */
        .page-animate { opacity: 0; transform: translateY(6px); }
        /* after a small delay, animate to final state */
        .page-animate-loaded { opacity: 1; transform: translateY(0); transition: opacity 360ms ease, transform 360ms ease; }
      `}</style>
    </div>
  );
}
