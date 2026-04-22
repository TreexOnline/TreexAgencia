import { Store, User, Building2, Briefcase, MapPin } from "lucide-react";
import Reveal from "../Reveal";

const items = [
  {
    icon: Store,
    title: "Comércios locais",
    desc: "Restaurantes, lojas, salões, clínicas — quem precisa lotar a agenda e o caixa.",
  },
  {
    icon: User,
    title: "Profissionais autônomos",
    desc: "Médicos, advogados, dentistas, consultores que querem agenda cheia todo mês.",
  },
  {
    icon: Building2,
    title: "Empresas em crescimento",
    desc: "Negócios que precisam estruturar marketing pra escalar com previsibilidade.",
  },
  {
    icon: Briefcase,
    title: "Prestadores de serviço",
    desc: "Quem vive de orçamento e precisa de lead qualificado entrando todo dia.",
  },
];

const ForWhom = () => {
  return (
    <section id="para-quem" className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-down" duration={700}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow sm:text-[11px] md:text-xs md:tracking-widest">
              Para quem é
            </span>
          </Reveal>
          <Reveal variant="blur-in" delay={120} duration={900}>
            <h2 className="mt-4 font-display font-bold leading-[1.12] text-[26px] sm:mt-6 sm:text-[34px] md:text-[44px] lg:text-5xl">
              Se o seu negócio depende de <span className="text-gradient">cliente novo entrando</span>,
              a Treex é pra você.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:mt-14 sm:gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} variant="zoom-in" delay={i * 100} duration={750}>
              <div className="group flex h-full gap-3 rounded-2xl border border-border bg-card/40 p-4 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/70 sm:gap-4 sm:p-5 md:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/5 text-primary-glow transition-all group-hover:border-transparent group-hover:bg-gradient-primary group-hover:text-primary-foreground sm:h-12 sm:w-12 md:h-14 md:w-14">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[15px] font-bold sm:text-base md:text-lg">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground sm:mt-1.5 sm:text-sm md:text-[15px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={200}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/20 bg-card/30 p-4 text-center backdrop-blur sm:mt-12 sm:p-5 md:p-6">
            <div className="flex flex-col items-center justify-center gap-1.5 text-[13px] text-foreground sm:flex-row sm:gap-2 sm:text-sm md:text-base">
              <MapPin className="h-4 w-4 shrink-0 text-primary-glow" />
              <span className="leading-relaxed">
                Atendemos <span className="font-semibold">Araçatuba e região</span> presencialmente —
                e <span className="font-semibold">todo o Brasil online.</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ForWhom;
