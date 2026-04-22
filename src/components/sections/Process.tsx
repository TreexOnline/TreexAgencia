import Reveal from "../Reveal";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    bold: "Entendemos seu negócio de verdade.",
    desc: "Conversa de 30 minutos pra mapear ofertas, ticket médio, gargalos e onde o dinheiro está vazando. Você sai com clareza, não com proposta empurrada.",
  },
  {
    n: "02",
    title: "Estratégia",
    bold: "Montamos um plano sob medida.",
    desc: "Definimos canal, oferta, funil, automação e métricas de sucesso. Tudo escrito, com prazo e responsável. Sem promessa vaga.",
  },
  {
    n: "03",
    title: "Execução",
    bold: "Colocamos a máquina pra rodar.",
    desc: "Lançamos campanhas, configuramos automações, desenvolvemos o que precisa. Em poucos dias você já tem lead novo entrando.",
  },
  {
    n: "04",
    title: "Escala",
    bold: "Otimizamos e multiplicamos o que funciona.",
    desc: "Acompanhamento semanal por dados reais. Cortamos o que não converte, dobramos o que vende. Crescimento previsível, mês após mês.",
  },
];

const Process = () => {
  return (
    <section id="processo" className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-down" duration={700}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow sm:text-[11px] md:text-xs md:tracking-widest">
              Como funciona
            </span>
          </Reveal>
          <Reveal variant="blur-in" delay={120} duration={900}>
            <h2 className="mt-4 font-display font-bold leading-[1.12] text-[26px] sm:mt-6 sm:text-[34px] md:text-[44px] lg:text-5xl">
              Do <span className="text-gradient">caos</span> ao crescimento previsível em{" "}
              <span className="text-gradient">4 passos.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={300}>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              Nada de promessa mágica. Um método claro, executado por especialistas,
              com acompanhamento real do começo ao fim.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
          <div className="space-y-3 sm:space-y-5 md:space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} variant="slide-left" delay={i * 120} duration={800}>
                <div className="group relative flex gap-4 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/70 sm:gap-5 sm:p-6 md:gap-7 md:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-background font-display text-sm font-bold text-primary-glow shadow-glow-soft sm:h-14 sm:w-14 sm:text-base md:h-16 md:w-16 md:rounded-2xl md:text-lg">
                    {s.n}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[16px] font-bold leading-tight sm:text-lg md:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed sm:mt-2 sm:text-sm md:text-[15px]">
                      <span className="font-semibold text-foreground">{s.bold}</span>{" "}
                      <span className="text-muted-foreground">{s.desc}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
