import { X } from "lucide-react";
import Reveal from "../Reveal";

const pains = [
  {
    title: "WhatsApp parado?",
    desc: "Nenhuma mensagem de cliente novo. Caixa não fecha.",
  },
  {
    title: "Cliente some?",
    desc: "Aparece um, some dois. Sem previsibilidade.",
  },
  {
    title: "Demora pra responder?",
    desc: "Cliente manda, você demora. Ele fecha com concorrente.",
  },
  {
    title: "Anúncio queima dinheiro?",
    desc: "Coloca dinheiro e não sabe se veio cliente. Só prejuízo.",
  },
];

const Problem = () => {
  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-down" duration={700}>
            <span className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-destructive sm:text-[11px] md:text-xs md:tracking-widest">
              Se algum desses te atinge…
            </span>
          </Reveal>
          <Reveal variant="blur-in" delay={120} duration={900}>
            <h2 className="mt-4 font-display font-bold leading-[1.12] text-[26px] sm:mt-6 sm:text-[34px] md:text-[44px] lg:text-5xl">
              Seu WhatsApp <span className="text-gradient">não toca?</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={300} duration={800}>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              <span className="font-semibold text-foreground">Nós resolvemos isso.</span>
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal
              key={p.title}
              variant={i % 2 === 0 ? "slide-left" : "slide-right"}
              delay={i * 90}
              duration={750}
            >
              <div className="group flex h-full gap-3 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-all hover:border-destructive/40 hover:bg-card/70 sm:gap-4 sm:p-5 md:p-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-destructive/30 bg-destructive/10 text-destructive sm:h-9 sm:w-9">
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={3} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[15px] font-bold leading-tight text-foreground sm:text-base md:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm md:text-[15px]">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
