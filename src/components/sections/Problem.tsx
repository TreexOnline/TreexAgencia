import { X } from "lucide-react";
import Reveal from "../Reveal";

const pains = [
  {
    title: "Investe em anúncio e não vê retorno",
    desc: "Você impulsiona post, paga gestor, mas no fim do mês não sabe quanto entrou de cliente novo nem quanto faturou de verdade.",
  },
  {
    title: "Depende do boca-a-boca e da indicação",
    desc: "Seu faturamento sobe e desce de forma imprevisível. Quando para de aparecer indicação, o telefone simplesmente para de tocar.",
  },
  {
    title: "Perde lead porque demora pra responder",
    desc: "Cliente manda mensagem fora do horário, você responde no outro dia e ele já fechou com o concorrente que respondeu na hora.",
  },
  {
    title: "Tem um site bonito mas que não vende",
    desc: "Você gastou com um site que serve só de cartão de visita. Ele não captura contato, não qualifica e não converte ninguém em cliente.",
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
              A verdade é que <span className="text-gradient">você não tem um problema de produto.</span>{" "}
              Você tem um problema de <span className="text-gradient">previsibilidade.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={300} duration={800}>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              Todo mês começa do zero. Sem fila de orçamentos, sem certeza se o caixa fecha,
              sem saber de onde vai vir o próximo cliente. <span className="font-semibold text-foreground">Isso precisa acabar.</span>
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
