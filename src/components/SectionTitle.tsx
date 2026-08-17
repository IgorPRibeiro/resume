import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

/**
 * Título de painel. O filete vermelho de 64×4px é traçado da esquerda
 * quando o painel entra em cena.
 */
const SectionTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  /** Só para quem divide a linha com outro elemento e precisa zerar o
   *  respiro de 64px — o filete e a tipografia não se sobrescrevem. */
  className?: string;
}) => {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.4, "0px");

  return (
    <h2
      ref={ref}
      className={cn("section-title rule-draw", inView && "is-in", className)}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
