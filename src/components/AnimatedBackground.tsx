import { memo } from "react";

const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Radial glows - bem mais sutis e localizados */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-accent/6 blur-[140px]" />

      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      {/* Scanning lines - reduzidas */}
      <div className="scan-line" style={{ animationDelay: "0s" }} />
      <div className="scan-line" style={{ animationDelay: "5s" }} />

      {/* Vertical accent lines - mais sutis */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* Floating particles - menos */}
      <div className="absolute left-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-primary-glow/70 shadow-glow-soft animate-float" />
      <div className="absolute right-[25%] top-[60%] h-1 w-1 rounded-full bg-accent/60 shadow-glow-soft animate-float" style={{ animationDelay: "3s" }} />
    </div>
  );
};

export default memo(AnimatedBackground);
