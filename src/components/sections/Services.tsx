import { Target, Bot, Code2, LineChart, ArrowRight } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Reveal from "../Reveal";

const services = [
  {
    tag: "Tráfego",
    title: "Anúncios que vendem.",
    desc: "Meta Ads + Google Ads. Cada real monitorado.",
  },
  {
    tag: "Automação",
    title: "Atendimento 24h.",
    desc: "Robô no WhatsApp. Responde na hora. Não perde cliente.",
  },
  {
    tag: "DEV",
    title: "Sites que convertem.",
    desc: "Landing pages que vendem. Não só enfeita.",
  },
  {
    tag: "Estratégia",
    title: "Plano que funciona.",
    desc: "Diagnóstico + execução. Sem teoria.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-down" duration={700}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow sm:text-[11px] md:text-xs md:tracking-widest">
              O que fazemos por você
            </span>
          </Reveal>
          <Reveal variant="blur-in" delay={120} duration={900}>
            <h2 className="mt-4 font-display font-bold leading-[1.12] text-[26px] sm:mt-6 sm:text-[34px] md:text-[44px] lg:text-5xl">
              Fazemos seu <span className="text-gradient">WhatsApp tocar.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={300}>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              <span className="font-semibold text-foreground">Clientes todos os dias.</span>
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-5xl space-y-4 sm:mt-16 sm:space-y-6 md:space-y-8">
          {services.map((s, i) => (
            <Reveal
              key={s.tag}
              variant="fade-up"
              delay={i * 100}
              duration={850}
            >
              <article className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/70 sm:p-7 md:p-10">
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/15 sm:h-40 sm:w-40" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow sm:text-[11px] md:text-xs">
                    {s.tag}
                  </span>
                  <h3 className="mt-3 font-display text-[18px] font-bold leading-tight text-foreground sm:text-[22px] md:mt-4 md:text-[26px] lg:text-[28px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[15px] md:text-base">
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="zoom-in" delay={150}>
          <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-14">
            <p className="text-[13px] text-muted-foreground sm:text-sm md:text-base">
              Quer saber exatamente o que seu negócio precisa agora?
            </p>
            <div className="mt-4 flex justify-center px-2">
              <WhatsAppButton className="w-full max-w-sm sm:w-auto">
                FALAR COM ESPECIALISTA
                <ArrowRight className="ml-1 h-4 w-4 shrink-0" />
              </WhatsAppButton>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground sm:mt-4 sm:text-xs">
              ⚡ Resposta em 2 minutos · 100% gratuito
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
