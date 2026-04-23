import WhatsAppButton from "../WhatsAppButton";
import { CheckCircle2, Clock, Shield } from "lucide-react";
import Reveal from "../Reveal";

const FinalCTA = () => {
  return (
    <section id="contato" className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="zoom-in" duration={900}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/30 bg-gradient-card p-5 text-center shadow-elevated sm:rounded-3xl sm:p-10 md:p-16">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary-glow to-transparent animate-slide-line" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
              <div
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent animate-slide-line"
                style={{ animationDelay: "2s" }}
              />
            </div>

            <div className="relative">
              <Reveal variant="fade-down" delay={100}>
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary-glow sm:text-[11px] md:text-xs md:tracking-widest">
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
                  </span>
                  <span className="truncate">Diagnóstico gratuito · Vagas limitadas</span>
                </span>
              </Reveal>

              <Reveal variant="blur-in" delay={200} duration={1000}>
                <h2 className="mt-5 font-display font-bold leading-[1.08] text-[26px] sm:mt-6 sm:text-[36px] md:text-5xl lg:text-[56px]">
                  Pare de <span className="text-muted-foreground line-through">esperar clientes</span>.{" "}
                  Comece a <span className="text-gradient">escolher quem atender.</span>
                </h2>
              </Reveal>

              <Reveal variant="fade-up" delay={400}>
                <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
                  Em <span className="font-semibold text-foreground">30 minutos no WhatsApp</span>,
                  vamos mostrar exatamente como fazer seu celular tocar todo dia com clientes prontos pra comprar.
                  <span className="font-semibold text-foreground"> Sem teoria, só resultado.</span>
                </p>
              </Reveal>

              <Reveal variant="fade-up" delay={550}>
                <ul className="mx-auto mt-6 grid max-w-2xl gap-2 sm:mt-7 sm:grid-cols-3 sm:gap-3">
                  {[
                    { icon: CheckCircle2, text: "100% gratuito" },
                    { icon: Clock, text: "Resposta em minutos" },
                    { icon: Shield, text: "Sem compromisso" },
                  ].map((g) => (
                    <li
                      key={g.text}
                      className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-3 py-2.5 text-[12px] text-foreground/90 backdrop-blur sm:text-sm"
                    >
                      <g.icon className="h-4 w-4 shrink-0 text-primary-glow" />
                      <span>{g.text}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal variant="zoom-in" delay={700}>
                <div className="mt-7 flex justify-center sm:mt-9">
                  <WhatsAppButton variant="whatsapp" className="w-full max-w-sm sm:w-auto sm:max-w-none">
                    FALAR COM ESPECIALISTA AGORA
                  </WhatsAppButton>
                </div>
              </Reveal>

              <Reveal variant="fade" delay={850}>
                <p className="mt-4 text-[11px] text-muted-foreground sm:text-xs">
                  Atendemos hoje · +55 18 99191-3165
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCTA;
