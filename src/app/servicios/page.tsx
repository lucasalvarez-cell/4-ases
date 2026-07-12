import type { Metadata } from "next";
import ServicesHero from "@/components/servicios/ServicesHero";
import ServicesDetail from "@/components/servicios/ServicesDetail";
import ServicesSectors from "@/components/servicios/ServicesSectors";
import HomeCTA from "@/components/home/HomeCTA";
import JsonLd from "@/components/ui/JsonLd";
import { servicesPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Servicios de Optimización de Costes | 4 Ases Sales",
  description:
    "Optimizamos las principales partidas de gasto de tu empresa: personal, lavandería, F&B, mantenimiento y más. Sin costes, sin permanencias.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios de Optimización de Gastos | 4 Ases Sales",
    description:
      "Outsourcing y ETT, lavandería, F&B, menaje, mantenimiento y proyectos a medida. Reducimos tus costes empresariales sin comisiones ocultas.",
    url: "/servicios",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "4 Ases Sales" }],
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <JsonLd data={servicesPageSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ])}
      />
      <ServicesHero />
      <ServicesDetail />
      <ServicesSectors />
      <HomeCTA />
    </main>
  );
}
