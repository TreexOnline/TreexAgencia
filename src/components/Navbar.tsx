import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";
import logo from "@/assets/treex-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#processo", label: "Como funciona" },
    { href: "#para-quem", label: "Para quem" },
    { href: "#diferenciais", label: "Diferenciais" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:h-20 md:px-6">
        {/* MOBILE: logo centralizada */}
        <a
          href="#top"
          className="mx-auto flex items-center gap-2.5 md:hidden"
          aria-label="Treex Agência Digital"
        >
          <img
            src={logo}
            alt="Treex"
            width={48}
            height={48}
            loading="eager"
            decoding="async"
            // @ts-expect-error fetchpriority is a valid HTML attr
            fetchpriority="high"
            className="h-12 w-12 shrink-0 object-contain drop-shadow-[0_0_18px_hsl(275_95%_60%/0.55)]"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-bold tracking-[0.18em] text-foreground">
              TREEX
            </span>
            <span className="text-[8.5px] uppercase tracking-[0.28em] text-primary-glow">
              Agência Digital
            </span>
          </div>
        </a>

        {/* DESKTOP: logo esquerda */}
        <a
          href="#top"
          className="hidden md:flex md:items-center md:gap-3"
          aria-label="Treex Agência Digital"
        >
          <img
            src={logo}
            alt="Treex"
            width={64}
            height={64}
            loading="eager"
            decoding="async"
            // @ts-expect-error fetchpriority is a valid HTML attr
            fetchpriority="high"
            className="h-14 w-14 object-contain drop-shadow-[0_0_22px_hsl(275_95%_60%/0.6)] lg:h-16 lg:w-16"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-[0.18em] text-foreground lg:text-lg">
              TREEX
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-primary-glow">
              Agência Digital
            </span>
          </div>
        </a>

        {/* DESKTOP: links centralizados */}
        <div className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* DESKTOP: CTA */}
        <div className="ml-7 hidden md:block">
          <WhatsAppButton size="default" variant="primary">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
