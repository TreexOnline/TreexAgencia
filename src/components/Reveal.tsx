import { ReactNode, ElementType } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Variant = "fade-up" | "fade" | "fade-down" | "zoom-in" | "blur-in" | "slide-left" | "slide-right";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  as?: ElementType;
}

const variantStyles: Record<Variant, { hidden: string; shown: string }> = {
  "fade-up":     { hidden: "opacity-0 translate-y-10",         shown: "opacity-100 translate-y-0" },
  "fade":        { hidden: "opacity-0",                         shown: "opacity-100" },
  "fade-down":   { hidden: "opacity-0 -translate-y-10",         shown: "opacity-100 translate-y-0" },
  "zoom-in":     { hidden: "opacity-0 scale-[0.92]",            shown: "opacity-100 scale-100" },
  "blur-in":     { hidden: "opacity-0 blur-md translate-y-4",   shown: "opacity-100 blur-0 translate-y-0" },
  "slide-left":  { hidden: "opacity-0 -translate-x-12",         shown: "opacity-100 translate-x-0" },
  "slide-right": { hidden: "opacity-0 translate-x-12",          shown: "opacity-100 translate-x-0" },
};

const Reveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  className,
  as: Tag = "div",
}: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const v = variantStyles[variant];

  return (
    <Tag
      ref={ref as never}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={cn(
        "transition-all will-change-transform",
        inView ? v.shown : v.hidden,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
