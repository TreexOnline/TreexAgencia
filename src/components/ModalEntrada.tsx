import { useEffect, useState } from "react";

const ModalEntrada = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já viu o modal
    const hasSeenModal = localStorage.getItem('treex_modal_visto');
    
    if (!hasSeenModal) {
      // Pequeno delay para garantir que a página carregou
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
        
        // Marcar que o usuário viu o modal
        localStorage.setItem('treex_modal_visto', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleWhatsAppRedirect = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5518991913165?text=${encodedMessage}`, '_blank');
  };

  const handleSiteClick = () => {
    handleWhatsAppRedirect("Oi, quero um site para minha empresa");
  };

  const handleMarketingClick = () => {
    handleWhatsAppRedirect("Oi, quero marketing para minha empresa");
  };

  const handleConhecerClick = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className={`relative mx-4 w-full max-w-md transform rounded-2xl border border-primary/40 bg-gradient-card p-6 shadow-elevated transition-all duration-500 sm:mx-auto sm:p-8 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Conteúdo do modal */}
        <div className="text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.08] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-primary-glow backdrop-blur sm:text-[11px]">
            <span>Escolha obrigatória</span>
          </div>

          {/* Título com palavras destacadas */}
          <h2 className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-3xl">
            O que você precisa <span className="text-gradient">hoje</span> para sua <span className="text-gradient">empresa</span>?
          </h2>

          {/* Subtítulo com palavra destacada */}
          <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
            Escolha uma das opções abaixo e vamos te direcionar da forma mais <span className="font-semibold text-primary-glow">rápida</span>
          </p>

          {/* Botões */}
          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {/* Botão 1 - Site (MAIOR DESTAQUE) */}
            <button
              onClick={handleSiteClick}
              className="group w-full rounded-xl border-2 border-primary/50 bg-primary/[0.12] p-5 text-left transition-all hover:border-primary/70 hover:bg-primary/[0.18] hover:shadow-glow-soft hover:scale-[1.02] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-bold text-foreground sm:text-xl">
                    QUERO UM SITE
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Site profissional que gera clientes
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/30 text-primary-glow transition-all group-hover:bg-primary/40 group-hover:shadow-glow sm:h-14 sm:w-14">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Botão 2 - Marketing (MAIOR DESTAQUE) */}
            <button
              onClick={handleMarketingClick}
              className="group w-full rounded-xl border-2 border-primary/50 bg-primary/[0.12] p-5 text-left transition-all hover:border-primary/70 hover:bg-primary/[0.18] hover:shadow-glow-soft hover:scale-[1.02] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-bold text-foreground sm:text-xl">
                    QUERO MARKETING PRA MINHA EMPRESA
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground sm:text-base">
                    Clientes chegando todos os dias no WhatsApp
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/30 text-primary-glow transition-all group-hover:bg-primary/40 group-hover:shadow-glow sm:h-14 sm:w-14">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Botão 3 - Conhecer (MENOR DESTAQUE) */}
            <button
              onClick={handleConhecerClick}
              className="group w-full rounded-xl border border-border/60 bg-card/60 p-4 text-left transition-all hover:border-primary/30 hover:bg-card/80 sm:p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-base font-bold text-muted-foreground transition-all group-hover:text-foreground sm:text-lg">
                    AINDA NÃO DECIDI, QUERO CONHECER A TREEX
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Quero entender como funciona antes de falar
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card/40 text-muted-foreground transition-all group-hover:bg-primary/20 group-hover:text-primary-glow sm:h-12 sm:w-12">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* Texto de ajuda sem emoji */}
          <p className="mt-6 text-xs text-muted-foreground sm:mt-8">
            Resposta em até 2 minutos · 100% gratuito
          </p>
        </div>

        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 right-16 h-24 w-24 rounded-full bg-primary/10 blur-xl" />
      </div>
    </div>
  );
};

export default ModalEntrada;
