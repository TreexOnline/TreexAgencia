import { Star, TrendingUp, Users, MessageCircle } from "lucide-react";
import WhatsAppButton from "../WhatsAppButton";
import Reveal from "../Reveal";

const testimonials = [
  {
    name: "João Silva",
    business: "Auto Peças Central",
    text: "Em 2 semanas meu WhatsApp começou a tocar todo dia. Já fechei 3 vendas que nunca teria conseguido sozinho.",
    rating: 5,
    result: "+300% mensagens"
  },
  {
    name: "Maria Santos",
    business: "Salão Beleza Pura",
    text: "Só falava que marketing não dava certo. Hoje tenho fila de espera e não sei como vivia sem isso antes.",
    rating: 5,
    result: "+15 clientes/mês"
  },
  {
    name: "Carlos Oliveira",
    business: "Consultório Médico",
    text: "Investi em gestor antes e perdi dinheiro. Com a Treex, cada real investido voltou em 3 dias.",
    rating: 5,
    result: "ROI 10x em 30 dias"
  }
];

const stats = [
  { icon: Users, value: "47+", label: "Clientes atendidos" },
  { icon: MessageCircle, value: "2.8K+", label: "Mensagens geradas" },
  { icon: TrendingUp, value: "87%", label: "Taxa de conversão" }
];

const SocialProof = () => {
  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade-down" duration={700}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow sm:text-[11px] md:text-xs md:tracking-widest">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
              </span>
              Resultados reais de clientes como você
            </span>
          </Reveal>
          
          <Reveal variant="blur-in" delay={120} duration={900}>
            <h2 className="mt-4 font-display font-bold leading-[1.12] text-[26px] sm:mt-6 sm:text-[34px] md:text-[44px] lg:text-5xl">
              Enquanto outros{" "}
              <span className="text-muted-foreground line-through">esperam clientes</span>{" "}
              nossos clientes{" "}
              <span className="text-gradient">escolhem quem atender.</span>
            </h2>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4 sm:mt-14">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              variant="zoom-in"
              delay={i * 100}
              duration={600}
            >
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-4 text-center backdrop-blur sm:p-6">
                <stat.icon className="mx-auto h-6 w-6 text-primary-glow sm:h-8 sm:w-8" />
                <div className="mt-2 font-display text-2xl font-bold text-foreground sm:mt-3 sm:text-3xl md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground sm:mt-2 sm:text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:mt-14 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              variant="fade-up"
              delay={i * 150}
              duration={750}
            >
              <div className="group h-full rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-all hover:border-primary/30 hover:bg-card/60 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-glow">
                    <span className="font-display text-sm font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
                      ))}
                    </div>
                    <h3 className="mt-1 font-display text-sm font-bold text-foreground sm:text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-[11px] text-muted-foreground sm:text-xs">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
                
                <p className="mt-3 text-[13px] leading-relaxed text-foreground sm:mt-4 sm:text-sm">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-4 rounded-xl bg-primary/10 px-3 py-2 text-center">
                  <span className="font-display text-sm font-bold text-primary-glow sm:text-base">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal variant="zoom-in" delay={600} duration={900}>
          <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-14">
              <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 backdrop-blur sm:p-8">
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl md:text-2xl">
                Você está perdendo{" "}
                <span className="text-gradient">clientes todos os dias</span>{" "}
                esperando eles te encontrarem
              </h3>
              <p className="mt-2 text-[13px] text-muted-foreground sm:mt-3 sm:text-sm">
                Enquanto você hesita, seu concorrente já está falando com seus futuros clientes
              </p>
              <div className="mt-4 sm:mt-6">
                <WhatsAppButton variant="whatsapp" className="w-full sm:w-auto">
                  QUERO MEUS CLIENTES AGORA
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialProof;
