import { MessageCircle } from "lucide-react";

const PHONE = "5518991913165";
const MSG = "Olá! Vim pelo site da Treex e quero saber mais.";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MSG)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_0_24px_hsl(142_70%_45%/0.5)] transition-all hover:scale-110 hover:shadow-[0_0_40px_hsl(142_70%_45%/0.8)] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-25" />
      <MessageCircle className="relative h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
    </a>
  );
};

export default FloatingWhatsApp;
