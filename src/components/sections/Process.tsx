import Reveal from "../Reveal";
import WhatsAppButton from "../WhatsAppButton";

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    bold: "30 minutos no WhatsApp",
    desc: "Entendemos seu negócio e mostramos exatamente o que precisa fazer agora. Saindo com plano claro, não com papo furado.",
  },
  {
    n: "02",
    title: "Estratégia",
    bold: "Plano de ataque",
    desc: "Montamos a estratégia exata pro seu nicho. Anúncios que convertem, mensagens que vendem, automação que trabalha pra você.",
  },
  {
    n: "03",
    title: "Execução",
    bold: "WhatsApp tocando",
    desc: "Ligamos a máquina e em dias você já tem clientes novos entrando. Sem precisar fazer nada, só atender e vender.",
  },
  {
    n: "04",
    title: "Escala",
    bold: "Mais clientes todo dia",
    desc: "Otimizamos o que funciona e multiplica os resultados. Crescimento real que você vê no caixa todo mês.",
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
              Do <span className="text-gradient">silêncio</span> ao WhatsApp cheio em{" "}
              <span className="text-gradient">4 passos.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={300}>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              Método testado que transforma seu WhatsApp em máquina de vendas.
              <span className="font-semibold text-foreground"> Sem complicação.</span>
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

        <Reveal variant="zoom-in" delay={600} duration={900}>
          <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-14">
            <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-6 backdrop-blur sm:p-8">
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl md:text-2xl">
                Pronto para fazer seu WhatsApp tocar todos os dias?
              </h3>
              <p className="mt-2 text-[13px] text-muted-foreground sm:mt-3 sm:text-sm">
                Comece agora mesmo. Em 30 minutos você já sabe exatamente o que fazer.
              </p>
              <div className="mt-4 sm:mt-6">
                <WhatsAppButton variant="whatsapp" className="w-full sm:w-auto">
                  COMEÇAR AGORA
                </WhatsAppButton>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground sm:mt-4 sm:text-xs">
                ⚡ Vagas limitadas · Resposta em 2 minutos
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;
