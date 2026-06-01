import type { Metadata } from "next";
import AboutHero from "@/components/nosotros/AboutHero";
import Mission from "@/components/nosotros/Mission";
import TeamValues from "@/components/nosotros/TeamValues";
import Process from "@/components/home/Process";
import NosotrosCTA from "@/components/nosotros/NosotrosCTA";

export const metadata: Metadata = {
  title: "Nosotros | 4 Ases Sales",
  description:
    "Somos especialistas en optimización de gastos empresariales. Conoce quiénes somos, nuestros valores y qué nos diferencia de la competencia.",
  openGraph: {
    title: "Nosotros | 4 Ases Sales",
    description:
      "Especialistas en optimización de gastos empresariales. Transparencia, experiencia y valor humano.",
    url: "/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <main>
      <AboutHero />
      <Mission />
      <TeamValues />
      <Process />
      <NosotrosCTA />
    </main>
  );
}
