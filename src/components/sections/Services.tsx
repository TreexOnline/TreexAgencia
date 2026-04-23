import { Target, Bot, Code2, LineChart, ArrowRight } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Reveal from "../Reveal";

const services = [
  {
    icon: Target,
    tag: "Tráfego Pago",
    title: "Seus anúncios chegando em quem realmente compra.",
    desc: "Configuramos campanhas no Meta Ads e Google Ads usando segmentação por comportamento de compra, não por chute. Cada real investido é monitorado — você vê de onde veio cada cliente.",
    points: ["Meta Ads (Instagram + Facebook)", "Google Ads (Pesquisa + YouTube)", "Otimização semanal por ROI"],
  },
  {
    icon: Bot,
    tag: "Automação",
    title: "Atendimento que não dorme, não esquece e não perde lead.",
    desc: "Robôs no WhatsApp e Instagram que respondem na hora, qualificam o cliente, agendam reuniões e mandam o lead pronto pra você fechar. Funciona 24h, finais de semana, feriados.",
    points: ["Bot no WhatsApp e Direct", "Qualificação automática", "Integração com seu CRM"],
  },
  {
    icon: Code2,
    tag: "Desenvolvimento (DEV)",
    title: "Sites e sistemas feitos pra vender — não pra enfeitar.",
    desc: "Landing pages com copy persuasivo, sistemas internos sob medida, dashboards de vendas, integrações com pagamento. Tudo construído pensando em conversão e em velocidade.",
    points: ["Landing pages de alta conversão", "Sistemas e dashboards sob medida", "Integrações (pagamento, CRM, IA)"],
  },
  {
    icon: LineChart,
    tag: "Estratégia Digital",
    title: "Um plano completo, não pacotes prontos.",
    desc: "Diagnóstico do seu negócio, análise dos concorrentes, definição de oferta, funil de vendas e calendário de execução. Você sai sabendo exatamente o que fazer pra crescer.",
    points: ["Diagnóstico + análise concorrência", "Funil de vendas mapeado", "Plano executável mês a mês"],
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
              Não vendemos <span className="text-muted-foreground line-through">post bonito</span>.{" "}
              Fazemos seu <span className="text-gradient">WhatsApp tocar.</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={300}>
            <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base md:text-lg">
              Cada serviço aqui tem um só objetivo: <span className="font-semibold text-foreground">clientes todos os dias no seu WhatsApp</span>
              sem que você precise fazer nada.
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

                <div className="relative grid gap-5 md:grid-cols-[auto_1fr] md:gap-10">
                  <div className="flex items-center gap-3 md:flex-col md:items-center md:gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-glow-soft transition-all group-hover:shadow-glow sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16">
                      <s.icon className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-glow sm:text-[11px] md:hidden">
                      0{i + 1} · {s.tag}
                    </span>
                    <span className="hidden font-display text-xs font-bold uppercase tracking-[0.25em] text-primary-glow md:block">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <span className="hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-glow md:inline-block">
                      {s.tag}
                    </span>
                    <h3 className="font-display text-[18px] font-bold leading-tight text-foreground sm:text-[22px] md:mt-2 md:text-[26px] lg:text-[28px]">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-muted-foreground sm:mt-3 sm:text-[15px] md:text-base">
                      {s.desc}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-2.5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 rounded-lg border border-border/60 bg-secondary/40 px-2.5 py-2 text-[11px] font-medium text-foreground/90 sm:px-3 sm:text-[12px]"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-primary-glow shadow-glow-soft" />
                          <span className="truncate">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
