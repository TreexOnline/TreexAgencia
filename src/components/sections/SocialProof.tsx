import WhatsAppButton from "../WhatsAppButton";
import Reveal from "../Reveal";

const stats = [
  { value: "47+", label: "Clientes" },
  { value: "2.8K+", label: "Mensagens" },
  { value: "87%", label: "Conversão" }
];

const SocialProof = () => {
  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="blur-in" delay={120} duration={900}>
            <h2 className="mt-4 font-display font-bold leading-[1.12] text-[26px] sm:mt-6 sm:text-[34px] md:text-[44px] lg:text-5xl">
              <span className="text-gradient">Resultados reais.</span>
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

        {/* CTA Section */}
        <Reveal variant="zoom-in" delay={600} duration={900}>
          <div className="mx-auto mt-10 max-w-2xl text-center sm:mt-14">
            <div className="mt-4 sm:mt-6">
              <WhatsAppButton variant="whatsapp" className="w-full sm:w-auto">
                QUERO ESSES RESULTADOS
              </WhatsAppButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SocialProof;
