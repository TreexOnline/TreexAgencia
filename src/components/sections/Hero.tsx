import { ArrowDown, CheckCircle2 } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pt-28 md:pb-20 md:pt-32"
    >
      <div className="mx-auto w-full max-w-6xl relative z-10">
        <div className="mx-auto max-w-4xl text-center md:text-left">
          <div className="inline-flex max-w-full animate-fade-in items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow backdrop-blur sm:text-[11px] md:tracking-widest md:text-xs">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
            </span>
            <span className="truncate">Diagnóstico gratuito · Vagas limitadas</span>
          </div>

          <h1
            className="mt-5 animate-fade-in-up font-display font-bold leading-[1.08] tracking-tight text-[28px] sm:mt-7 sm:text-[40px] md:text-[56px] md:leading-[1.05] lg:text-[68px]"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            Seu WhatsApp parou de tocar?<br className="sm:hidden" />
            <span className="text-gradient"> Fazemos ele tocar todos os dias.</span>
          </h1>

          <div
            className="mt-7 flex w-full animate-fade-in-up flex-col items-stretch gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-3 md:justify-start"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <WhatsAppButton className="w-full sm:w-auto">
              FALAR NO WHATSAPP AGORA
            </WhatsAppButton>
          </div>

          <p
            className="mt-4 animate-fade-in-up text-center text-[11px] text-muted-foreground sm:text-xs md:text-left md:text-sm"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            ⚡ Resposta em 2 minutos · 100% gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
