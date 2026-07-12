import type { Metadata } from "next";
import AboutHero from "@/components/nosotros/AboutHero";
import Mission from "@/components/nosotros/Mission";
import TeamValues from "@/components/nosotros/TeamValues";
import Process from "@/components/home/Process";
import NosotrosCTA from "@/components/nosotros/NosotrosCTA";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Nosotros | Especialistas en Optimización de Gastos | 4 Ases Sales",
  description:
    "Somos especialistas en optimización de gastos empresariales. Conoce quiénes somos, nuestros valores y qué nos diferencia de la competencia.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | 4 Ases Sales",
    description:
      "Especialistas en optimización de gastos empresariales. Transparencia, experiencia y valor humano.",
    url: "/nosotros",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "4 Ases Sales" }],
  },
};

export default function NosotrosPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros" },
        ])}
      />
      <AboutHero />
      <Mission />
      <TeamValues />
      <Process />
      <NosotrosCTA />
    </main>
  );
}
