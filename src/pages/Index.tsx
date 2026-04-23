import { lazy, Suspense, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Lazy-load das seções abaixo da dobra para acelerar o LCP
const Problem = lazy(() => import("@/components/sections/Problem"));
const SocialProof = lazy(() => import("@/components/sections/SocialProof"));
const Services = lazy(() => import("@/components/sections/Services"));
const Process = lazy(() => import("@/components/sections/Process"));
const ForWhom = lazy(() => import("@/components/sections/ForWhom"));
const Differentials = lazy(() => import("@/components/sections/Differentials"));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const SectionFallback = () => <div className="min-h-[40vh]" aria-hidden="true" />;

const Index = () => {
  useEffect(() => {
    document.title = "Treex Agência Digital | Mais clientes todos os dias";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta(
      "description",
      "Treex Agência Digital - Tráfego pago, automação e desenvolvimento que transformam seu negócio em uma máquina previsível de vendas. Diagnóstico gratuito."
    );

    // Bloquear clique direito
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Bloquear teclas de desenvolvedor
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I/J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Bloquear seleção de texto
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Bloquear arrastar
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Adicionar event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Limpar event listeners ao desmontar
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Problem />
          <SocialProof />
          <Services />
          <Process />
          <ForWhom />
          <Differentials />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
