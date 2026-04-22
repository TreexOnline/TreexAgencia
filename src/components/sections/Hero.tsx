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
            Você tem um comércio ou é um profissional buscando
            <span className="text-gradient"> mais clientes todos os dias?</span>
          </h1>

          <p
            className="mt-5 animate-fade-in-up text-[15px] leading-relaxed text-muted-foreground sm:mt-7 sm:text-base md:text-lg lg:text-xl"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            Nós criamos <span className="font-semibold text-foreground">sistemas, anúncios e automações</span>{" "}
            que transformam seu negócio em uma{" "}
            <span className="font-semibold text-foreground">máquina previsível de vendas</span> — mesmo se você nunca investiu em marketing antes.
          </p>

          <ul
            className="mx-auto mt-6 grid animate-fade-in-up gap-2 text-left text-[13px] text-foreground/90 sm:mt-7 sm:gap-2.5 sm:text-sm md:mx-0 md:max-w-2xl md:grid-cols-2 md:text-[15px]"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            {[
              "Mais orçamentos no seu WhatsApp",
              "Estratégia feita pra seu nicho",
              "Atendimento automatizado 24h",
              "Tudo medido em vendas reais",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow sm:h-5 sm:w-5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div
            className="mt-7 flex w-full animate-fade-in-up flex-col items-stretch gap-2.5 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-3 md:justify-start"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            <WhatsAppButton className="w-full sm:w-auto">
              Quero meu diagnóstico
            </WhatsAppButton>
            <a
              href="#servicos"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-5 text-[13px] font-medium text-muted-foreground backdrop-blur transition-all hover:border-primary/40 hover:text-foreground sm:h-13 sm:w-auto sm:px-6 sm:text-sm md:h-14"
            >
              Ver como funciona
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <p
            className="mt-4 animate-fade-in-up text-center text-[11px] text-muted-foreground sm:text-xs md:text-left md:text-sm"
            style={{ animationDelay: "0.7s", opacity: 0 }}
          >
            ⚡ Resposta em poucos minutos · Sem compromisso · Sem enrolação
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
