import Reveal from "../Reveal";

const items = [
  {
    label: "Outras agências",
    color: "text-muted-foreground",
    badgeClass: "border-border bg-muted/40 text-muted-foreground",
    points: [
      "Vendem pacote pronto",
      "Entregam relatório bonito sem venda",
      "Somem depois do contrato fechado",
      "Métrica de vaidade (curtida, alcance)",
      "Roteiro genérico copiado de outro cliente",
    ],
  },
  {
    label: "Treex Agência",
    color: "text-foreground",
    badgeClass: "border-primary/40 bg-primary/10 text-primary-glow",
    points: [
      "Estratégia desenhada pro seu nicho",
      "Reportamos por receita gerada, não curtida",
      "Acompanhamento próximo toda semana",
      "Foco total em conversão e ROI",
      "Plano sob medida — você aprova antes",
    ],
    highlight: true,
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-down" duration={700}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow sm:text-[11px] md:text-xs md:tracking-widest">
              O que muda com a Treex
            </span>
          </Reveal>
          <Reveal variant="blur-in" delay={120} duration={900}>
            <h2 className="mt-4 font-display font-bold leading-[1.12] text-[26px] sm:mt-6 sm:text-[34px] md:text-[44px] lg:text-5xl">
              A diferença entre uma agência <span className="text-muted-foreground">qualquer</span>{" "}
              e uma agência que <span className="text-gradient">faz vender.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 md:gap-5">
          {items.map((col, i) => (
            <Reveal
              key={col.label}
              variant={i === 0 ? "slide-left" : "slide-right"}
              delay={i * 150}
              duration={850}
            >
              <div
                className={`relative h-full rounded-2xl border p-5 backdrop-blur sm:p-6 md:p-8 ${
                  col.highlight
                    ? "border-primary/40 bg-card/70 shadow-glow-soft"
                    : "border-border bg-card/30"
                }`}
              >
                {col.highlight && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden rounded-t-2xl">
                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary-glow to-transparent animate-slide-line" />
                  </div>
                )}
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider sm:text-[11px] md:text-xs md:tracking-widest ${col.badgeClass}`}
                >
                  {col.label}
                </span>
                <ul className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5">
                  {col.points.map((p) => (
                    <li key={p} className={`flex items-start gap-2.5 text-[13px] sm:text-sm md:text-[15px] ${col.color}`}>
                      <span
                        className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                          col.highlight ? "bg-primary-glow shadow-glow-soft" : "bg-muted-foreground/50"
                        }`}
                      />
                      <span className={col.highlight ? "font-medium" : ""}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
