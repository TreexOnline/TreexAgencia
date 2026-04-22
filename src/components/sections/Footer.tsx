import { MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow-soft">
                <span className="font-display text-base font-bold text-primary-foreground">T</span>
              </div>
              <div>
                <div className="font-display text-sm font-bold tracking-wider sm:text-base">TREEX</div>
                <div className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px]">
                  Agência Digital
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              Sistemas, anúncios e automações que transformam negócios em máquinas de vendas.
            </p>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold uppercase tracking-widest text-primary-glow sm:text-xs">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-[13px] text-muted-foreground sm:text-sm">
              <li>
                <a
                  href="https://wa.me/5518991913165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-primary-glow" />
                  +55 18 99191-3165
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary-glow" />
                Araçatuba — SP / Brasil
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-[11px] font-bold uppercase tracking-widest text-primary-glow sm:text-xs">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2 text-[13px] text-muted-foreground sm:text-sm">
              <li>Tráfego Pago</li>
              <li>Automação</li>
              <li>Desenvolvimento (DEV)</li>
              <li>Estratégia Digital</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-[11px] text-muted-foreground sm:flex-row sm:gap-4 sm:text-xs">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Treex Agência Digital. Todos os direitos reservados.</p>
          <p className="text-center font-display tracking-widest uppercase">Crescimento • Tecnologia • Resultado</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
