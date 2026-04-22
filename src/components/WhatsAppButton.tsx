import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "whatsapp" | "outline";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

const PHONE = "5518991913165";

const WhatsAppButton = ({
  message = "Olá! Vim pelo site da Treex e quero saber mais sobre os serviços.",
  variant = "primary",
  size = "lg",
  className,
  children,
  showIcon = true,
}: WhatsAppButtonProps) => {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  const variants = {
    primary:
      "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-strong",
    whatsapp:
      "bg-whatsapp text-whatsapp-foreground shadow-[0_0_24px_hsl(142_70%_45%/0.5)] hover:shadow-[0_0_40px_hsl(142_70%_45%/0.7)]",
    outline:
      "border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary",
  };

  // Sizes mobile-first, escalando independentemente
  const sizes = {
    sm: "h-9 px-3.5 text-[13px] gap-1.5",
    default: "h-10 px-4 text-[13px] gap-2 sm:h-11 sm:px-5 sm:text-sm",
    lg: "h-12 px-5 text-[14px] gap-2 sm:h-13 sm:px-7 sm:text-[15px] md:h-14 md:px-8 md:text-base md:gap-3",
  };

  const iconSizes = {
    sm: "h-3.5 w-3.5",
    default: "h-4 w-4",
    lg: "h-4 w-4 sm:h-5 sm:w-5",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex max-w-full items-center justify-center whitespace-nowrap rounded-full font-semibold leading-none tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {showIcon && (
        <MessageCircle className={cn("shrink-0 transition-transform group-hover:rotate-12", iconSizes[size])} />
      )}
      <span className="truncate">{children ?? "Falar no WhatsApp"}</span>
    </a>
  );
};

export default WhatsAppButton;
